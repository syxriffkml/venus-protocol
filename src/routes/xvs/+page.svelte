<script lang="ts">
	import Card from '$lib/Components/Card/Card.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Icon from '@iconify/svelte';
    import { ProgressBar } from '@skeletonlabs/skeleton';


	let xvs = [
		{ asset:'USDC', img:'https://app.venus.io/assets/usdc-ae6ed32b.svg', per_day:'93.74', supply:'0.03%', borrow:'-'},
		{ asset:'USDT', img:'https://app.venus.io/assets/usdt-68774da1.svg', per_day:'93.74', supply:'0.03%', borrow:'0.86%'},
		{ asset:'BSW', img:'https://app.venus.io/assets/bsw-378a0dd1.svg', per_day:'46.87', supply:'0.07%', borrow:'0.55%'},
		{ asset:'WBNB', img:'https://app.venus.io/assets/wbnb-e73b2dde.svg', per_day:'39.062', supply:'0.15%', borrow:'0.1%'},
		{ asset:'TRX', img:'https://app.venus.io/assets/trx-025f5595.svg', per_day:'4.68', supply:'0.3%', borrow:'0.08%'},
	];

    let xvs_info = { img:'https://app.venus.io/assets/xvs-e7b82352.svg', address: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63', daily_distribution: '498.94', remaaining: '14.16M'};
    let slicedAddress = xvs_info.address.slice(0, 4) + '...' + xvs_info.address.slice(-4);

    let copyState: boolean = false;
    function copyToClipboard() {
		copyState = true;
		navigator.clipboard.writeText(xvs_info.address);
	}
</script>


<div class="h-auto w-full flex flex-col xl:max-w-[90rem] items-start mx-auto px-8 gap-y-6 mb-4">

    <!-- Warning Card -->
    <Card customClass="!bg-[#232228] !border-[#be613b] !px-4 !py-3">
        <div class="flex flex-row items-center gap-x-2">
            <Icon icon="ion:warning-outline" class="text-[#e06f3f] min-w-6 min-h-6"/>
            <p class="text-sm">Isolated assets are not included on this page</p>
        </div>
    </Card>
	
    <!--Card-->
	<Card customClass="!border-none !rounded-2xl">
        <div class="flex flex-col md:flex-row items-center justify-between gap-y-6">
            <div class="order-2 md:order-1 flex flex-row items-center gap-x-2 w-full">
                <img src={xvs_info.img} alt="XVS" class="w-6 h-auto">
                <a href="https://bscscan.com/token/{xvs_info.address}" target="_blank" class="text-sm hidden xl:inline">{xvs_info.address}</a>
                <a href="https://bscscan.com/token/{xvs_info.address}" target="_blank" class="text-sm inline xl:hidden">{slicedAddress}</a>
                <button on:click={() => { copyToClipboard(); }}>
                    {#if !copyState}
                        <Icon icon="ion:copy-outline" class="text-[#3a78ff]"/>
                    {:else}
                        <Icon icon="line-md:check-all" width="20" height="20"  style="color: #2cce54" />
                    {/if}
                </button>
            </div>

            <div class="order-1 md:order-2 flex flex-col gap-y-1 w-full md:w-[1200px]">
                <div class="flex flex-row items-center justify-between w-full">
                    <p class="text-sm text-[#a2acc5] text-left">
                        Daily Distribution:&nbsp;
                        <span class="text-white block md:inline">{xvs_info.daily_distribution} XVS</span>
                    </p>


                    <p class="text-sm text-[#a2acc5] text-right">
                        Remaining:&nbsp;
                        <span class="text-white block md:inline">{xvs_info.remaaining} XVS</span>
                    </p>
                </div>
                <ProgressBar label="Progress Bar" meter="bg-[#00c38e]" track="bg-[#2d3549]" value={0} max={100} />
            </div>
        </div>  
	</Card>

	<!-- Table -->
	<div class="table-container !rounded-2xl">
		<!-- Native Table Element -->
		<table class="table !bg-[#1e2431]">
			<thead class="!bg-[#1e2431]">
				<tr class="text-gray-300">
					<th class="!text-sm !font-normal">Asset</th>
					<th class="text-right !text-sm !font-normal">XVS Per Day</th>
					<th class="text-right !text-sm !font-normal">Supply XVS APY</th>
					<th class="text-right !text-sm !font-normal">Borrow XVS APY</th>
				</tr>
			</thead>
			<tbody class="!bg-[#1e2431]">
				{#each xvs as row, i}
					<tr class="!bg-[#1e2431]">
						<td class="flex flex-row items-center gap-x-2">
							<img src={row.img} alt={row.asset} class="w-5 h-5">
							{row.asset}
						</td>
						<td class="text-right">
							{row.per_day}&nbsp;XVS
						</td>
						<td class="text-right">
							{row.supply}
						</td>
						<td class="text-right">
							{row.borrow}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

</div>
