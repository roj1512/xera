export const path = new URL("wordlist.txt", import.meta.url).pathname

export const wordlist = (await Deno.readTextFile(path))
	.split("\n")
	.map(v => v.trim())
