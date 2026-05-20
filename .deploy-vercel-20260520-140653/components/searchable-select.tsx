"use client";

import { Check, Search, X } from "lucide-react";
import { type KeyboardEvent, useEffect, useId, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchableSelectProps {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  placeholder: string;
  emptyLabel?: string;
  required?: boolean;
  className?: string;
  maxVisibleOptions?: number;
}

export function SearchableSelect({
  id,
  label,
  value,
  options,
  onChange,
  placeholder,
  emptyLabel = "Nenhuma opção encontrada",
  required,
  className,
  maxVisibleOptions = 8
}: SearchableSelectProps) {
  const generatedId = useId();
  const listboxId = `${id || generatedId}-listbox`;
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const query = value;

  useEffect(() => {
    function closeWhenOutside(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeWhenOutside);
    return () => document.removeEventListener("pointerdown", closeWhenOutside);
  }, []);

  const filteredOptions = useMemo(() => {
    const normalizedQuery = normalize(query);
    const filtered = normalizedQuery
      ? options.filter(option => normalize(option).includes(normalizedQuery))
      : options;

    return filtered.slice(0, maxVisibleOptions);
  }, [maxVisibleOptions, options, query]);

  const hasMoreResults = options.length > filteredOptions.length && normalize(query) === "";
  const exactMatch = options.some(option => normalize(option) === normalize(value));

  function selectOption(option: string) {
    onChange(option);
    setOpen(false);
    setActiveIndex(0);
  }

  function handleInputChange(nextValue: string) {
    onChange(nextValue);
    setOpen(true);
    setActiveIndex(0);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex(index => Math.min(index + 1, Math.max(filteredOptions.length - 1, 0)));
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex(index => Math.max(index - 1, 0));
    }

    if (event.key === "Enter" && open && filteredOptions[activeIndex]) {
      event.preventDefault();
      selectOption(filteredOptions[activeIndex]);
    }

    if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const activeOptionId = open && filteredOptions[activeIndex] ? `${listboxId}-${activeIndex}` : undefined;

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <Search className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
      <Input
        id={id}
        value={query}
        required={required}
        type="search"
        role="combobox"
        autoComplete="off"
        aria-autocomplete="list"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-activedescendant={activeOptionId}
        aria-label={label}
        placeholder={placeholder}
        className="pr-10 pl-9"
        onFocus={() => setOpen(true)}
        onChange={event => handleInputChange(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      {query ? (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={`Limpar ${label.toLowerCase()}`}
          className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          onClick={() => {
            onChange("");
            setOpen(true);
            setActiveIndex(0);
          }}
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </Button>
      ) : null}

      {open ? (
        <div
          id={listboxId}
          role="listbox"
          aria-label={`Opções de ${label.toLowerCase()}`}
          className="absolute z-30 mt-2 max-h-72 w-full overflow-hidden rounded-md border border-cyan-300/25 bg-popover shadow-[0_22px_55px_rgba(0,0,0,.42)]"
        >
          {filteredOptions.length ? (
            <>
              <div className="max-h-64 overflow-y-auto py-1">
                {filteredOptions.map((option, index) => {
                  const selected = normalize(option) === normalize(value);
                  return (
                    <button
                      key={option}
                      id={`${listboxId}-${index}`}
                      type="button"
                      role="option"
                      aria-selected={selected}
                      className={cn(
                        "flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm text-foreground transition hover:bg-cyan-300/10 focus-visible:bg-cyan-300/10 focus-visible:outline-none",
                        index === activeIndex && "bg-cyan-300/10 text-cyan-50"
                      )}
                      onMouseDown={event => event.preventDefault()}
                      onClick={() => selectOption(option)}
                      onMouseEnter={() => setActiveIndex(index)}
                    >
                      <span className="min-w-0 truncate">{option}</span>
                      {selected ? <Check className="h-4 w-4 shrink-0 text-yellow-100" aria-hidden="true" /> : null}
                    </button>
                  );
                })}
              </div>
              {hasMoreResults ? (
                <p className="border-t border-border/70 px-3 py-2 text-xs leading-5 text-muted-foreground">
                  Digite para filtrar sem abrir a lista completa.
                </p>
              ) : null}
              {value && !exactMatch ? (
                <p className="border-t border-border/70 px-3 py-2 text-xs leading-5 text-muted-foreground">
                  Valor personalizado: {value}
                </p>
              ) : null}
            </>
          ) : (
            <p className="px-3 py-3 text-sm text-muted-foreground">{emptyLabel}</p>
          )}
        </div>
      ) : null}
    </div>
  );
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}
