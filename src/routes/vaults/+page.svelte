<script lang="ts">
	import Card from '$lib/Components/Card/Card.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Icon from '@iconify/svelte';
    import Modal from '$lib/Components/Modal/Modal.svelte'

    let vaults = [
        { 
            token: 'XVS', 
            img: 'https://app.venus.io/assets/xvs-e7b82352.svg',
            staked: '0', 
            apr: '8.3%', 
            daily_emission: '1.62K', 
            total_staked: '7.16M'
        },
        { 
            token: 'VAI', 
            img: 'https://app.venus.io/assets/vai-4ecaa030.svg',
            staked: '0', 
            apr: '19.97%', 
            daily_emission: '125.000064', 
            total_staked: '3.36M'
        }
    ];

    let xvs =  { token: 'XVS', img: 'https://app.venus.io/assets/xvs-e7b82352.svg', available: '0', requested:'0', locking_period:'7 days' };
    
    let vai =  { token: 'VAI', img: 'https://app.venus.io/assets/vai-4ecaa030.svg', available: '0',  };

    //Modal declaration
    let stakeModal: Modal;
    let withdrawModal: Modal;

    let modalTitle: string = '';

    //Start of the stakeModal functions
    function stakeModal_xvs() {
        modalTitle = 'Stake XVS';
        stakeModal.openModal();
    }

    function stakeModal_vai() {
        modalTitle = 'Stake VAI';
        stakeModal.openModal();
    }

    function withdrawModal_xvs() {
        modalTitle = 'Withdraw XVS';
        withdrawModal.openModal();
    }

    function withdrawModal_vai() {
        modalTitle = 'Withdraw VAI';
        withdrawModal.openModal();
    }
    //End of the stakeModal functions

    //Tab functions
    let tab: string[] = ["Withdraw", "Request Withdrawal"];
    let tabActive: string = tab[0]; 
    let isActive:boolean = false;

    function istabActive(selected:string) {
        tabActive = selected;
        isActive = true;
    }

    let stakeInput: string = '';
    let withdrawInput: string = '';
    function handleInput(event: any) {
        event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        if (event.target.name === 'stakeInput') {
            stakeInput = event.target.value;
        }else if(event.target.name === 'withdrawInput'){
            withdrawInput = event.target.value;
        }
    }
</script>


<div class="h-auto w-full flex flex-col xl:flex-row xl:max-w-[90rem] items-start mx-auto px-8 gap-6 mb-4">
	
    <Card customClass="!border-none !rounded-2xl">
        <div class="flex flex-col gap-y-6">
            <div class="flex flex-row items-center gap-x-2">
                <img src={vaults[0].img} alt="img">
                <p class="text-lg font-semibold">{vaults[0].token}</p>
            </div>
            
            <div class="space-y-4">
                <p class="text-[#98abca] text-sm">You are staking</p>
                <div class="flex flex-row items-center gap-x-2">
                    <img src={vaults[0].img} alt="img" class="w-10 h-10">
                    <p class="text-4xl font-semibold">{vaults[0].staked}</p>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-x-12">
                <div class="flex flex-row sm:flex-col gap-y-2 items-center sm:items-start justify-between w-full sm:w-auto">
                    <p class="text-[#98abca] text-sm">XVS Stake APR</p>
                    <p class="text-sm sm:text-xl font-semibold sm:font-bold">{vaults[0].apr}</p>
                </div>
                <div class="flex flex-row sm:flex-col gap-y-2 items-center sm:items-start justify-between w-full sm:w-auto">
                    <p class="text-[#98abca] text-sm">Daily Emission</p>
                    <p class="text-sm sm:text-xl font-semibold sm:font-bold flex flex-row items-center gap-x-1">
                        <img src="https://app.venus.io/assets/xvs-e7b82352.svg" alt="img">
                        <span>{vaults[0].daily_emission}</span>
                    </p>
                </div>
                <div class="flex flex-row sm:flex-col gap-y-2 items-center sm:items-start justify-between w-full sm:w-auto">
                    <p class="text-[#98abca] text-sm">Total Staked</p>
                    <p class="text-sm sm:text-xl font-semibold sm:font-bold flex flex-row items-center gap-x-1">
                        <img src={vaults[0].img} alt="img">
                        <span>{vaults[0].total_staked}</span>
                    </p>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-4">
                <Button width="w-full" mode="blue" rounded="rounded-lg" customClass="font-semibold h-auto sm:h-[48px]" handler={(event) => { stakeModal_xvs(); }}>Stake</Button>
                <Button width="w-full" mode="blue-inverted" rounded="rounded-lg" customClass="font-semibold h-auto sm:h-[48px]" handler={(event) => { withdrawModal_xvs(); }}>Withdraw</Button>
            </div>
        </div>
    </Card>

    <Card customClass="!border-none !rounded-2xl">
        <div class="flex flex-col gap-y-6">
            <div class="flex flex-row items-center gap-x-2">
                <img src={vaults[1].img} alt="img">
                <p class="text-lg font-semibold">{vaults[1].token}</p>
            </div>
            
            <div class="space-y-4">
                <p class="text-[#98abca] text-sm">You are staking</p>
                <div class="flex flex-row items-center gap-x-2">
                    <img src={vaults[1].img} alt="img" class="w-10 h-10">
                    <p class="text-4xl font-semibold">{vaults[1].staked}</p>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-x-12">
                <div class="flex flex-row sm:flex-col gap-y-2 items-center sm:items-start justify-between w-full sm:w-auto">
                    <p class="text-[#98abca] text-sm">XVS Stake APR</p>
                    <p class="text-sm sm:text-xl font-semibold sm:font-bold">{vaults[1].apr}</p>
                </div>
                <div class="flex flex-row sm:flex-col gap-y-2 items-center sm:items-start justify-between w-full sm:w-auto">
                    <p class="text-[#98abca] text-sm">Daily Emission</p>
                    <p class="text-sm sm:text-xl font-semibold sm:font-bold flex flex-row items-center gap-x-1">
                        <img src="https://app.venus.io/assets/xvs-e7b82352.svg" alt="img">
                        <span>{vaults[1].daily_emission}</span>
                    </p>
                </div>
                <div class="flex flex-row sm:flex-col gap-y-2 items-center sm:items-start justify-between w-full sm:w-auto">
                    <p class="text-[#98abca] text-sm">Total Staked</p>
                    <p class="text-sm sm:text-xl font-semibold sm:font-bold flex flex-row items-center gap-x-1">
                        <img src={vaults[1].img} alt="img">
                        <span>{vaults[1].total_staked}</span>
                    </p>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-4">
                <Button width="w-full" mode="blue" rounded="rounded-lg" customClass="font-semibold h-auto sm:h-[48px]" handler={(event) => { stakeModal_vai(); }}>Stake</Button>
                <Button width="w-full" mode="blue-inverted" rounded="rounded-lg" customClass="font-semibold h-auto sm:h-[48px]" handler={(event) => { withdrawModal_vai(); }}>Withdraw</Button>
            </div>
        </div>
    </Card>

