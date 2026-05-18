const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const requiredFiles = [
  "app/layout.tsx",
  "app/page.tsx",
  "app/globals.css",
  "components/tier-list-app.tsx",
  "components/item-detail-dialog.tsx",
  "components/mission-recommender.tsx",
  "components/loadouts-panel.tsx",
  "components/ui/button.tsx",
  "components/ui/dialog.tsx",
  "lib/tier-data.ts",
  "lib/tier-utils.ts",
  "lib/db.ts",
  "lib/loadout-store.ts",
  "app/api/loadouts/route.ts",
  "app/api/loadouts/[id]/route.ts",
  "db/schema.sql",
  "scripts/apply-schema.js",
  "tailwind.config.ts",
  "components.json",
  "public/assets/site-logo.svg"
];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) {
    throw new Error(`Missing migration file: ${file}`);
  }
}

JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
JSON.parse(fs.readFileSync(path.join(root, "data", "tier-list.json"), "utf8"));
JSON.parse(fs.readFileSync(path.join(root, "data", "tier-meta.json"), "utf8"));

const clientFiles = [
  "components/tier-list-app.tsx",
  "components/item-detail-dialog.tsx",
  "components/mission-recommender.tsx",
  "components/loadouts-panel.tsx"
];

for (const file of clientFiles) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  if (source.includes("@/lib/tier-data")) {
    throw new Error(`${file} imports server-only tier-data module`);
  }
}

const legacyFiles = [
  "index.html",
  "assets/js/app.bundle.js",
  "assets/styles/main.css",
  "data/tier-list-data.js"
];

for (const file of legacyFiles) {
  if (fs.existsSync(path.join(root, file))) {
    throw new Error(`Legacy file should be removed after migration: ${file}`);
  }
}

const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
if (!serverSource.includes('require("next")')) {
  throw new Error("server.js should start the Next.js app");
}

console.log("migration file validation ok");
