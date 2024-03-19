<script lang="ts">
    import { selectedProposal } from '$lib/selectedProposal';
    import { snapshot, critical, fast_track } from '$lib/Components/SVG/governance_svg'
    import Card from '$lib/Components/Card/Card.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Icon from '@iconify/svelte';
    import { ProgressBar } from '@skeletonlabs/skeleton';


    //Get the selected proposal from the governance page
    let proposal = $selectedProposal;

    let slicedAddress = proposal ? `${proposal.address.slice(0, 4)}...${proposal.address.slice(-4)}` : '';

    let proposalHistory: any = {
        "Executed": {
            "Created": true,
            "Active": true,
            "Succeed": true,
            "Queue": true,
            "Executed": true
        },
        "Cancelled": {
            "Created": true,
            "Active": false,
            "Succeed": false,
            "Queue": false,
            "Executed": false
        },
        "Defeated": {
            "Created": true,
            "Active": true,
            "Succeed": false,
            "Queue": false,
            "Executed": false
        }
    };

    let forData: any = [
        {address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26', votes:'453.0013K'},
        {address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26', votes:'53.0013K'},
        {address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26', votes:'53.0013K'},
        {address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26', votes:'53.0013K'},
        {address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26', votes:'53.0013K'},
        {address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26', votes:'53.0013K'},
    ];

    let againstData: any = [
        {address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26', votes:'453.0013K'},
        {address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26', votes:'53.0013K'},
        // {address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26', votes:'53.0013K'},
        // {address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26', votes:'53.0013K'},
        // {address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26', votes:'53.0013K'},
        // {address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26', votes:'53.0013K'},
    ];

    let abstainData: any = [
        // {address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26', votes:'453.0013K'},
        // {address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26', votes:'53.0013K'},
        // {address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26', votes:'53.0013K'},
        // {address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26', votes:'53.0013K'},
        // {address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26', votes:'53.0013K'},
        // {address:'0x82af53ec326f3e6dbd5bf15216d99ebad732975a283b3556d730f050a4586f26', votes:'53.0013K'},
    ];

</script>

<!-- <p>{proposal.title}</p> -->

<div class="h-auto w-full flex flex-col xl:max-w-[90rem] items-start mx-auto px-8 mb-4 gap-8">

    <Card customClass="!border-none !rounded-2xl space-y-4 !p-0" width="w-full">
        <div class="flex flex-col xl:flex-row w-full divide-[#293143] divide-y divide-x-[0px] xl:divide-x xl:divide-y-[0px]">
            <div class="flex flex-col gap-y-4 w-full xl:w-[65%] p-6">
                <div class="flex flex-row items-center justify-between w-full">
                    <div class="flex flex-row items-center gap-x-2">
                        <div class="rounded-lg py-1 px-2 bg-[#2d3549]">
                            <p class="text-sm">#{proposal.id}</p>
                        </div>
                        {#if proposal.info}
                            <div class="rounded-lg py-1 px-2 bg-[#2d3549] flex flex-row items-center gap-x-1">
                                {#if proposal.info.toLowerCase() === 'fast track'}
                                    {@html fast_track}
                                {:else if proposal.info.toLowerCase() === 'critical'}
                                    {@html critical}
                                {/if}
                                <p class="text-sm">{proposal.info}</p>
                            </div>
                        {/if}
                    </div>
                    <p class="text-[#a2acc5] text-sm">{proposal.voted}</p>
                </div>

                <p class="font-semibold text-xl">{proposal.title}</p>

                <p class="text-sm"><span class="text-[#a2acc5]">Executed:</span>&nbsp; {proposal.executed}</p>
                <a href="https://bscscan.com/tx/{proposal.address}" target="_blank" class="flex flex-row gap-x-2 items-center text-[#3a78ff] hover:underline">
                    <span class="md:hidden">{slicedAddress}</span>
                    <span class="hidden md:inline">{proposal.address}</span>
                    <Icon icon="akar-icons:link-out" />
                </a>
            </div>
            <div class="flex flex-col gap-2 w-full xl:w-[35%] px-6 xl:px-12 pt-6">
                <p>Proposal History</p>

                {#each Object.entries(proposalHistory[proposal.status]) as [step, completed], index}
                    <div class="flex flex-row justify-between" style="transform: translateY(-{index * 8}px);">
                        <div class="mr-3 flex flex-col items-center">
                            <div>
                                <div class="flex items-center justify-center p-1 rounded-full w-fit {completed ? 'bg-[#00c38e]' : 'bg-[#ff0000]'}">
                                    {#if completed}
                                        <Icon icon="mdi:check" class="w-4 h-auto"/>
                                    {:else}
                                        <Icon icon="radix-icons:cross-2" class="w-4 h-auto"/>
                                    {/if}
                                </div>
                            </div>
                            <div class={`h-full w-px bg-gray-300 ${index === Object.entries(proposalHistory["Executed"]).length - 1 ? 'hidden' : ''}`}></div>
                        </div>
                        <div class="pb-4 flex grow">
                            <p class="text-sm">{step}</p>
                        </div>

                        <p class="text-xs text-gray-300">10 Mar 2024 2:09 AM</p>
                    </div>
                {/each}
            </div>
        </div>



    </Card>

    <div class="flex flex-col xl:flex-row gap-6 w-full">
        <!--FOR-->
        <Card customClass="!border-none !rounded-2xl" width="w-full">
            <div class="flex flex-col gap-y-2">
                <div class="flex flex-row items-center justify-between w-full">
                    <p class="text-sm text-[#a2acc5]">For</p>
                    <p class="text-white">453.0013K</p>
                </div>
                <ProgressBar label="Progress Bar" meter="bg-[#00c38e]" track="bg-[#C6F3AF]/30" value={100} max={100} />

                <div class="grid grid-cols-2 w-full mt-8">
                    <p class="text-left">{forData.length} address</p>
                    <p class="text-right">Votes</p>
                </div>
                <div class="max-h-[100px] overflow-auto">
                    {#each forData as forData}
                        <div class="grid grid-cols-2 w-full pr-1">
                            <p class="text-left">
                               <a href="/" target="_blank" class="text-[#3a78ff] hover:underline">{`${forData.address.slice(0, 4)}...${forData.address.slice(-4)}`}</a>
                            </p>
                            <p class="text-right">{forData.votes}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </Card>

        <!--AGAINST-->
        <Card customClass="!border-none !rounded-2xl " width="w-full">
            <div class="flex flex-col gap-y-2">
                <div class="flex flex-row items-center justify-between w-full">
                    <p class="text-sm text-[#a2acc5]">Againts</p>
                    <p class="text-white">453.0013K</p>
                </div>
                <ProgressBar label="Progress Bar" meter="bg-[#00c38e]" track="bg-[#C6F3AF]/30" value={35} max={100} />

                <div class="grid grid-cols-2 w-full mt-8">
                    <p class="text-left">{againstData.length} address</p>
                    <p class="text-right">Votes</p>
                </div>
                <div class="max-h-[100px] overflow-auto">
                    {#each againstData as againstData}
                        <div class="grid grid-cols-2 w-full pr-1">
                            <p class="text-left">
                               <a href="/" target="_blank" class="text-[#3a78ff] hover:underline">{`${againstData.address.slice(0, 4)}...${againstData.address.slice(-4)}`}</a>
                            </p>
                            <p class="text-right">{againstData.votes}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </Card>

        <!--ABSTAIN-->
        <Card customClass="!border-none !rounded-2xl " width="w-full">
            <div class="flex flex-col gap-y-2">
                <div class="flex flex-row items-center justify-between w-full">
                    <p class="text-sm text-[#a2acc5]">Abstain</p>
                    <p class="text-white">453.0013K</p>
                </div>
                <ProgressBar label="Progress Bar" meter="bg-[#00c38e]" track="bg-[#C6F3AF]/30" value={0} max={100} />

                <div class="grid grid-cols-2 w-full mt-8">
                    <p class="text-left">{abstainData.length} address</p>
                    <p class="text-right">Votes</p>
                </div>
                <div class="max-h-[100px] overflow-auto">
                    {#each abstainData as abstainData}
                        <div class="grid grid-cols-2 w-full pr-1">
                            <p class="text-left">
                               <a href="/" target="_blank" class="text-[#3a78ff] hover:underline">{`${abstainData.address.slice(0, 4)}...${abstainData.address.slice(-4)}`}</a>
                            </p>
                            <p class="text-right">{abstainData.votes}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </Card>
    </div>

    <Card customClass="!border-none !rounded-2xl " width="w-full">
        <div class="flex flex-col gap-y-4">
            <p class="text-[#a2acc5] font-semibold text-lg">Description</p>
            
            <div class="space-y-2">
                <p class="text-[#a2acc5] font-medium">Summary</p>
                <p>If passed, this VIP will configure the price feeds of the EURA token, reusing the configuration previously set for agEUR, taking into account the already performed rebrand.</p>
            </div>

            <div class="space-y-2">
                <p class="text-[#a2acc5] font-medium">Details</p>
                <p>
                    Angle Protocol rebranded agEUR into EURA (<a href="https://snapshot.org/#/anglegovernance.eth/proposal/0x67b1a428cf8f0a6242c6649dab34acc6c59ac15de4198cc0e7e7796fb15c1455" target="_blank" class="text-[#3a78ff] hover:underline">snapshot</a>), 
                    including the token symbol of the <a href="https://bscscan.com/address/0x12f31B73D812C6Bb0d735a218c086d44D5fe5f89" target="_blank" class="text-[#3a78ff] hover:underline">underlying token</a>.
                </p>
                <p>After executing this VIP, the agEUR market will be available again in the Venus Protocol.</p>
                <p>Another (Normal) VIP will be proposed in the following days to complete the rebranding on Venus.</p>
            </div>

            <div class="space-y-2">
                <p class="text-[#a2acc5] font-medium">References</p>
                <ul class="list-disc list-inside">
                    <li><a href="https://github.com/VenusProtocol/vips/pull/232" target="_blank" class="text-[#3a78ff] hover:underline">VIP simulation</a></li>
                </ul>
            </div>

            <div class="space-y-2">
                <p class="text-[#a2acc5] font-semibold text-lg">Voting options</p>
                <ul class="list-disc list-inside">
                    <li>For - I agree that Venus Protocol should proceed with this proposal</li>
                    <li>Against - I do not think that Venus Protocol should proceed with this proposal</li>
                    <li>Abstain - I am indifferent to whether Venus Protocol proceeds or not</li>
                </ul>
            </div>

            <div class="space-y-2">
                <p class="text-[#a2acc5] font-semibold text-lg">Operations</p>
                <p class="break-all"><a href="https://bscscan.com/address/0x12f31B73D812C6Bb0d735a218c086d44D5fe5f89" target="_blank" class="text-[#49bd62]">0x594810b741d136f1960141C0d8Fb4a91bE78A820</a>.setSymbolOverride("EURA", "AGEUR")</p>
            </div>
        </div>
    </Card>
</div>

