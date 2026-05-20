const { createServer } = require("http");
const next = require("next");

const port = Number(process.env.PORT || 3000);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => handle(req, res)).listen(port, () => {
      console.log(`Next.js rodando em http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Falha ao iniciar o Next.js:", error);
    process.exit(1);
  });
