<script lang="ts">
	import Card from '$lib/Components/Card/Card.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Icon from '@iconify/svelte';
    import ComboBox from '$lib/Components/ComboBox/ComboBox.svelte';



	let history = [
		{ type:'Mint', img:'https://app.venus.io/assets/usdc-ae6ed32b.svg', hash:'0xB580d7501F2f118A2667aBc75ef020bdAc313DCf', block:'37070855', from:'0xecA88125a5ADbe82614ffC12D0DB554E2e2867C8', to:'', amount:'9.27', created:'23 seconds ago'},
		{ type:'Transfer', img:'https://app.venus.io/assets/usdt-68774da1.svg', hash:'0xB580d7501F2f118A2667aBc75ef020bdAc313DCf', block:'37070853', from:'0xecA88125a5ADbe82614ffC12D0DB554E2e2867C8', to:'', amount:'24.81', created:'42 seconds ago'},
		{ type:'Borrow', img:'https://app.venus.io/assets/bsw-378a0dd1.svg', hash:'0xB580d7501F2f118A2667aBc75ef020bdAc313DCf', block:'37070849', from:'0xecA88125a5ADbe82614ffC12D0DB554E2e2867C8', to:'0x5d287C5760bD668892981C16BB9556c10Ccf696B', amount:'23.21K', created:'1 minutes ago'},
		{ type:'Repay Borrow', img:'https://app.venus.io/assets/wbnb-e73b2dde.svg', hash:'0xB580d7501F2f118A2667aBc75ef020bdAc313DCf', block:'37070849', from:'0xecA88125a5ADbe82614ffC12D0DB554E2e2867C8', to:'', amount:'71.57', created:'2 minutes ago'},
		{ type:'Redeem', img:'https://app.venus.io/assets/trx-025f5595.svg', hash:'0xB580d7501F2f118A2667aBc75ef020bdAc313DCf', block:'37070847', from:'0xecA88125a5ADbe82614ffC12D0DB554E2e2867C8', to:'0x0F89DeF402B8Ffa30eC805BeA36216876cC3E318', amount:'178.93', created:'2 minutes ago'},
        { type:'Approval', img:'https://app.venus.io/assets/usdt-68774da1.svg', hash:'0xB580d7501F2f118A2667aBc75ef020bdAc313DCf', block:'37070853', from:'0xecA88125a5ADbe82614ffC12D0DB554E2e2867C8', to:'', amount:'24.81', created:'7 days ago'},
        { type:'Mint', img:'https://app.venus.io/assets/usdt-68774da1.svg', hash:'0xB580d7501F2f118A2667aBc75ef020bdAc313DCf', block:'37070853', from:'0xecA88125a5ADbe82614ffC12D0DB554E2e2867C8', to:'', amount:'24.81', created:'7 days ago'},
        { type:'Redeem', img:'https://app.venus.io/assets/usdt-68774da1.svg', hash:'0xB580d7501F2f118A2667aBc75ef020bdAc313DCf', block:'37070853', from:'0xecA88125a5ADbe82614ffC12D0DB554E2e2867C8', to:'', amount:'24.81', created:'7 days ago'},
        { type:'Redeem', img:'https://app.venus.io/assets/usdt-68774da1.svg', hash:'0xB580d7501F2f118A2667aBc75ef020bdAc313DCf', block:'37070853', from:'0xecA88125a5ADbe82614ffC12D0DB554E2e2867C8', to:'', amount:'24.81', created:'7 days ago'},
	];

</script>


<div class="h-auto w-full flex flex-col xl:max-w-[90rem] items-start mx-auto px-8 gap-y-6 mb-4">
	
	<!-- Table -->
	<div class="table-container !rounded-2xl">

        <!--Filters(Checkbox & Dropdown)-->
        <div class="p-4 w-full flex flex-row  justify-between !bg-[#1e2431]">
            <label class="flex items-center space-x-2">
                <input class="checkbox" type="checkbox" />
                <p class="text-[#8fa5c6] text-sm">My transactions</p>
            </label>
            
            <div class="flex flex-row items-center gap-x-4 relative">
                <p class="text-[#8fa5c6] text-sm font-medium">Type</p>
                <ComboBox headSelect="All">
                    <div class="z-[99999] p-2">
                        d
                    </div>
                </ComboBox>
            </div>
        </div>


		<!-- Native Table Element -->
		<table class="table !bg-[#1e2431] !rounded-t-none">
			<thead class="!bg-[#1e2431]">
				<tr>
					<th class="text-left">Type</th>
					<th class="text-left">Hash</th>
					<th class="text-left">Block</th>
                    <th class="text-left">From</th>
					<th class="text-left">To</th>
					<th class="text-left">Amount</th>
                    <th class="text-left">Created</th>
				</tr>
			</thead>
			<tbody class="!bg-[#1e2431]">
				{#each history as row, i}
					<tr class="!bg-[#1e2431]">
						<td class="text-left flex flex-row items-center gap-x-2">
							<img src={row.img} alt="Type"class="w-5 h-5">
							{row.type}
						</td>
						<td class="text-left">
                            <a href="https://bscscan.com/tx/{row.hash}" target="_blank" class="text-[#257bcb] font-semibold">
                                {`${row.hash.slice(0, 4)}....${row.hash.slice(-4)}`}
                            </a>
						</td>
						<td class="text-left">
							{row.block}
						</td>
						<td class="text-left">
                            <a href="https://bscscan.com/tx/{row.from}" target="_blank" class="text-[#257bcb] font-semibold">
                                {`${row.from.slice(0, 4)}....${row.from.slice(-4)}`}
                            </a>
						</td>
						<td class="text-left">
                            {#if row.to}
                                <a href="https://bscscan.com/tx/{row.to}" target="_blank" class="text-[#257bcb] font-semibold">
                                    {`${row.to.slice(0, 4)}....${row.to.slice(-4)}`}
                                </a>
                            {:else}
                                -
                            {/if}
						</td>
						<td class="text-left">
                            {row.amount}
						</td>
                        <td class="text-left">
							{row.created}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

</div>
