<script>
	import { link } from "svelte-spa-router";
	import active from "svelte-spa-router/active";
	const navigations = [
		{ label: "메시지 보내기(고객)", href: "/message/customer" },
		{ label: "메시지 보내기(달래머)", href: "/message/dallemer" },
		{ label: "Extentions", href: "/" },
	];
</script>

<style>
	.sidebar {
		display: flex;
		flex-direction: column;
		flex: 0 0 300px;
		padding: 20px;
		background: #ececec;
	}
	.header {
		font-size: 30px;
		font-weight: 300;
		color: #555;
	}
	.navigation {
		margin-top: 50px;
		display: flex;
		flex-direction: column;
	}
	.link {
		font-size: 25px;
		padding: 10px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #000;
		text-decoration: none;
	}
	.label {
		font-weight: 700;

		/*transition: all 0.3s;*/
	}
</style>

<div class="sidebar">
	<div class="header">달램 알림톡</div>
	<div class="navigation">
		{#each navigations as { label, href }}
			<a class="link" {href} use:link use:active>
				<span class="label">{label}</span>
			</a>
		{/each}
	</div>
</div>
