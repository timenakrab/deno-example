import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

import router from "./route.ts";

const app = new Application();
const { PORT } = config({ safe: true });

app.addEventListener("listen", ({ hostname, port, secure }) => {
  const sec = secure ? "https://" : "http://";
  const host = hostname ?? "localhost";
  console.log(`Listening on: ${sec}${host}:${port}`);
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: Number(PORT) });
