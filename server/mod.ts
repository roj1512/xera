import { Application, Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import _ from "https://deno.land/x/lodash@4.17.19/lodash.js";

const app = new Application();
const router = new Router();
const wordlist = (await Deno.readTextFile("wordlist.txt")).split("\n");

function shuffle(a: string[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

router.get("/nextContent", (ctx) => {
  ctx.response.body = shuffle(wordlist).slice(0, 30);
});

app.use(router.routes());

await app.listen({ port: 3000 });
