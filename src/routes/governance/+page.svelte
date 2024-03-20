<script lang="ts">
	import Card from '$lib/Components/Card/Card.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Icon from '@iconify/svelte';
    import ComboBox from '$lib/Components/ComboBox/ComboBox.svelte';
    import { goto } from '$app/navigation';
    import { snapshot, critical, fast_track } from '$lib/Components/SVG/governance_svg'

    let proposals = [
        {id: '274', info: 'Critical', voted: 'Not voted', title: 'VIP-274 Rebrand agEUR into EURA (1/2)', executed: '18 Mar 2024 6:35 PM', status: 'Executed', address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26'},
        {id: '273', info: 'Fast track', voted: 'Not voted', title: 'VIP-273 Risk Parameters Adjustments (XVS Ethereum bridge limits)', executed: '18 Mar 2024 9:49 AM', status: 'Executed', address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26'},
        {id: '272', info: '', voted: 'Not voted', title: 'VIP-272 Bootstrap XVS liquidity for the Ethereum rewards', executed: '19 Mar 2024 3:45 AM', status: 'Executed', address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26'},
        {id: '271', info: 'Critical', voted: 'Not voted', title: 'VIP-271 Treasury Management', executed: '17 Mar 2024 3:25 AM', status: 'Executed', address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26'},
        {id: '270', info: '', voted: 'Not voted', title: 'VIP-270 Partial liquidation of the BNB bridge exploiter account', executed: '10 Mar 2024 5:32 AM', status: 'Cancelled', address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26'},
        {id: '269', info: '', voted: 'Not voted', title: 'VIP-269 BUSD debt mitigation', executed: '10 Mar 2024 5:32 AM', status: 'Defeated', address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26'},
        {id: '268', info: 'Fast track', voted: 'Not voted', title: 'VIP-268 USDT debt mitigation', executed: '3 Mar 2024 8:43 AM', status: 'Executed', address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26'},
    ];


    function selectProposal(proposal: any) {
        goto(`/governance/proposal/${proposal.id}`);    
    }
</script>


<div class="h-auto w-full flex flex-col lg:flex-row xl:max-w-[90rem] items-start mx-auto px-8 mb-4 gap-8">

    <div class="order-2 lg:order-1 w-full lg:w-[66%] flex flex-col gap-y-4">
        <div class="flex flex-row items-center justify-between mb-4">
            <p class="font-semibold text-lg">Proposals</p>
            <p class="text-sm text-[#a7b0c6] flex flex-row items-center gap-x-2">
                + Create Proposal
                <Icon icon="gg:info" class="w-5 h-5 translate-y-[1px]"/>
            </p>
        </div>

        {#each proposals as p}
            <button class="w-full text-left" on:click={() => selectProposal(p) }>
                <Card customClass="!border-none !rounded-2xl space-y-4 !p-0" width="w-auto">
                    <div class="flex flex-col sm:flex-row w-full divide-[#293143] divide-y divide-x-[0px] sm:divide-x sm:divide-y-[0px]">
                        <div class="flex flex-col gap-y-4 w-full sm:w-[65%] p-6">
                            <div class="flex flex-row items-center justify-between w-full">
                                <div class="flex flex-row items-center gap-x-2">
                                    <div class="rounded-lg py-1 px-2 bg-[#2d3549]">
                                        <p class="text-sm">#{p.id}</p>
                                    </div>
                                    {#if p.info}
                                        <div class="rounded-lg py-1 px-2 bg-[#2d3549] flex flex-row items-center gap-x-1">
                                            {#if p.info.toLowerCase() === 'fast track'}
                                                {@html fast_track}
                                            {:else if p.info.toLowerCase() === 'critical'}
                                                {@html critical}
                                            {/if}
                                            <p class="text-sm">{p.info}</p>
                                        </div>
                                    {/if}
                                </div>
                                <p class="text-[#a2acc5] text-sm">{p.voted}</p>
                            </div>
        
                            <p class="font-semibold text-xl">{p.title}</p>
        
                            <p class="text-sm"><span class="text-[#a2acc5]">Executed:</span>&nbsp; {p.executed}</p>
                        </div>
                        <div class="flex flex-row sm:flex-col items-center justify-center gap-2 w-full sm:w-[35%] p-6">
                            <div class="flex items-center justify-center p-1 sm:p-2 rounded-full {p.status.toLowerCase() === 'executed' ? 'bg-[#00c38e]' : 'bg-[#e93d66]'}">
                                {#if p.status.toLowerCase() === 'executed'}
                                    <Icon icon="mdi:check" class="w-4 sm:w-6 h-auto"/>
                                {:else}
                                    <Icon icon="radix-icons:cross-2" class="w-4 sm:w-6 h-auto"/>
                                {/if}
                            </div>
                            <p class="text-semibold text-white">{p.status}</p>
                        </div>
                    </div>
                </Card>
            </button>
        {/each}
    </div>

    <div class="order-1 lg:order-2 w-full lg:w-[34%] flex flex-col gap-y-4">
        <p class="font-semibold text-lg mb-4">Voting wallet</p>

        <Card customClass="!border-none !rounded-2xl space-y-4" width="w-auto">
            <div class="flex flex-col items-start">
                <p class="text-[#a2acc5] font-semibold">Voting weight</p>
                <p class="text-2xl font-semibold">0</p>
            </div>
            <hr>
            <div class="flex flex-col items-start">
                <p class="text-[#a2acc5] font-semibold">Total locked</p>
                <div class="text-2xl font-semibold flex flex-row items-center gap-x-2">
                    <img src="https://app.venus.io/assets/xvs-e7b82352.svg" alt="img" class=""/>
                    <p>0</p>
                </div>
            </div>

            <Button width="w-full" mode="blue" rounded="rounded-lg" customClass="h-[48px]" handler={(event) => { window.location.href = '/vaults' }}>Deposit XVS</Button>
        </Card>

        <Card customClass="!border-none !rounded-2xl space-y-4" width="w-auto">
            <div class="flex flex-col items-start gap-y-3">
                <p class="font-semibold">To vote you should:</p>
                <p class="text-sm">1.&nbsp;<a href="/" target="_blank" class="text-[#3a78ff] hover:underline">Deposit your tokens</a>&nbsp;in the XVS Vault</p>
                <p class="text-sm">2.&nbsp;<a href="/" target="_blank" class="text-[#3a78ff] hover:underline">Delegate your voting power</a>&nbsp;to yourself or somebody else</p>

            </div>
        </Card>

        <Button width="w-full" mode="blue-inverted" rounded="rounded-lg" customClass="h-[48px]" handler={(event) => { window.open('https://snapshot.org/#/venus-xvs.eth', '_blank') }}>
            <div class="flex flex-row items-center justify-center">
                {@html snapshot}
                Go to XVS Snapshot
            </div>
        </Button>
    </div>

</div>























