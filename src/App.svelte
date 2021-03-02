<script>
	import Router from "svelte-spa-router"
	import {routes} from "./routes"
	import Sidevar from "./components/Sidebar.svelte"
	
</script>

<style>

	:global(*) {
		box-sizing: border-box;
	}
	.root {
		display: flex;
		width: 100vw;
		height: 100vh;
	}
</style>

<div class="root">
	<Sidevar />
	<Router {routes} />
</div>
