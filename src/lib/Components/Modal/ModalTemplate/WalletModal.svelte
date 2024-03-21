<script lang="ts">
    import * as wallet_svg from '$lib/Components/SVG/wallet_svg'

    let wallet = [
        {name: 'Binance Wallet', icon: wallet_svg.binance},
        {name: 'Trust Wallet', icon: wallet_svg.trust},
        {name: 'MetaMask', icon: wallet_svg.metamask},
        {name: 'Coinbase Wallet', icon: wallet_svg.coinbase},

        {name: 'WalletConnect', icon: wallet_svg.walletConnect},
        {name: 'SafePal', icon: wallet_svg.safePal},
        {name: 'OKX Wallet', icon: wallet_svg.okx},
        {name: 'Brave Wallet', icon: wallet_svg.brave},

        {name: 'Infinity Wallet', icon: wallet_svg.infinity},
        {name: 'BitKeep', icon: wallet_svg.bitkeep},
        {name: 'Rabby Wallet', icon: wallet_svg.rabby},
        {name: 'Ledger Wallet', icon: wallet_svg.ledger},
    ];
</script>

<div class="grid grid-cols-3 sm:grid-cols-4 mx-auto my-2 justify-items-center space-x-1 space-y-1">
    {#each wallet as select_wallet}
        <button class="w-[103px] h-[90px] rounded-xl hover:bg-[#2d3549] flex flex-col items-center justify-center gap-y-2" on:click={() => { console.log(select_wallet.name) }}>
            {@html select_wallet.icon}
            <p class="text-xs whitespace-nowrap">{select_wallet.name}</p>
        </button>
    {/each}
</div>