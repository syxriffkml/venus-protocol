<script lang="ts">
	import Card from '$lib/Components/Card/Card.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Icon from '@iconify/svelte';
    import ComboBox from '$lib/Components/ComboBox/ComboBox.svelte';
    import { ProgressBar } from '@skeletonlabs/skeleton';

    //Tab functions
    let tab: string[] = ["Borrow", "Repay"];
    let tabActive: string = tab[0]; 
    let isActive:boolean = false;

    function istabActive(selected:string) {
        tabActive = selected;
        isActive = true;
    }
    //End of Tab functions

    //Input functions
    let borrowInput: string = '';
    let repayInput: string = '';
    function handleInput(event: any) {
        event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        if (event.target.name === 'borrowInput') {
            borrowInput = event.target.value;
        }else if (event.target.name === 'repayInput') {
            repayInput = event.target.value;
        }
    }

    let borrow = {
        limit:'80%', borrowable_amount: '0' , borrow_apr: '18.32%', current:'0', max:'0', borrow_balance:'0', limit_used:'0%', daily_earnings:'0'
    };

    let repay = {
        wallet_balance: '0' , borrow_apr: '18.32%', current:'0', max:'0', borrow_balance:'0', limit_used:'0%', daily_earnings:'0'
    };
        

</script>


