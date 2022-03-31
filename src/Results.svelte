<script lang="ts">
	export let wpm: number
	export let accuracy: number
	export let mistakes: number

	accuracy = accuracy || 0

	const text = `${wpm} وشە لە خولەکێکدا بە وردیی ${accuracy}% بە تەختەکلیلی کوردی دەنووسم. تۆش بزانە چەندێک خێرایت!`
	const textWithHref = text + '\n'+ location.href;

	const twitterHref = `https://twitter.com/share?text=${text}`
	const telegramHref = `https://t.me/share?url=${textWithHref}`
</script>

<h2>
	لە یەک خولەکدا {wpm} وشە دەنووسیت بە وردیی {accuracy}% ({mistakes} هەڵە).
</h2>

<ul>
	<li>
		<h1>
			<a href={twitterHref}
				><i class="fab fa-twitter" /></a
			>
		</h1>
	</li>
	<li>
		<h1>
			<a href={telegramHref}
				><i class="fab fa-telegram-plane" /></a
			>
		</h1>
	</li>
</ul>

<style lang="stylus">
	@import 'styles/variables'

	*
		margin 0
		padding 0

	h2
		margin-bottom 1rem

	ul
		display flex
		list-style none
		margin-top 1rem
		align-items center
		justify-content space-evenly

	a
		&, &:visited
			color inherit
		
		&:hover
			color light-alt
</style>
