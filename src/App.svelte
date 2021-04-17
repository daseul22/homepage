<script>
	import Router from "svelte-spa-router"
	import { routes } from "./routes"
	import { Header, Body, Footer } from "./components"
</script>

<style lang="scss">
	#app-wrap {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>

<div id="app-wrap">
	<Header />
	<Body>
		<Router {routes} />
	</Body>
	<Footer />
</div>
