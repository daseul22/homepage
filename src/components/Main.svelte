<script>
	export let label
</script>

<style>
	main {
		flex: 1;
		padding: 40px;
		overflow-y: scroll;
		background: #f5f5f5;
	}
	h1 {
		font-size: 50px;
		font-weight: 300;
	}
</style>

<main>
	<div class="container">
		<h1>{label}</h1>
		<slot />
	</div>
</main>
