<script>
	import { link } from "svelte-spa-router"
	import active from "svelte-spa-router/active"

	let navigation = [
		{
			label: "Front-end",
			href: "/front-end"
		},
		{
			label: "Back-end",
			href: "/back-end"
		},
		{
			label: "DevSecOps",
			href: "/dev-sec-ops"
		},
		{
			label: "Others",
			href: "/others"
		}
	]
</script>

<style lang="scss">
	.header {
		display: flex;
		height: 50px;
		align-items: center;
		font-size: 1.4rem;
		max-width: 1200px;
		margin: 0 auto;
		justify-content: space-around;

		.logo {
			display: flex;
			width: 200px;
			justify-content: center;
		}
		.menuvar {
			.label {
				padding : {
					left: 10px;
				}
				margin: {
					left: 5px;
					right: 5px;
				}
			}
		}
	}
</style>

<div class="header">
	<div class="logo"><a href="/" use:link use:active> Daseul22 </a></div>
	<div class="menuvar">
		{#each navigation as { label, href }}
			<a class="menu-link" {href} use:link use:active>
				<span class="label">{label}</span>
			</a>
		{/each}
	</div>
</div>
