<script lang="ts">
	import Card from '$lib/Components/Card/Card.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Icon from '@iconify/svelte';


	let dashboard = [
		{ asset:'USDC', img:'https://app.venus.io/assets/usdc-ae6ed32b.svg', pool:'Venus Core Pool', wallet:'0 USDC', supply:'18.56%', borrow:'24.35%', liquidity:'11.68M USDC'},
		{ asset:'USDT', img:'https://app.venus.io/assets/usdt-68774da1.svg', pool:'Stablecoins', wallet:'0 USDT', supply:'7.27%', borrow:'10.02%', liquidity:'4.08K USDT'},
		{ asset:'BSW', img:'https://app.venus.io/assets/bsw-378a0dd1.svg', pool:'DeFi', wallet:'0 BSW', supply:'1.61%', borrow:'1.61%', liquidity:'1.24M BSW'},
		{ asset:'USDT', img:'https://app.venus.io/assets/usdt-68774da1.svg', pool:'GameFi', wallet:'0 USDT', supply:'1.61%', borrow:'1.61%', liquidity:'132.38K USDT'},
		{ asset:'WBNB', img:'https://app.venus.io/assets/wbnb-e73b2dde.svg', pool:'Liquid Staked BNB', wallet:'0 WBNB', supply:'1.61%', borrow:'1.61%', liquidity:'31.77 WBNB'},
		{ asset:'TRX', img:'https://app.venus.io/assets/trx-025f5595.svg', pool:'Tron', wallet:'0 TRX', supply:'1.61%', borrow:'1.61%', liquidity:'317.42K TRX'},
	];

	let filter = 'All';
    let searchQuery = '';

    let pools = ['All', ...new Set(dashboard.map(item => item.pool))];

    let filteredDashboard: any;

    $: {
        filteredDashboard = dashboard.filter(item =>
            (filter === 'All' || item.pool === filter) &&
            item.asset.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
</script>


<div class="h-auto w-full flex flex-col xl:max-w-[90rem] items-start mx-auto px-8 gap-y-6 mb-4">
	<Card customClass="h-auto sm:h-[194px] !p-0">
		<div class="flex flex-col sm:flex-row justify-between overflow-hidden h-full">
			<div class="order-2 sm:order-1 w-full p-6 flex flex-col sm:justify-between justify-center items-center sm:items-start">
				<p class="text-lg font-semibold">Connect your wallet</p>
				<p class="sm:grow text-gray-400 text-center sm:text-left">Please connect your wallet to see your supplies, borrowings, and open positions.</p>
				<Button width="w-fit" mode="blue" rounded="rounded-lg" customClass="h-[48px] mt-4" handler={(event) => {  }}>Connect Wallet</Button>
			</div>

			<div class="order-1 sm:order-2 flex items-center justify-center w-full h-[150px] overflow-hidden sm:h-auto bg-[#2d3549] sm:bg-transparent rounded-t-lg">
				<img src="https://app.venus.io/assets/illustration-5eed727e.png" alt="img" class="w-[336px] h-auto translate-y-8 rounded-lg">
			</div>
		</div>
	</Card>

	<!--FIlter & Search-->
	<div class="flex flex-col lg:flex-row justify-between w-full gap-x-2 gap-y-6">
		<div class="order-2 lg:order-1 flex flex-row items-center grow-0 gap-x-4 gap-y-2 w-full overflow-auto lg:flex-wrap pb-2 lg:pb-0">
			{#each pools as pool}
				<button 
					class:bg-[#3a78ff]={pool === filter} class:bg-[#202832]={pool !== filter} 
					class="rounded-2xl py-1 px-4 border border-white/10 text-sm h-[32px] whitespace-nowrap" 
					on:click={() => filter = pool}
				>
					{pool}
				</button>
			{/each}
		</div>
	
		<div class="order-1 lg:order-2 relative flex w-full lg:w-[30%] h-12 items-center justify-between rounded-lg border border-white/5 bg-white/5 px-2 ">
			<div class="flex flex-row gap-x-2">
				<Icon icon="ic:round-search" class="w-6 h-6"/>
			</div>
			<input type="text" placeholder="Search Asset" class="w-full bg-transparent focus:outline-none border-none focus:ring-0" name="search_asset" bind:value={searchQuery}/>
		</div>
	</div>

	
	<!-- Table -->
	<div class="table-container !rounded-2xl">
		<!-- Native Table Element -->
		<table class="table !bg-[#1e2431]">
			<thead class="!bg-[#1e2431]">
				<tr>
					<th>Asset</th>
					<th class="text-right">Pool</th>
					<th class="text-right">Wallet</th>
					<th class="text-right">Supply APY / LTV</th>
					<th class="text-right">Borrow APY</th>
					<th class="text-right">Liquidity</th>
				</tr>
			</thead>
			<tbody class="!bg-[#1e2431]">
				{#each filteredDashboard as row, i}
					<tr class="!bg-[#1e2431]">
						<td class="flex flex-row items-center gap-x-2">
							<img src={row.img} alt={row.asset} class="w-5 h-5">
							{row.asset}
						</td>
						<td class="text-right">
							<a href="/" class="underline hover:text-blue-500">{row.pool}</a>
						</td>
						<td class="text-right">
							{row.wallet}
						</td>
						<td class="text-right">
							{row.supply}
						</td>
						<td class="text-right">
							{row.borrow}
						</td>
						<td class="text-right">
							{row.liquidity}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
