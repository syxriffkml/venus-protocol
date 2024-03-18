<script lang="ts">
	import Card from '$lib/Components/Card/Card.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Icon from '@iconify/svelte';
    import ComboBox from '$lib/Components/ComboBox/ComboBox.svelte';

    let fromData = [
		{ header: 'BNB',     img: "https://app.venus.io/assets/bnb-8cd7030f.svg",     info: 0 },
		{ header: 'USDC',    img: "https://app.venus.io/assets/usdc-ae6ed32b.svg",    info: 0  },
		{ header: 'USDT',    img: "https://app.venus.io/assets/usdt-68774da1.svg",    info: 0  },
        { header: 'XVS',     img: "https://app.venus.io/assets/xvs-e7b82352.svg",     info: 0  },
        { header: 'ankrBNB', img: "https://app.venus.io/assets/ankrBNB-57247e90.svg", info: 0  },
        { header: 'slisBNB', img: "https://app.venus.io/assets/slisBNB-96761da9.png", info: 0  },
        { header: 'TUSD',    img: "https://app.venus.io/assets/tusd-e00ef2f1.svg",    info: 0  },
        { header: 'ETH',     img: "https://app.venus.io/assets/eth-ffd84278.svg",     info: 0  },
        { header: 'MATIC',   img: "https://app.venus.io/assets/matic-58a9a812.svg",   info: 0  },
	];

    let toData = [
		{ header: 'BNB',     img: "https://app.venus.io/assets/bnb-8cd7030f.svg",     info: 0 },
		{ header: 'USDC',    img: "https://app.venus.io/assets/usdc-ae6ed32b.svg",    info: 0  },
		{ header: 'USDT',    img: "https://app.venus.io/assets/usdt-68774da1.svg",    info: 0  },
        { header: 'XVS',     img: "https://app.venus.io/assets/xvs-e7b82352.svg",     info: 0  },
        { header: 'ankrBNB', img: "https://app.venus.io/assets/ankrBNB-57247e90.svg", info: 0  },
        { header: 'slisBNB', img: "https://app.venus.io/assets/slisBNB-96761da9.png", info: 0  },
        { header: 'TUSD',    img: "https://app.venus.io/assets/tusd-e00ef2f1.svg",    info: 0  },
        { header: 'ETH',     img: "https://app.venus.io/assets/eth-ffd84278.svg",     info: 0  },
        { header: 'MATIC',   img: "https://app.venus.io/assets/matic-58a9a812.svg",   info: 0  },
	];

    //Search input
    let searchFrom: String = '';
    $: filteredFromData = fromData.filter(item => item.header.toLowerCase().includes(searchFrom.toLowerCase()));

    let searchTo: String = '';
    $: filteredToData = fromData.filter(item => item.header.toLowerCase().includes(searchTo.toLowerCase()));

    //From dropdown selected value
    let fromHeader: string = fromData[0].header;
    let fromImg:string = fromData[0].img;

    //To dropdown selected value
    let toHeader: string = toData[3].header;
    let toImg:string = toData[3].img;

    //Dropdown Declaration
    let showFromDropdown : boolean = false;
    let showToDropdown : boolean = false;

    //Swap fucntion
    function swap() {
        [fromHeader, toHeader] = [toHeader, fromHeader];
        [fromImg, toImg] = [toImg, fromImg];
    }

    let fromInput: string = '';
    let toInput: string = '';
    function handleInput(event: any) {
        event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        if (event.target.name === 'fromInput') {
            fromInput = event.target.value;
        }else if (event.target.name === 'toInput') {
            toInput = event.target.value;
        }
    }

</script>


