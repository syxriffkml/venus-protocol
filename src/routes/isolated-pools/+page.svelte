<script lang="ts">
	import Card from '$lib/Components/Card/Card.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Icon from '@iconify/svelte';


	let isolated_pool = [
		{ pool:'GameFi', total_supply:'$120.90M', total_borrow:'$10.97M', liquidity:'$11.68M',
            img:[
                'assets/img/coins/usdc.svg',
                'assets/img/coins/raca.png',
                'assets/img/coins/floki.png',
                'assets/img/coins/usdt.svg'
            ],
        },
		{ pool:'DeFi', total_supply:'$20.90M', total_borrow:'$18.97M', liquidity:'$1.60M',
            img:[
                'assets/img/coins/ankrBNB.svg',
                'assets/img/coins/bsw.svg',
                'assets/img/coins/alpaca.png',
                'assets/img/coins/usdt.svg',
                'assets/img/coins/twt.svg',

                'assets/img/coins/twt.svg',
                'assets/img/coins/twt.svg',
            ]
        },
		{ pool:'Liquid Staked BNB', total_supply:'$320.90M', total_borrow:'$28.97M', liquidity:'$16.08M',
            img:[
                'assets/img/coins/bsw.svg',
                'assets/img/coins/usdc.svg'
            ]
        },
		{ pool:'Tron', total_supply:'$10.00M', total_borrow:'$31.93M', liquidity:'$23.68M',
            img:[
                'assets/img/coins/wbnb.svg',
                'assets/img/coins/usdt.svg',
                'assets/img/coins/floki.png',
            ]
        },
		{ pool:'Stablecoins', total_supply:'$1.90M', total_borrow:'$11.91M', liquidity:'$18.30M',
            img:[
                'assets/img/coins/trx.svg',
                'assets/img/coins/usdt.svg',
            ]
        },
	];

    let isolated_pool_info = { total_supply: '$18.46M', total_borrow: '$1.29M', available_liquidity: '$17.16M', total_treasury: '$685.27K' };
</script>


<div class="h-auto w-full flex flex-col xl:max-w-[90rem] items-start mx-auto px-8 gap-y-6 mb-4">
	
    <!--Desktop Card-->
	<Card customClass="!border-none !rounded-2xl hidden lg:block">
        <div class="flex flex-row items-center gap-x-16">
            <div class="flex flex-col gap-y-2">
                <p class="text-[#98abca] text-md font-semibold">Total Supply</p>
                <p class="text-2xl font-bold">{isolated_pool_info.total_supply}</p>
            </div>
    
            <div class="flex flex-col gap-y-2">
                <p class="text-[#98abca] text-md font-semibold">Total Borrow</p>
                <p class="text-2xl font-bold">{isolated_pool_info.total_borrow}</p>
            </div>
    
            <div class="flex flex-col gap-y-2">
                <p class="text-[#98abca] text-md font-semibold">Available Liquidity</p>
                <p class="text-2xl font-bold">{isolated_pool_info.available_liquidity}</p>
            </div>
    
            <div class="flex flex-col gap-y-2">
                <p class="text-[#98abca] text-md font-semibold">Total Treasury</p>
                <p class="text-2xl font-bold">{isolated_pool_info.total_treasury}</p>
            </div>
        </div>  
	</Card>

    <!--Mobile Card-->
    <div class="lg:hidden flex flex-col sm:flex-row items-center gap-x-4 gap-y-2 h-full w-full">
        <Card customClass="!border-none !rounded-2xl">
            <p class="text-[#98abca] text-md font-semibold">Total Supply</p>
            <p class="text-2xl font-bold">{isolated_pool_info.total_supply}</p>
        </Card>
        <Card customClass="!border-none !rounded-2xl">
            <p class="text-[#98abca] text-md font-semibold">Total Borrow</p>
            <p class="text-2xl font-bold">{isolated_pool_info.total_borrow}</p>
        </Card>
    </div>
    <div class="lg:hidden flex flex-col sm:flex-row items-center gap-x-4 gap-y-2 h-full w-full -mt-4">
        <Card customClass="!border-none !rounded-2xl">
            <p class="text-[#98abca] text-md font-semibold">Available Liquidity</p>
            <p class="text-2xl font-bold">{isolated_pool_info.available_liquidity}</p>
        </Card>
        <Card customClass="!border-none !rounded-2xl">
            <p class="text-[#98abca] text-md font-semibold">Total Treasury</p>
            <p class="text-2xl font-bold">{isolated_pool_info.total_treasury}</p>
        </Card>
    </div>

	<!-- Table -->
	<div class="table-container !rounded-2xl">
		<!-- Native Table Element -->
		<table class="table !bg-[#1e2431]">
			<thead class="!bg-[#1e2431]">
				<tr class="!bg-[#1e2431] text-gray-300">
					<th class="w-[200px] !text-sm !font-normal">Asset</th>
                    <th class="text-right !text-sm !font-normal">Pool</th>
					<th class="text-right !text-sm !font-normal">Total supply</th>
                    <th class="text-right !text-sm !font-normal">Total borrow</th>
					<th class="text-right !text-sm !font-normal">Liquidity</th>
				</tr>
			</thead>
			<tbody class="!bg-[#1e2431]">
				{#each isolated_pool as row, i}
					<tr class="!bg-[#1e2431]">
						<td class="flex flex-row items-center gap-x-2 w-[200px]">
							{#each row.img.slice(0, 5) as img}
                                <img src={img} alt={row.pool} class="w-6 h-6">
                            {/each}
                            {#if row.img.length > 5}
                                <p>+{row.img.length - 5}</p>
                            {/if}
						</td>
                        <td class="text-right">
							{row.pool}
						</td>
						<td class="text-right">
							{row.total_supply}
						</td>
						<td class="text-right">
							{row.total_borrow}
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
