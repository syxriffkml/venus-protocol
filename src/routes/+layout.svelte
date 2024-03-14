<script lang="ts">
	import '../app.postcss';
	import NavBar from '$lib/Components/NavBar/NavBar.svelte';
	import SideBar from '$lib/Components/SideBar/SideBar.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<div class="flex flex-row">
	<div class="md:w-[5.2rem] xl:w-[14rem] hidden md:block fixed h-screen">
		<SideBar />
	</div>
	<div class="w-full pl-0 md:pl-[5.2rem] xl:pl-[14rem]">
		<NavBar />
		<slot />
	</div>
</div>
