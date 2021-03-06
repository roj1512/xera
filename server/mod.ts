import { Application, Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { wordlist } from "./wordlist.ts";
import { shuffle } from "./utils.ts";

const app = new Application();
const router = new Router();

router.get("/nextContent", (ctx) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  ctx.response.body = shuffle(wordlist).slice(0, 30);
});

app.use(router.routes());

await app.listen({ port: 3000 });
