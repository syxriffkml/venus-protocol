<script lang="ts">

    import Button from "../Button/Button.svelte";
    import * as sidebar_svg from "../SVG/sidebar_svg";
    import { onMount } from 'svelte';
    import { currentTabName } from "$lib/headerStore";
    import Icon from '@iconify/svelte';


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

<div use:setCurrentPage class="bg-transparent h-full w-full flex flex-col gap-y-12">

    <div class="w-full h-full overflow-y-scroll flex flex-col">
        {#each tabs as tab(tab.href)}
            <Button 
                width="w-full" mode="side" rounded="rounded-none" 
                customClass="h-[56px] {currentPage === tab.href ? 'active' : ''}" 
                handler={(()=>{ handleClickTab(tab); })}
            >
                <div class="flex flex-row items-center justify-between">
                    <div class="flex flex-row items-center gap-x-2">
                        <div class="{currentPage === tab.href ? 'text-[#3a78ff]' : ''}">
                            {@html tab.icon}
                        </div>
                        <p class="inline font-medium">{tab.name}</p>
                    </div>

                    <Icon icon="mingcute:right-line" class="w-6 h-auto"/>
                </div>
            </Button>
        {/each}
    </div>   
     
</div>