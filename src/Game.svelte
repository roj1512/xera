<script lang="ts">
	import Input from "./Input.svelte"
	import Results from "./Results.svelte"

	export let words: string[]

	function fix(string: string) {
		string = string.replace(/‌/g, "")
		string = string.replace(/ـ/g, "")
		string = string.replace(/ه/g, "ھ")
		string = string.replace(/ي/g, "ی")
		string = string.replace(/ك/g, "ک")
		string = string.replace(/ة/g, "ە")
		string = string.replace(/ء/g, "ئ")
		string = string.replace(/ؤ/g, "ۆ")
		return string
	}

	function areEqual(x: string, y: string) {
		return fix(x) == fix(y)
	}

	function getRandomWord() {
		const toReturn = words[Math.floor(Math.random() * words.length)]
		words = words.filter(v => v != toReturn)
		return toReturn
	}

	let index = 0
	let word = getRandomWord()

	let started = false
	let finished = false

	let written = 0
	let mistakes = 0

	$: char = word[index]
	$: wpm = Math.round(written / 5)
	$: accuracy = Math.round(((written - mistakes) / written) * 100)

	window.onkeypress = function (e: any) {
		if (!started) {
			setTimeout(() => (finished = true), 60 * 1000)
			started = true
		}

		const input = String.fromCharCode(e.charCode)

		if (areEqual(input, char)) {
			if (word.length == index + 1) {
				index = 0
				word = getRandomWord()
			} else {
				index++
				written++
			}
		} else {
			mistakes++
		}
	}
</script>

{#if finished}
	<Results {wpm} {accuracy} />
{:else}
	<Input {index} {char} {word} />
{/if}