</div>


<Modal bind:this={stakeModal} title={modalTitle} desktopWidth="sm:w-[540px]" mobileWidth="w-[90%]">
    <div class="my-8 flex flex-col gap-y-4 px-4 sm:px-8">

        <div class="relative flex w-full h-14 items-center justify-between rounded-lg border border-white/5 bg-[#181d27] px-2">
            <div class="flex flex-row gap-x-2">
                <img src={modalTitle === 'Stake XVS' ? xvs.img : modalTitle === 'Stake VAI' ? vai.img : ''} alt="img" class="w-8 h-auto">
            </div>
            <input type="text" placeholder="0.00" class="w-full bg-transparent focus:outline-none border-none focus:ring-0" name="stakeInput" on:input={handleInput} bind:value={stakeInput}/>

            <div class="flex flex-row gap-x-2 h-[40px]">
                <button class="w-auto h-auto bg-[#2d3549] hover:bg-[#4c5670] py-2 px-3 rounded-lg flex items-center justify-center text-[#a1b2ca] whitespace-nowrap">
                    MAX
                </button>
            </div>
        </div>

        <div class="flex flex-row items-center justify-between w-full">
            <p class="text-[#8fa5ad] text-sm md:text-base flex flex-row items-center gap-x-2">
                <img src={modalTitle === 'Stake XVS' ? xvs.img : modalTitle === 'Stake VAI' ? vai.img : ''} alt="img" class="w-5 h-auto">
                <span>Available&nbsp;{modalTitle === 'Stake XVS' ? xvs.token : modalTitle === 'Stake VAI' ? vai.token : ''}</span>
            </p>
            <p class="text-sm md:text-base">{modalTitle === 'Stake XVS' ? xvs.available : modalTitle === 'Stake VAI' ? vai.available : ''}&nbsp;{modalTitle === 'Stake XVS' ? xvs.token : modalTitle === 'Stake VAI' ? vai.token : ''}</p>
        </div>

        <!--Proceed staking button-->
        <button class="bg-[#2d3549] py-2 w-full rounded-lg">
            <p class="text-[#9eafca] text-md font-semibold">Enter a valid amount to stake</p>
        </button>

    </div>
</Modal>

