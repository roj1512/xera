const { readFileSync } = require("fs");

const words = Object.values(
  JSON.parse(readFileSync("src/words.json").toString())
).filter((v) => !v.includes(" "));

for (let i = 0; i < 10; i++) {
  console.log(words[Math.floor(Math.random() * words.length)]);
}
