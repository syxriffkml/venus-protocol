<script lang="ts">

    import Button from "../Button/Button.svelte";
    import * as sidebar_svg from "../SVG/sidebar_svg";
    import { onMount } from 'svelte';
    import { currentTabName } from "$lib/headerStore";

    let tabs = [
        {name: 'Dashboard', icon: sidebar_svg.dashboard, href: '/'},
        {name: 'Core pool', icon:sidebar_svg.core_pool, href: '/core-pool'},
        {name: 'Isolated pools', icon: sidebar_svg.isolated_pool, href: '/isolated-pools'},
        {name: 'Vaults', icon: sidebar_svg.vaults, href: '/vaults'},
        {name: 'Swap', icon: sidebar_svg.swap, href: '/swap'},
        {name: 'History', icon: sidebar_svg._history, href: '/history'},
        {name: 'Governance', icon: sidebar_svg.governance, href: '/governance'},
        {name: 'XVS', icon: sidebar_svg.xvs, href: '/xvs'},
        {name: 'VAI', icon: sidebar_svg.vai, href: '/vai'},
        {name: 'Convert VRT', icon: sidebar_svg.vrt, href: '/convert-vrt'},
        {name: 'Bridge', icon: sidebar_svg.bridge, href: '/bridge'},
    ];

    function handleClickTab(tab: any) {
        window.location.href = tab.href;
    }

    let currentPage = '';
    function setCurrentPage(node: any) {
        currentPage = window.location.pathname;
    }

    onMount(() => {
        const currentTab = tabs.find(tab => tab.href === currentPage);
        const currentUrl = window.location.href;

        if (currentUrl.includes('proposal')) {
            currentTabName.set(`Governance / Proposal`);
        } else if (currentTab) {
            currentTabName.set(currentTab.name);
        } else {
            console.log("Current page:", currentPage, "No matching tab found");
        }
    });
</script>

<div use:setCurrentPage class="bg-[#1e2431] h-full flex flex-col gap-y-12">

    <button class="flex items-center justify-center w-full pt-8" on:click={(()=>{ window.location.href = '/' })}>
        <img src="https://app.venus.io/assets/venusLogoWithText-998abf9a.svg" alt="img" class="h-9 hidden xl:block">
        <img src="https://app.venus.io/assets/venusLogo-ccf6fbc9.svg" alt="Venus logo" class="h-9 block xl:hidden">
    </button>

    <div class="w-full overflow-y-auto flex flex-col items-center xl:flex-none" style="height: calc(100vh - 116px);">
        {#each tabs as tab(tab.href)}
            <Button 
                width="w-[55px] xl:w-full" mode="side" rounded="rounded-xl xl:rounded-none" 
                customClass="h-[56px] {currentPage === tab.href ? 'active' : ''}" 
                handler={(()=>{ handleClickTab(tab); })}
            >
                <div class="flex flex-row items-center justify-center xl:justify-normal pl-0 xl:pl-4">
                    {@html tab.icon}
                    <p class="hidden xl:inline font-medium">{tab.name}</p>
                </div>
            </Button>
        {/each}
    </div>   
     
</div>