<script lang="ts">
	export let content: string[]
	export let currLineIndex: number
	export let currCharIndex: number
	export let onInput: (e: any) => void = console.log

	$: prevLine = content[currLineIndex - 1]
	$: currLine = content[currLineIndex]
	$: nextLine = content[currLineIndex + 1]
	$: afterNextLine = content[currLineIndex + 2]

	$: currChar = content[currLineIndex][currCharIndex]
</script>

<label>
	<!-- {#if prevLine}
		<h2><span class="complete">{prevLine}</span></h2>
	{/if} -->
	<input id="input" type="text" name="" on:input={onInput} />
	<h2>
		<span class="complete">{currLine.slice(0, currCharIndex)}</span><span
			class="index">{currChar}</span
		>{currLine.slice(currCharIndex + 1, currLine.length)}
	</h2>
	{#if nextLine}
		<h2>
			{nextLine}
		</h2>
	{/if}
	{#if !prevLine}
		<h2>{afterNextLine}</h2>
	{/if}
</label>

<style lang="stylus">
	@import 'styles/variables'

	h2
		line-height 1.5

	input
		width 1px
		opacity 0
		height 1px
		border none
		outline none
		position absolute

	.complete
		opacity 0

	.index
		// background-color light-alt
		animation blink 700ms infinite linear

	@keyframes blink
		50%
			color light
			background-color dark

		to
			color dark
			background-color light
</style>
