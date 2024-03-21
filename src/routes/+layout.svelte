<script lang="ts">
	import '../app.postcss';
	import NavBar from '$lib/Components/NavBar/NavBar.svelte';
	import SideBar from '$lib/Components/SideBar/SideBar.svelte';
	import Footer from '$lib/Components/Footer/Footer.svelte'

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Original classes for the Navbar, slot and Footer: <div class="w-full pl-0 md:pl-[5.2rem] xl:pl-[14rem]">
</script>

<div class="flex flex-row">
	<div class="md:w-[5.2rem] xl:w-[14rem] hidden md:block fixed h-screen">
		<SideBar />
	</div>
	<div class="flex flex-col min-h-screen w-full pl-0 md:pl-[5.2rem] xl:pl-[14rem]">
		<NavBar />
		<div class="flex-grow">
			<slot />
		</div>
		<Footer />
	</div>	
</div>

