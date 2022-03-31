<script lang="ts">
	import Input from "./Input.svelte"
	import Results from "./Results.svelte"
	import { areEqual, getContentLength } from "./utils"

	export let content: string[]

	let time = 1
	let currLineIndex = 0
	let currCharIndex = 0

	let started = false
	let finished = false

	let startTime: number
	let timeout: NodeJS.Timeout

	let written = 0
	let mistakes = 0

	$: currLine = content[currLineIndex]
	$: currChar = currLine[currCharIndex]
	$: wpm = Math.floor(Math.round(written / 5) / time)
	$: accuracy = Math.round(((written - mistakes) / written) * 100)

	function onInput(e: any) {
		if (finished) return
		const input = e.data
		if (!input) {
			return
		}
		if (areEqual(input, currChar)) {
			if (!started) {
				started = true
				startTime = Date.now()
				timeout = setTimeout(() => (finished = true), time * 60 * 1000)
			}
			written++
			if (written == getContentLength(content)) {
				clearTimeout(timeout)
				time = (Date.now() - startTime) / 1000 / 60
				finished = true
			} else if (currLine[currCharIndex + 1] == undefined) {
				currLineIndex++
				currCharIndex = 0
			} else currCharIndex++
		} else {
			mistakes++
		}
	}
</script>

{#if finished}
	<Results {wpm} {accuracy} {mistakes} />
{:else}
	<Input {currCharIndex} {currLineIndex} {content} {onInput} />
{/if}
