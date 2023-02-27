<script>
	import "@ui5/webcomponents-fiori/dist/Page.js";
	import "@ui5/webcomponents-fiori/dist/Bar.js";
	import "@ui5/webcomponents/dist/Label";
	import "@ui5/webcomponents/dist/Button";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<ui5-page>
	<ui5-bar design="Header" slot="header">
		<ui5-label>Header Title</ui5-label>	
	</ui5-bar>
	<div>
		<ui5-button icon="employee">Add</ui5-button>
	</div>
</ui5-page>
