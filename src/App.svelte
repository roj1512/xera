<script lang="ts">
	import Game from "./Game.svelte"

	const wordlistUrl =
		"https://raw.githubusercontent.com/layik/kurdi/master/corpus/kurdi_words.txt"

	const fetchWords = (async () => {
		const result = await fetch(wordlistUrl)
		return (await result.text())
			.split("\n")
			.map(v => v)
			.filter(v => !v.includes(" "))
			.filter(v => v.length >= 3)
	})()
</script>

<main>
	{#await fetchWords}
		<h1>تکایە چاوەڕوان بە...</h1>
	{:then words}
		<Game {words} />
	{:catch err}
		<p>{err}</p>
	{/await}
</main>

<style lang="stylus" global>
	@import 'styles/variables'

	*
		user-select none

	body
		color dark
		height 100vh
		display flex
		font-family Vazir
		align-items center
		flex-direction column
		background-color light
		justify-content center
	
	main
		text-align center
</style>