<Modal bind:this={withdrawModal} title={modalTitle} desktopWidth="sm:w-[540px]" mobileWidth="w-[90%]">
    <div class="my-8 flex flex-col gap-y-4 px-4 sm:px-8">
        {#if modalTitle === 'Withdraw XVS'}
            <div class="flex flex-row items-center gap-x-6 w-full">
                {#each tab as tab}
                    <button class="w-full py-2 rounded-lg text-sm font-medium !transition-all !duration-300 {tabActive === tab?'bg-[#2d3549] text-white':'bg-transparent text-[#a1b2ca] hover:bg-[#2d3549]'}" on:click={(()=>{ istabActive(tab) })} >
                        <p>{tab}</p>
                    </button>
                {/each}
            </div>
            {#if tabActive === "Withdraw"}
                <div class="flex flex-row items-center justify-between w-full mt-6">
                    <p class="text-[#8fa5ad] text-sm md:text-base flex flex-row items-center gap-x-2">
                        <img src={xvs.img} alt="img" class="w-5 h-auto">
                        <span>Available&nbsp;{xvs.token}</span>
                    </p>
                    <p class="text-sm md:text-base">{xvs.available}&nbsp;{xvs.token}</p>
                </div>
        
                <!--Proceed withdraw button-->
                <button class="bg-[#2d3549] py-2 w-full rounded-lg mt-4">
                    <p class="text-[#9eafca] text-md font-semibold">Withdraw</p>
                </button>
            {:else if tabActive === "Request Withdrawal"}
                <div class="relative flex w-full h-14 items-center justify-between rounded-lg border border-white/5 bg-[#181d27] px-2 mt-4">
                    <div class="flex flex-row gap-x-2">
                        <img src={xvs.img} alt="img" class="w-8 h-auto">
                    </div>
                    <input type="text" placeholder="0.00" class="w-full bg-transparent focus:outline-none border-none focus:ring-0" name="withdrawInput" on:input={handleInput} bind:value={withdrawInput}/>
        
                    <div class="flex flex-row gap-x-2 h-[40px]">
                        <button class="w-auto h-auto bg-[#2d3549] hover:bg-[#4c5670] py-2 px-3 rounded-lg flex items-center justify-center text-[#a1b2ca] whitespace-nowrap">
                            MAX
                        </button>
                    </div>
                </div>

                <div class="flex flex-row items-center justify-between w-full mt-2">
                    <p class="text-[#8fa5ad] text-sm md:text-base flex flex-row items-center gap-x-2">
                        <img src={xvs.img} alt="img" class="w-5 h-auto">
                        <span>Requested&nbsp;{xvs.token}</span>
                    </p>
                    <p class="text-sm md:text-base">{xvs.requested}&nbsp;{xvs.token}</p>
                </div>

                <div class="flex flex-row items-center justify-between w-full">
                    <p class="text-[#8fa5ad] text-sm md:text-base flex flex-row items-center gap-x-2">
                        <span>Locking period</span>
                    </p>
                    <p class="text-sm md:text-base">{xvs.locking_period}</p>
                </div>

                <!--Proceed withdraw button-->
                <button class="bg-[#2d3549] py-2 w-full rounded-lg mt-2">
                    <p class="text-[#9eafca] text-md font-semibold">Enter a valid amount to request</p>
                </button>

                <a href="/" target="_blank" class="flex flex-row gap-x-2 items-center justify-center w-full text-[#3a78ff] text-xs hover:underline">Withdrawal request list</a>
            {/if}
        {:else if modalTitle === 'Withdraw VAI'}
            <div class="relative flex w-full h-14 items-center justify-between rounded-lg border border-white/5 bg-[#181d27] px-2 mt-4">
                <div class="flex flex-row gap-x-2">
                    <img src={vai.img} alt="img" class="w-8 h-auto">
                </div>
                <input type="text" placeholder="0.00" class="w-full bg-transparent focus:outline-none border-none focus:ring-0" name="withdrawInput" on:input={handleInput} bind:value={withdrawInput}/>

                <div class="flex flex-row gap-x-2 h-[40px]">
                    <button class="w-auto h-auto bg-[#2d3549] hover:bg-[#4c5670] py-2 px-3 rounded-lg flex items-center justify-center text-[#a1b2ca] whitespace-nowrap">
                        MAX
                    </button>
                </div>
            </div>
            
            <div class="flex flex-row items-center justify-between w-full mt-2">
                <p class="text-[#8fa5ad] text-sm md:text-base flex flex-row items-center gap-x-2">
                    <img src={vai.img} alt="img" class="w-5 h-auto">
                    <span>Available&nbsp;{vai.token}</span>
                </p>
                <p class="text-sm md:text-base">{vai.available}&nbsp;{vai.token}</p>
            </div>

             <!--Proceed withdraw button-->
             <button class="bg-[#2d3549] py-2 w-full rounded-lg mt-2">
                <p class="text-[#9eafca] text-md font-semibold">Enter a valid amount to withdraw</p>
            </button>
        {/if}
    </div>
</Modal>