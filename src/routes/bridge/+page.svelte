<script lang="ts">
	import Card from '$lib/Components/Card/Card.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Icon from '@iconify/svelte';
    import ComboBox from '$lib/Components/ComboBox/ComboBox.svelte';
    import {layer_zero} from '$lib/Components/SVG/bridge_svg'
    import Modal from '$lib/Components/Modal/Modal.svelte';
    import WalletModal from "$lib/Components/Modal/ModalTemplate/WalletModal.svelte";

    let walletModal: Modal;
    //Close wallet modal
    const closeWalletModal = () => {
        if (walletModal) {
            walletModal.closeModal();
        }
    };


    let fromData = [
		{ header: 'BNB Chain', img: "https://app.venus.io/assets/bnb-8cd7030f.svg", info: 0 },
	];

    let toData = [
        { header: 'Ethereum', img: "https://app.venus.io/assets/eth-ffd84278.svg", info: 0  },
        { header: 'opBNB', img: "https://app.venus.io/assets/opbnb-d7900a03.svg", info: 0  },

	];

    //Search input
    let searchFrom: String = '';
    $: filteredFromData = fromData.filter(item => item.header.toLowerCase().includes(searchFrom.toLowerCase()));

    let searchTo: String = '';
    $: filteredToData = toData.filter(item => item.header.toLowerCase().includes(searchTo.toLowerCase()));

    //From dropdown selected value
    let fromHeader: string = fromData[0].header;
    let fromImg:string = fromData[0].img;

    //To dropdown selected value
    let toHeader: string = toData[0].header;
    let toImg:string = toData[0].img;

    //Dropdown Declaration
    let showFromDropdown : boolean = false;
    let showToDropdown : boolean = false;

    //Swap fucntion
    function swap() {
        [fromHeader, toHeader] = [toHeader, fromHeader];
        [fromImg, toImg] = [toImg, fromImg];
        [fromData, toData] = [toData, fromData];

    }

    let bridgeInput: string = '';
    function handleInput(event: any) {
        event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        if (event.target.name === 'bridgeInput') {
            bridgeInput = event.target.value;
        
        }
    }
</script>


<div class="h-auto w-full flex flex-col xl:max-w-[90rem] items-start mx-auto px-8 gap-6 mb-4">
	
    <div class="flex flex-col gap-y-4 items-center justify-center w-full">
        <Card customClass="!border-none !rounded-2xl" width="w-full md:w-[550px]">

            <div class="flex flex-col gap-y-6">
                <div class="flex flex-col md:flex-row items-center gap-x-6">
                    <div class="flex flex-col gap-y-2 w-full md:w-[211px] relative">
                        <p class="text-[#98abca] text-sm font-semibold">From</p>
                        <ComboBox headSelect={fromHeader} imgSelect={fromImg} bind:showCombo={showFromDropdown} classes="!h-[44px]">
                            <div class="z-[9999] ">
                                <div class="max-h-[215px] overflow-auto">
                                    {#each filteredFromData as f}
                                        <button 
                                            class="flex justify-between items-center gap-x-2 p-2 z-20 w-full hover:bg-[#2d3549] hover:rounded-lg" 
                                            on:click={(()=>{ fromHeader = f.header; fromImg = f.img; console.log(fromHeader,fromImg); })}
                                        >
                                            <div class="flex flex-row items-center gap-x-2">
                                                <img src={f.img} alt="" class="w-5 h-5 my-auto">
                                                <p>{f.header}</p>
                                            </div>
                                            
                                            {#if f.header === fromHeader}
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

                    <div class="flex flex-col items-center justify-end w-fit translate-y-3">
                        <button class="w-auto p-2 h-auto rotate-0 md:rotate-90" on:click={swap}>
                            <Icon icon="iconamoon:swap-light" class="h-6 w-6 text-[#3a78ff]"/>
                        </button>
                    </div>

                    <div class="flex flex-col gap-y-2 w-full md:w-[211px] relative">
                        <p class="text-[#98abca] text-sm font-semibold">To</p>
                        <ComboBox headSelect={toHeader} imgSelect={toImg} bind:showCombo={showToDropdown} classes="!h-[44px]">
                            <div class="z-[9999]">
                                <div class="max-h-[215px] overflow-auto">
                                    {#each filteredToData as t}
                                        <button 
                                            class="flex justify-between items-center gap-x-2 p-2 z-20 w-full hover:bg-[#2d3549] hover:rounded-lg" 
                                            on:click={(()=>{ toHeader = t.header; toImg = t.img; console.log(toHeader,toImg); })}
                                        >
                                            <div class="flex flex-row items-center gap-x-2">
                                                <img src={t.img} alt="" class="w-5 h-5 my-auto">
                                                <p>{t.header}</p>
                                            </div>
                                            
                                            {#if t.header === toHeader}
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
                </div>

                <div class="flex flex-col gap-y-2 w-full">
                    <p class="text-[#98abca] text-sm font-semibold">Amount</p>
                    <div class="relative flex w-full h-14 items-center justify-between rounded-lg border border-white/5 bg-[#181d27] px-2">
                        <div class="flex flex-row gap-x-2">
                            <img src="https://app.venus.io/assets/xvs-e7b82352.svg" alt="img" class="w-8 h-auto">
                        </div>
                        <input type="text" placeholder="0.00" class="w-full bg-transparent focus:outline-none border-none focus:ring-0" name="bridgeInput" on:input={handleInput} bind:value={bridgeInput}/>

                        <div class="flex flex-row gap-x-2 h-[40px]">
                            <button class="w-auto h-auto bg-[#2d3549] hover:bg-[#4c5670] py-2 px-3 rounded-lg flex items-center justify-center text-[#a1b2ca] whitespace-nowrap">
                                MAX
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-row items-center justify-between w-full">
                        <p class="text-[#8fa5ad] text-sm md:text-base">Wallet balance</p>
                        <p class="text-sm md:text-base">0 XVS</p>
                    </div>
                </div>

                <div class="flex flex-row items-center justify-between w-full">
                    <p class="text-[#8fa5ad] text-sm md:text-base">Bridge gas fee</p>
                    <p class="text-sm md:text-base">0 BNB</p>
                </div>

                <Button width="w-full" mode="blue" rounded="rounded-lg" customClass="h-[40px] sm:h-[48px] whitespace-nowrap text-xs sm:text-base font-medium sm:font-normal" handler={(event) => { walletModal.openModal(); }}>Connect Wallet</Button>
            </div>
        </Card>

        <div class="flex flex-row items-center justify-center space-x-0 sm:space-x-3">
            <div class="flex flex-row items-center gap-x-2 px-2 whitespace-nowrap">
                <p class="text-[#98abca] text-xs sm:text-sm font-normal -translate-y-0.5">Powered by</p>
                {@html layer_zero}
            </div>

            <div class="bg-[#303e5e] h-5 w-[1px]"></div>

            <div class="flex flex-row items-center gap-x-2 px-2">
                <a href="https://docs-v4.venus.io/guides/xvs-bridge" target="_blank" class="text-[#3a78ff] text-xs sm:text-sm font-normal flex flex-row items-center gap-x-2 hover:underline whitespace-nowrap">
                    <span class="-translate-y-0.5">How to bridge</span>
                    <Icon icon="majesticons:open" class="min-w-3 sm:min-w-4 h-auto"/>
                </a>
            </div>
        </div>
    </div>

</div>

<Modal bind:this={walletModal} title="Connect a wallet" desktopWidth="md:w-[542px]" mobileWidth="w-auto">
    <WalletModal {closeWalletModal}/>
 </Modal>