<div class="h-auto w-full flex flex-col xl:max-w-[90rem] items-start mx-auto px-8 gap-6 mb-4">
	
    <div class="flex items-center justify-center w-full">
        <Card customClass="!border-none !rounded-2xl" width="w-auto">
            <div class="flex flex-col gap-y-6">
                <!--From Input-->
                <div class="flex flex-col gap-y-2">
                    <p class="text-[#98abca] text-sm font-semibold">From</p>
                    <div class="relative flex w-full h-14 items-center justify-between rounded-lg border border-white/5 bg-[#181d27] px-2">
                        <input type="text" placeholder="0.00" class="w-full bg-transparent focus:outline-none border-none focus:ring-0" name="fromInput" on:input={handleInput} bind:value={fromInput}/>

                        <div class="flex flex-row gap-x-2 h-[40px]">
                            <ComboBox headSelect={fromHeader} imgSelect={fromImg} bind:showCombo={showFromDropdown}>
                                <div class="z-[9999] p-2">
                                    <div class="relative flex w-full h-auto items-center justify-between rounded-lg border border-[#366bdf] bg-[#181d27] px-2 mb-4" on:click|stopPropagation role="none">
                                        <div class="flex flex-row gap-x-2">
                                            <Icon icon="ic:round-search" class="w-6 h-6"/>
                                        </div>
                                        <input type="text" placeholder="Search asset" class="w-full bg-transparent focus:outline-none border-none focus:ring-0" name="searchFrom" bind:value={searchFrom} />
                                    </div>

                                    <div class="flex flex-row gap-x-2 items-center mb-4">
                                        {#each fromData.slice(0, 3) as item}
                                            <Button width="w-auto" mode="blue-inverted" rounded="rounded-lg" customClass="font-semibold h-auto !py-1 !px-2" handler={(event) => { fromHeader = item.header; fromImg = item.img; console.log(fromHeader,fromImg); }}>
                                                <div class="flex flex-row items-center gap-x-2">
                                                    <img src={item.img} alt="img" class="h-4 w-4">
                                                    <p class="text-sm">{item.header}</p>
                                                </div>  
                                            </Button>
                                        {/each}
                                    </div>

                                    <div class="max-h-[215px] overflow-auto">
                                        {#each filteredFromData as f}
                                            <button 
                                                class="flex justify-start items-center gap-x-2 p-2 z-20 w-full hover:bg-[#2d3549]" 
                                                on:click={(()=>{ fromHeader = f.header; fromImg = f.img; console.log(fromHeader,fromImg); })}
                                            >
                                                <div class="w-5 h-5 my-auto">
                                                    <img src={f.img} alt="">
                                                </div>
                                                <div>
                                                    {f.header}
                                                </div>
                        
                                            </button>
                                        {/each}
                                    </div>
                                </div>
                            </ComboBox>
                            <button class="w-auto h-auto bg-[#2d3549] hover:bg-[#4c5670] py-2 px-3 rounded-lg flex items-center justify-center">
                                MAX
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-row items-center justify-between w-full mt-4">
                        <p class="text-[#98abca] text-sm font-normal">Wallet balance</p>
                        <p class="">0 {fromHeader}</p>
                    </div>
                </div>

                <!--Swap Button-->
                <div class="flex items-center justify-center w-full">
                    <button class="w-auto h-auto" on:click={swap}>
                        <Icon icon="iconamoon:swap-light" class="h-6 w-6 text-[#366bdf]"/>
                    </button>
                </div>

                <!--To Input-->
                <div class="flex flex-col gap-y-2">
                    <p class="text-[#98abca] text-sm font-semibold">To</p>
                    <div class="relative flex w-full h-14 items-center justify-between rounded-lg border border-white/5 bg-[#181d27] px-2">
                        <input type="text" placeholder="0.00" class="w-full bg-transparent focus:outline-none border-none focus:ring-0" name="toInput" on:input={handleInput} bind:value={toInput}/>

                        <div class="flex flex-row gap-x-2 h-[40px]">
                            <ComboBox headSelect={toHeader} imgSelect={toImg} bind:showCombo={showToDropdown}>
                                <div class="z-[9999] p-2">
                                    <div class="relative flex w-full h-auto items-center justify-between rounded-lg border border-[#366bdf] bg-[#181d27] px-2 mb-4" on:click|stopPropagation role="none">
                                        <div class="flex flex-row gap-x-2">
                                            <Icon icon="ic:round-search" class="w-6 h-6"/>
                                        </div>
                                        <input type="text" placeholder="Search asset" class="w-full bg-transparent focus:outline-none border-none focus:ring-0" name="searchTo" bind:value={searchTo} />
                                    </div>

                                    <div class="flex flex-row gap-x-2 items-center mb-4">
                                        {#each toData.slice(0, 3) as item}
                                            <Button width="w-auto" mode="blue-inverted" rounded="rounded-lg" customClass="font-semibold h-auto !py-1 !px-2" handler={(event) => { toHeader = item.header; toImg = item.img; console.log(toHeader,toImg); }}>
                                                <div class="flex flex-row items-center gap-x-2">
                                                    <img src={item.img} alt="img" class="h-4 w-4">
                                                    <p class="text-sm">{item.header}</p>
                                                </div>  
                                            </Button>
                                        {/each}
                                    </div>

                                    <div class="max-h-[215px] overflow-auto">
                                        {#each filteredToData as t}
                                            <button 
                                                class="flex justify-start items-center gap-x-2 p-2 z-20 w-full hover:bg-[#2d3549]" 
                                                on:click={(()=>{ toHeader = t.header; toImg = t.img; console.log(toHeader,toImg); })}
                                            >
                                                <div class="w-5 h-5 my-auto">
                                                    <img src={t.img} alt="">
                                                </div>
                                                <div>
                                                    {t.header}
                                                </div>
                        
                                            </button>
                                        {/each}
                                    </div>
                                </div>
                            </ComboBox>
                        </div>
                    </div>
                    <div class="flex flex-row items-center justify-between w-full mt-4">
                        <p class="text-[#98abca] text-sm font-normal">Wallet balance</p>
                        <p class="">0 {toHeader}</p>
                    </div>
                    <div class="flex flex-row items-center justify-between w-full mt-4">
                        <p class="text-[#98abca] text-sm font-normal">Slippage tolerance</p>
                        <p class="">0.5%</p>
                    </div>
                </div>

                <!--Proceed button-->
                <button class="bg-[#2d3549] py-2 w-full rounded-lg">
                    <p class="text-[#9eafca] text-md font-semibold">Enter a valid amount to swap</p>
                </button>
            </div>
        </Card>
    </div>


</div>
