<script lang="ts">
	export let char: string
	export let word: string
	export let index: number
</script>

<h1>
	{word.slice(0, index)}<span>{char}</span>{word.slice(index + 1, word.length)}
</h1>

<style lang="stylus">
	@import 'styles/variables'

    span
        animation blink 700ms infinite linear

	@keyframes blink
		from, 49%
			color inherit
			background none
		
		50%, to
			color light
			background-color dark
</style>
