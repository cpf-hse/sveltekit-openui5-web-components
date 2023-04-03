<script lang="ts">
	import './styles.css';
	import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
	import '@ui5/webcomponents/dist/Assets';
	import '@ui5/webcomponents-fiori/Assets';
	import '@ui5/webcomponents-fiori/dist/Page';
	import '@ui5/webcomponents-fiori/dist/Bar';
	import '@ui5/webcomponents/dist/Label';
	import '@ui5/webcomponents/dist/Button';
	import '@ui5/webcomponents-icons/dist/key';

	import { auth, FirebaseError, provider, signInWithRedirect } from '$lib/firebase/setup';

	import { onMount } from 'svelte';

	onMount(() => {
		setTheme('sap_horizon');
	});

	async function loginRedirect(): Promise<void> {
		try {
			await signInWithRedirect(auth, provider);
		} catch (error) {
			console.error(error);
		}
	}
</script>

<svelte:head>
	<title>HSE Login</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="main">
	<ui5-page>
		<ui5-bar design="Header" slot="header">
			<ui5-label class="text-2xl">HSE Login</ui5-label>
		</ui5-bar>

		<div class="flex flex-row justify-center items-stretch mt-20">
			<ui5-button icon="key" on:click|stopPropagation={loginRedirect} on:keydown={loginRedirect}
				>Login mit HSE Benutzer (Single Sign On)</ui5-button
			>
		</div>
	</ui5-page>
</div>

<style>
	.main {
		width: 100%;
		height: 100%;
		margin: 0;
	}
</style>
