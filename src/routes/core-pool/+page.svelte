<script lang="ts">
	import Card from '$lib/Components/Card/Card.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Icon from '@iconify/svelte';


	let core_pool = [
		{ asset:'USDC', img:'https://app.venus.io/assets/usdc-ae6ed32b.svg', total_supply:'120.90M USDC', supply_apy:'18.56%', total_borrow:'10.97M USDC', borrow_apy:'22.35%', liquidity:'11.68M USDC', price:'$0.999939'},
		{ asset:'USDT', img:'https://app.venus.io/assets/usdt-68774da1.svg', total_supply:'20.90M USDT', supply_apy:'68.56%', total_borrow:'18.97M USDT', borrow_apy:'20.00%', liquidity:'1.60M USDT', price:'$1.000075'},
		{ asset:'BSW', img:'https://app.venus.io/assets/bsw-378a0dd1.svg', total_supply:'320.90M BSW', supply_apy:'28.16%', total_borrow:'28.97M BSW', borrow_apy:'4.60%', liquidity:'16.08M BSW', price:'$31.02'},
		{ asset:'WBNB', img:'https://app.venus.io/assets/wbnb-e73b2dde.svg', total_supply:'10.00M WBNB', supply_apy:'10.00%', total_borrow:'31.93M WBNB', borrow_apy:'2.35%', liquidity:'23.68M WBNB', price:'$0.999101'},
		{ asset:'TRX', img:'https://app.venus.io/assets/trx-025f5595.svg', total_supply:'1.90M TRX', supply_apy:'11.06%', total_borrow:'11.91M TRX', borrow_apy:'2.00%', liquidity:'18.30M TRX', price:'$10.817338'},
	];

    let core_pool_info = { total_supply: '2.64B', total_borrow: '1.01B', available_liquidity: '1.63B', assets: '30' };
</script>


<div class="h-auto w-full flex flex-col xl:max-w-[90rem] items-start mx-auto px-8 gap-y-6 mb-4">
	
    <!--Desktop Card-->
	<Card customClass="!border-none !rounded-2xl hidden lg:block">
        <div class="flex flex-row items-center gap-x-16">
            <div class="flex flex-col gap-y-2">
                <p class="text-[#98abca] text-md font-semibold">Total Supply</p>
                <p class="text-2xl font-bold">{core_pool_info.total_supply}</p>
            </div>
    
            <div class="flex flex-col gap-y-2">
                <p class="text-[#98abca] text-md font-semibold">Total Borrow</p>
                <p class="text-2xl font-bold">{core_pool_info.total_borrow}</p>
            </div>
    
            <div class="flex flex-col gap-y-2">
                <p class="text-[#98abca] text-md font-semibold">Available Liquidity</p>
                <p class="text-2xl font-bold">{core_pool_info.available_liquidity}</p>
            </div>
    
            <div class="flex flex-col gap-y-2">
                <p class="text-[#98abca] text-md font-semibold">Assets</p>
                <p class="text-2xl font-bold">{core_pool_info.assets}</p>
            </div>
        </div>  
	</Card>

    <!--Mobile Card-->
    <div class="lg:hidden flex flex-col sm:flex-row items-center gap-x-4 gap-y-2 h-full w-full">
        <Card customClass="!border-none !rounded-2xl">
            <p class="text-[#98abca] text-md font-semibold">Total Supply</p>
            <p class="text-2xl font-bold">{core_pool_info.total_supply}</p>
        </Card>
        <Card customClass="!border-none !rounded-2xl">
            <p class="text-[#98abca] text-md font-semibold">Total Borrow</p>
            <p class="text-2xl font-bold">{core_pool_info.total_borrow}</p>
        </Card>
    </div>
    <div class="lg:hidden flex flex-col sm:flex-row items-center gap-x-4 gap-y-2 h-full w-full -mt-4">
        <Card customClass="!border-none !rounded-2xl">
            <p class="text-[#98abca] text-md font-semibold">Available Liquidity</p>
            <p class="text-2xl font-bold">{core_pool_info.available_liquidity}</p>
        </Card>
        <Card customClass="!border-none !rounded-2xl">
            <p class="text-[#98abca] text-md font-semibold">Assets</p>
            <p class="text-2xl font-bold">{core_pool_info.assets}</p>
        </Card>
    </div>
    

    <!-- Warning Card -->
    <Card customClass="!bg-[#232228] !border-[#be613b] !px-4 !py-3">
        <div class="flex flex-row items-center gap-x-2">
            <Icon icon="ion:warning-outline" class="text-[#e06f3f] min-w-6 min-h-6"/>
            <p class="text-sm">Supplying tokens to the Venus Core Pool pool will increase your borrow limit for this pool only, effectively enabling you to borrow tokens from this pool only.</p>
        </div>
    </Card>

	<!-- Table -->
	<div class="table-container !rounded-2xl">
		<!-- Native Table Element -->
		<table class="table !bg-[#1e2431]">
			<thead class="!bg-[#1e2431]">
				<tr>
					<th>Asset</th>
					<th class="text-right">Total supply</th>
					<th class="text-right">Supply APY / LTV</th>
                    <th class="text-right">Total borrow</th>
					<th class="text-right">Borrow APY</th>
					<th class="text-right">Liquidity</th>
                    <th class="text-right">Price</th>
				</tr>
			</thead>
			<tbody class="!bg-[#1e2431]">
				{#each core_pool as row, i}
					<tr>
						<td class="flex flex-row items-center gap-x-2">
							<img src={row.img} alt={row.asset} class="w-5 h-5">
							{row.asset}
						</td>
						<td class="text-right">
							{row.total_supply}
						</td>
						<td class="text-right">
							{row.supply_apy}
						</td>
						<td class="text-right">
							{row.total_borrow}
						</td>
						<td class="text-right">
							{row.borrow_apy}
						</td>
						<td class="text-right">
							{row.liquidity}
						</td>
                        <td class="text-right">
							{row.price}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

</div>