<div class="h-auto w-full flex flex-col xl:max-w-[90rem] items-start mx-auto px-8 gap-6 mb-4">
    <div class="flex items-center justify-center w-full">
        <div class="flex flex-row items-center gap-x-2 border border-white/15 rounded-lg px-4 py-3 w-full md:w-[550px]">
            <Icon icon="material-symbols:info-outline" class="text-[#3a78ff] min-w-6 min-h-6"/>
            <p class="text-sm font-normal -translate-y-0.5">VAI is the primary stablecoin of the Venus Protocol. Borrow VAI using your collateral supplied to the Core pool.&nbsp;<a href="https://docs-v4.venus.io/tokens/vai" target="_blank" class="text-[#3a78ff] hover:underline">Learn more</a></p>
        </div>
    </div>
	
    <div class="flex items-center justify-center w-full">
        <Card customClass="!border-none !rounded-2xl !py-8" width="w-full md:w-[550px]">
            <div class="flex flex-row items-center gap-x-6 w-full">
                {#each tab as tab}
                    <button class="w-full py-2 rounded-lg !transition-all !duration-300 {tabActive === tab?'bg-[#2d3549] text-white':'bg-transparent text-[#a1b2ca] hover:bg-[#2d3549]'}" on:click={(()=>{ istabActive(tab) })} >
                        <p>{tab}</p>
                    </button>
                {/each}
            </div>

            {#if tabActive === "Borrow"}
                <div class="flex flex-col gap-y-4">
                    <Card customClass="!bg-[#232228] !border-[#be613b] !px-4 !py-3 mt-8">
                        <div class="flex flex-row items-center gap-x-2">
                            <Icon icon="ion:warning-outline" class="text-[#e06f3f] min-w-6 min-h-6"/>
                            <p class="text-sm">Only users who hold a Prime token can borrow VAI. Learn more about Prime&nbsp;<a href="https://docs-v4.venus.io/whats-new/prime-yield" target="_blank" class="text-[#3a78ff] hover:underline">here</a>.</p>
                        </div>
                    </Card>

                    <!--Borrow Input-->
                    <div class="relative flex w-full h-14 items-center justify-between rounded-lg border border-white/5 bg-[#181d27] px-2">
                        <div class="flex flex-row gap-x-2">
                            <img src="https://app.venus.io/assets/vai-4ecaa030.svg" alt="img" class="w-8 h-auto">
                        </div>
                        <input type="text" placeholder="0.00" class="w-full bg-transparent focus:outline-none border-none focus:ring-0" name="borrowInput" on:input={handleInput} bind:value={borrowInput}/>

                        <div class="flex flex-row gap-x-2 h-[40px]">
                            <button class="w-auto h-auto bg-[#2d3549] hover:bg-[#4c5670] py-2 px-3 rounded-lg flex items-center justify-center text-[#a1b2ca] whitespace-nowrap">
                                {borrow.limit} LIMIT
                            </button>
                        </div>
                    </div>

                    <div class="flex flex-row items-center justify-between w-full">
                        <p class="text-[#8fa5ad] text-sm md:text-base">Borrowable amount</p>
                        <p class="text-sm md:text-base">{borrow.borrowable_amount}&nbsp;VAI</p>
                    </div>

                    <div class="flex flex-row items-center justify-between w-full">
                        <p class="text-[#8fa5ad] text-sm md:text-base flex flex-row items-center gap-x-2">
                            <img src="https://app.venus.io/assets/vai-4ecaa030.svg" alt="img" class="w-5 h-auto">
                            Borrow APR
                        </p>
                        <p class="text-sm md:text-base">{borrow.borrow_apr}</p>
                    </div>

                    <hr>

                    <div class="flex flex-row items-center justify-between w-full">
                        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-x-1">
                            <p class="text-[#8fa5ad] text-sm">Current:</p>
                            <p class="text-sm font-semibold">${borrow.current}</p>
                        </div>
                        <div class="flex flex-col sm:flex-row items-end sm:items-center gap-x-1">
                            <p class="text-[#8fa5ad] text-sm">Max:</p>
                            <p class="text-sm font-semibold">${borrow.max}</p>
                        </div>
                    </div>
                    <div class="w-full -mt-2">
                        <ProgressBar label="Progress Bar" meter="bg-[#00c38e]" track="bg-[#2d3549]" value={0} max={100} />
                    </div>

                    <div class="flex flex-row items-center justify-between w-full">
                        <p class="text-[#8fa5ad] text-sm md:text-base">Borrowable balance (VAI)</p>
                        <p class="text-sm md:text-base">{borrow.borrow_balance}</p>
                    </div>

                    <div class="flex flex-row items-center justify-between w-full">
                        <p class="text-[#8fa5ad] text-sm md:text-base">Borrowable limit used</p>
                        <p class="text-sm md:text-base">{borrow.limit_used}</p>
                    </div>

                    <div class="flex flex-row items-center justify-between w-full">
                        <p class="text-[#8fa5ad] text-sm md:text-base">Daily earnings</p>
                        <p class="text-sm md:text-base">${borrow.daily_earnings}</p>
                    </div>

                    <!--Proceed button-->
                    <button class="bg-[#2d3549] py-2 w-full rounded-lg">
                        <p class="text-[#9eafca] text-md font-semibold">Enter a valid amount to borrow</p>
                    </button>

                </div>
            {:else if tabActive === "Repay"}
                <div class="flex flex-col gap-y-4">
                    <!--Repay Input-->
                    <div class="relative flex w-full h-14 items-center justify-between rounded-lg border border-white/5 bg-[#181d27] px-2 mt-8">
                        <div class="flex flex-row gap-x-2">
                            <img src="https://app.venus.io/assets/vai-4ecaa030.svg" alt="img" class="w-8 h-auto">
                        </div>
                        <input type="text" placeholder="0.00" class="w-full bg-transparent focus:outline-none border-none focus:ring-0" name="repayInput" on:input={handleInput} bind:value={repayInput}/>

                        <div class="flex flex-row gap-x-2 h-[40px]">
                            <button class="w-auto h-auto bg-[#2d3549] hover:bg-[#4c5670] py-2 px-3 rounded-lg flex items-center justify-center text-[#a1b2ca] whitespace-nowrap">
                                MAX
                            </button>
                        </div>
                    </div>

                    <div class="flex flex-row items-center justify-between w-full">
                        <p class="text-[#8fa5ad] text-sm md:text-base">Wallet balance</p>
                        <p class="text-sm md:text-base">{repay.wallet_balance}&nbsp;VAI</p>
                    </div>

                    <div class="flex flex-row items-center justify-between w-full">
                        <p class="text-[#8fa5ad] text-sm md:text-base flex flex-row items-center gap-x-2">
                            <img src="https://app.venus.io/assets/vai-4ecaa030.svg" alt="img" class="w-5 h-auto">
                            Borrow APR
                        </p>
                        <p class="text-sm md:text-base">{repay.borrow_apr}</p>
                    </div>
                    <hr>
                    <div class="flex flex-row items-center justify-between w-full">
                        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-x-1">
                            <p class="text-[#8fa5ad] text-sm">Current:</p>
                            <p class="text-sm font-semibold">${repay.current}</p>
                        </div>
                        <div class="flex flex-col sm:flex-row items-end sm:items-center gap-x-1">
                            <p class="text-[#8fa5ad] text-sm">Max:</p>
                            <p class="text-sm font-semibold">${repay.max}</p>
                        </div>
                    </div>
                    <div class="w-full -mt-2">
                        <ProgressBar label="Progress Bar" meter="bg-[#00c38e]" track="bg-[#2d3549]" value={0} max={100} />
                    </div>

                    <div class="flex flex-row items-center justify-between w-full">
                        <p class="text-[#8fa5ad] text-sm md:text-base">Borrowable balance (VAI)</p>
                        <p class="text-sm md:text-base">{repay.borrow_balance}</p>
                    </div>

                    <div class="flex flex-row items-center justify-between w-full">
                        <p class="text-[#8fa5ad] text-sm md:text-base">Borrowable limit used</p>
                        <p class="text-sm md:text-base">{repay.limit_used}</p>
                    </div>

                    <div class="flex flex-row items-center justify-between w-full">
                        <p class="text-[#8fa5ad] text-sm md:text-base">Daily earnings</p>
                        <p class="text-sm md:text-base">${repay.daily_earnings}</p>
                    </div>

                    <!--Proceed button-->
                    <button class="bg-[#2d3549] py-2 w-full rounded-lg">
                        <p class="text-[#9eafca] text-md font-semibold">Enter a valid amount to repay</p>
                    </button>
                </div>
            {/if}
        </Card>
    </div>
</div>
