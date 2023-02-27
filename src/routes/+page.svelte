<script lang="ts">
	import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
	import '@ui5/webcomponents-icons/dist/employee';
	import '@ui5/webcomponents/dist/Assets';
	import '@ui5/webcomponents-fiori/dist/Page';
	import '@ui5/webcomponents-fiori/dist/Bar';
	import '@ui5/webcomponents/dist/Label';
	import '@ui5/webcomponents/dist/Button';

	import { onMount } from 'svelte';

	onMount(() => {
		console.log('the component has mounted');
		setTheme('sap_horizon_dark');
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	<ui5-page>
		<ui5-bar design="Header" slot="header">
			<ui5-label>Header Title</ui5-label>
		</ui5-bar>
		<div style="background-color: blue;">
			<section>
				<p>Test Test test</p>
			</section>
		</div>
	</ui5-page>
</div>
