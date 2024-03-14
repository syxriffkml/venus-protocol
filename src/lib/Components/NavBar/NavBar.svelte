<script lang="ts">
    import Button from "../Button/Button.svelte";
    import Icon from '@iconify/svelte';

    import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
    import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
    import { initializeStores } from '@skeletonlabs/skeleton';

    import SideBar from '$lib/Components/SideBar/SideBar.svelte';

    initializeStores();
    const drawerStore = getDrawerStore();

    function hideDrawer() {
		drawerStore.close();
	}

    const drawerSettings: DrawerSettings = {
		id: 'sidebar-drawer',
		// Provide your property overrides:
		bgDrawer: 'bg-[#0a0a0a] text-white z-[100]',
		bgBackdrop: 'bg-black/50 z-[100]',
		width: 'h-auto sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 w-full',
		padding: '',
		rounded: 'rounded-none',
		position: 'left'
	};
</script>

<div class="flex flex-row justify-between p-4 h-[112px] backdrop-blur-md bg-transparent sticky top-0 z-10">
    <!--Desktop View-->
    <div class="hidden md:flex items-center justify-center">
        <p class="text-xl font-bold">Dashboard</p>
    </div>

    <div class="flex flex-row items-center gap-x-2">

        <button class="w-auto lg:w-[200px] h-[48px] bg-[#1e2431] hover:bg-[#2d3549] py-2 px-4 rounded-lg flex flex-row items-center justify-between border border-gray-700 gap-x-2 lg:gap-x-0">
            <div class="flex flex-row items-center gap-x-2">
                <img src="https://app.venus.io/assets/bnb-8cd7030f.svg" alt="img" class="h-5 w-5">
                <p class="text-sm font-semibold hidden lg:inline">BNB Chain</p>
            </div>
            <Icon icon="mingcute:down-line" class="h-5 w-5"/>
        </button>
        
        <Button width="w-auto" mode="blue" rounded="rounded-lg" customClass="h-[48px]" handler={(event) => {  }}>Connect Wallet</Button>
    </div>
    <!--End of Desktop View-->




    <!--Mobile View-->
    <button class="flex md:hidden items-center justify-center p-2 hover:bg-black/25 rounded-lg z-[1]" on:click={(()=>{ drawerStore.open(drawerSettings); })}>
        <Icon icon="solar:hamburger-menu-linear" class="w-8 h-8"/>
    </button>

    <!--End of Mobile View-->
</div>

<Drawer>
    <p>Test</p>
    <button on:click={hideDrawer}>
        <Icon icon="ic:round-close" class="w-8 h-8"/>
    </button>
</Drawer>


