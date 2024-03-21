<script lang="ts">
        import * as footer_svg from "$lib/Components/SVG/footer_svg";

        let footer_links = [
            {name:'bsc scan', href:'https://bscscan.com/token/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63', icon: footer_svg.bsc_scan_svg},
            {name:'discord', href:'https://discord.com/invite/pTQ9EBHYtF', icon: footer_svg.discord_svg},
            {name:'telegram', href:'https://t.me/venusprotocol', icon: footer_svg.telegram_svg},
            {name:'twitter', href:'https://twitter.com/VenusProtocol', icon: footer_svg.twitter_svg},
            {name:'medium', href:'https://medium.com/@Venus_protocol', icon: footer_svg.medium_svg},
            {name:'github', href:'https://github.com/VenusProtocol/', icon: footer_svg.github_svg}
        ]
</script>

<div class="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-6 p-4 h-auto sm:h-[56px] bg-transparent w-full">
    <a href="https://docs-v4.venus.io/" target="_blank" class="underline text-sm">Documentation</a>

    <div class="bg-[#303e5e] h-full w-[1px] hidden sm:block"></div>

    <div class="flex flex-none items-center -ml-4 sm:ml-0">
        {#each footer_links as footer}
            <a class="bg-[#303e5e] hover:bg-[#3a78ff] text-white ml-4 flex h-6 w-6 items-center justify-center rounded" href={footer.href} target="_blank" rel="noreferrer">
                {@html footer.icon}
            </a>
        {/each}
    </div>
</div>