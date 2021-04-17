<script>
	import { link } from "svelte-spa-router"
	import active from "svelte-spa-router/active"
</script>

<style lang="scss">
	#app-body {
		max-width: 940px;
		margin: 0 auto;
	}
</style>

<div id="app-body">
	<slot />
</div>
