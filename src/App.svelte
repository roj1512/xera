<script lang="ts">
	import Game from "./Game.svelte"
	import { nextContent } from "./utils"
</script>

<header></header>

<main>
	{#await nextContent()}
		<h2>چاوەڕوان بە...</h2>
	{:then content}
		<Game {content} />
	{/await}
</main>

<footer>
	<!-- <p>
		&copy; {new Date().getFullYear()} <a href="https://roj.im">ڕۆژ</a> &middot;
		<a href="https://github.com/roj1512/xera">سەرچاوە</a>
	</p> -->
</footer>

<style lang="stylus" global>
	@import 'styles/variables'

	*
		margin 0
		padding 0
		box-sizing border-box
		transition-duration 250ms
		transition-timing-function linear

	html
		&, body
			height 100%

		body
			color dark
			display flex
			padding 2rem
			font-size 1rem
			font-family 'Noto Naskh Arabic', serif
			flex-direction column
			background-color light
			justify-content space-between

	main
		align-self center

	footer
		user-select none
		text-align center

		a
			text-decoration none
			border-bottom 1px solid

			&, &:visited
				color inherit

			&:hover
				background-color light-alt
</style>
