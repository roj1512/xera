import { fix } from "./utils.ts";
import { path, wordlist } from "./wordlist.ts";

let newWordlist = wordlist;

// trim lines

newWordlist.map((l) => l.trim());

// repair broken characters

newWordlist.map(fix);

// -- empty lines

newWordlist = wordlist.filter((l) => l);

// -- small lines

newWordlist = wordlist.filter((l) => l.length > 1);

// -- duplicates

newWordlist = [...new Set(wordlist)];

// rewrite the wordlist

await Deno.writeTextFile(path, newWordlist.join("\n"));
