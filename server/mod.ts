import { Application, Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { shuffle } from "./utils.ts";

const app = new Application();
const router = new Router();
const wordlist =
  (await Deno.readTextFile(new URL("wordlist.txt", import.meta.url).pathname))
    .split("\n");

app.use((ctx) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
});

router.get("/nextContent", (ctx) => {
  ctx.response.body = shuffle(wordlist).slice(0, 30);
});

app.use(router.routes());

await app.listen({ port: 3000 });
