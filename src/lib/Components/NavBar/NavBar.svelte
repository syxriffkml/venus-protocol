<script lang="ts">
    import Button from "../Button/Button.svelte";
    import Icon from '@iconify/svelte';
    import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
    import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
    import { initializeStores } from '@skeletonlabs/skeleton';
    import NavDrawer from '$lib/Components/NavBar/NavDrawer.svelte';
    import { currentTabName } from "$lib/headerStore";
	import { slide } from "svelte/transition";
    import ComboBox from '$lib/Components/ComboBox/ComboBox.svelte';
    
    import Modal from '$lib/Components/Modal/Modal.svelte';
    import WalletModal from "$lib/Components/Modal/ModalTemplate/WalletModal.svelte";

    let walletModal: Modal;
    let chainModal: Modal;

    //Close wallet modal
    const closeWalletModal = () => {
        if (walletModal) {
            walletModal.closeModal();
        }
    };

    initializeStores();
    const drawerStore = getDrawerStore();

    function hideDrawer() {
		drawerStore.close();
	}

    const drawerSettings: DrawerSettings = {
		id: 'sidebar-drawer',
		// Provide your property overrides:
		bgDrawer: 'bg-[#181d27] text-white !z-[100]',
		bgBackdrop: 'bg-transparent !z-[1]',
		width: 'h-auto w-full',
		padding: '',
		rounded: 'rounded-none',
		position: 'bottom',
	};

    let page_name: string;
    currentTabName.subscribe(value => {
        page_name = value;
    });

    let drawerOpen: boolean = false;

    //Chain data
    let chainData = [
		{ header: 'BNB Chain', img: "https://app.venus.io/assets/bnb-8cd7030f.svg", info: 0 },
        { header: 'Ethereum', img: "https://app.venus.io/assets/eth-ffd84278.svg", info: 0  },
        { header: 'opBNB', img: "https://app.venus.io/assets/opbnb-d7900a03.svg", info: 0  },
	];

    //Chain Dropdown declaration
    let walletChainDropdown : boolean = false;
    let chainHeader: string = chainData[0].header;
    let chainImg : string = chainData[0].img;
</script>

<div class="flex flex-row items-center justify-between px-4 sm:py-4 sm:px-8 h-[85px] md:h-[112px] backdrop-blur-md bg-[#181d27] md:bg-transparent fixed md:static top-0 z-10 w-full">

    <!--Mobile View-->
    <div class="md:hidden flex items-center justify-center h-full">
        <button on:click={(()=>{ window.location.href = '/' })}>
            <img src="https://app.venus.io/assets/venusLogo-ccf6fbc9.svg" alt="Venus logo" >
        </button>
    </div>
    <!--End of Mobile View-->


    <!--Desktop View-->
    <div class="hidden md:flex items-center justify-center">
        <p class="text-xl font-bold">{page_name}</p>
    </div>

    <div class="flex flex-row items-center gap-x-2">

        <button class="w-auto h-[40px] sm:h-[48px] bg-[#1e2431] hover:bg-[#2d3549] py-2 px-4 rounded-lg flex md:hidden flex-row items-center justify-between border border-gray-700 gap-x-2" on:click={() => { chainModal.openModal() }}>
            <div class="flex flex-row items-center gap-x-2">
                <img src={chainImg} alt="img" class="h-5 w-5">
                <p class="text-sm font-semibold hidden lg:inline">{chainHeader}</p>
            </div>
            <Icon icon="mingcute:down-line" class="h-5 w-5"/>
        </button>

        <div class="w-full relative hidden md:inline">
            <ComboBox headSelect={chainHeader} imgSelect={chainImg} bind:showCombo={walletChainDropdown} classes="!w-[200px] !h-[40px] sm:!h-[48px] !bg-[#1e2431] hover:!bg-[#2d3549] !border !border-gray-700">
                <div class="z-[9999] ">
                    <div class="max-h-[215px] overflow-auto">
                        <p class="text-xs text-[#98abca] w-full text-left py-2 pl-2 cursor-default" on:click|stopPropagation role="none">Select network</p>
                        {#each chainData as c}
                            <button 
                                class="flex justify-between items-center gap-x-2 p-2 z-20 w-full hover:bg-[#2d3549] hover:rounded-lg" 
                                on:click={(()=>{ chainHeader = c.header; chainImg = c.img; console.log(chainHeader,chainImg); })}
                            >
                                <div class="flex flex-row items-center gap-x-2">
                                    <img src={c.img} alt="" class="w-5 h-5 my-auto">
                                    <p>{c.header}</p>
                                </div>
                                
                                {#if c.header === chainHeader}
                                    <div class="">
                                        <Icon icon="charm:tick" class="text-[#01bd8a] mr-2"/>
                                    </div>
                                {/if}
                            </button>
                        {/each}
                    </div>
                </div>
            </ComboBox>
        </div>

        <Button width="w-auto" mode="blue" rounded="rounded-lg" customClass="h-[40px] sm:h-[48px] whitespace-nowrap text-xs sm:text-base font-medium sm:font-normal" handler={(event) => { walletModal.openModal() }}>Connect Wallet</Button>
    </div>
    <!--End of Desktop View-->


    <!--Mobile View-->
    <button 
        class="flex md:hidden items-center justify-center p-2 bg-white/5 rounded-lg z-[1] h-[40px]" 
        on:click={(()=>{ 
            drawerOpen ? hideDrawer() : drawerStore.open(drawerSettings);
            drawerOpen = !drawerOpen;
        })}
    >
        {#if drawerOpen}
            <div in:slide>
                <Icon icon="ic:round-close" class="w-6 h-auto"/>
            </div>
        {:else}
            <div in:slide>
                <Icon icon="solar:hamburger-menu-linear" class="w-6 h-auto"/>
            </div>
        {/if}
    </button>
    <!--End of Mobile View-->
</div>

<div class="w-full px-8 pb-4 flex md:hidden mt-[85px]">
    <p class="text-xl font-bold">{page_name}</p>
</div>

<Drawer>
    <div class=" py-2" style="height: calc(100vh - 85px);">
        <NavDrawer/>
    </div>
</Drawer>

<Modal bind:this={walletModal} title="Connect a wallet" desktopWidth="md:w-[542px]" mobileWidth="w-auto">
   <WalletModal {closeWalletModal}/>
</Modal>

<Modal bind:this={chainModal} title="Select network">
    <div class="my-2 flex flex-col gap-y-2">
        {#each chainData as c}
            <button 
                class="flex justify-between items-center gap-x-2 p-2 z-20 w-full hover:bg-[#2d3549] hover:rounded-lg" 
                on:click={(()=>{ chainHeader = c.header; chainImg = c.img; console.log(chainHeader,chainImg); chainModal.closeModal(); })}
            >
                <div class="flex flex-row items-center gap-x-2">
                    <img src={c.img} alt="" class="w-5 h-5 my-auto">
                    <p>{c.header}</p>
                </div>
                
                {#if c.header === chainHeader}
                    <div class="">
                        <Icon icon="charm:tick" class="text-[#01bd8a] mr-2"/>
                    </div>
                {/if}
            </button>
        {/each}
    </div>
</Modal>