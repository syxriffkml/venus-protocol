<script lang="ts">
	import Card from '$lib/Components/Card/Card.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Icon from '@iconify/svelte';
    import ComboBox from '$lib/Components/ComboBox/ComboBox.svelte';

    let tab: string[] = ["Convert", "Withdraw"];
    let tabActive: string = tab[0]; 
    let isActive:boolean = false;

    function istabActive(selected:string) {
        tabActive = selected;
        isActive = true;
    }

</script>


<div class="h-auto w-full flex flex-col xl:max-w-[90rem] items-start mx-auto px-8 gap-6 mb-4">
	
    <div class="flex items-center justify-center w-full">
        <Card customClass="!border-none !rounded-2xl !py-8" width="w-full md:w-[550px]">
            <div class="flex flex-row items-center gap-x-6 w-full">
                {#each tab as tab}
                    <button class="w-full py-2 rounded-lg !transition-all !duration-300 {tabActive === tab?'bg-[#2d3549] text-white':'bg-transparent text-[#a1b2ca] hover:bg-[#2d3549]'}" on:click={(()=>{ istabActive(tab) })} >
                        <p>{tab}</p>
                    </button>
                {/each}
            </div>

            {#if tabActive === "Convert"}
                <div class="mt-8 flex flex-row items-center gap-x-2 border border-white/15 rounded-lg px-4 py-3">
                    <Icon icon="material-symbols:info-outline" class="text-[#3a78ff] w-6 h-6"/>
                    <p class="text-sm font-normal -translate-y-0.5">Completed @ 16:00 on 3.31.23</p>
                </div>
            {:else if tabActive === "Withdraw"}
                <div class="mt-8 flex flex-col items-center gap-y-2 px-4 py-3">
                    <p class="text-2xl font-bold">-</p>
                    <p class="text-[#8a9ab0] text-sm">Withdrawable amount</p>

                </div>

                <button class="mt-8 bg-[#2d3549] py-2.5 w-full rounded-lg">
                    <p class="text-[#9eafca] text-md font-semibold">Withdraw XVS</p>
                </button>
            {/if}

        </Card>
    </div>
</div>
