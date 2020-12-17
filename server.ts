import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

import router from "./route.ts";

const app = new Application();
const { PORT } = config({ safe: true });

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port ${PORT}`);

app.listen({ port: Number(PORT) });
