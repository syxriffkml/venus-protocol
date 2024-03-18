<script lang="ts">
	import type { MouseEventHandler } from "svelte/elements";

    export let handler: (event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }) => void = ()=>{}

    export let rounded:string = 'rounded-full'

    export let disabled: boolean = false
    
    export let width:string = 'w-auto'

    export let mode: 'blue' | 'blue-inverted' | 'side' = 'blue'
    let buttonStyle: string;
    $: {
        switch(mode) {
            case 'blue':
                buttonStyle = 'isBlue';
                break;
            case 'blue-inverted':
                buttonStyle = 'isBlueInverted';
                break;
            case 'side':
                buttonStyle = 'side';
                break;
            default:
                buttonStyle = 'isBlue';
        }
    }

    export let customClass: string = '';
    
    // export let btnCancel: boolean = false
</script>

<!-- design button here -->
<button {disabled} class="{`${width} ${buttonStyle} ${customClass}`} {rounded}" on:click={handler}><slot/></button>

<style>
    /* isBlue class */
    .isBlue {
        @apply bg-[#3a78ff] text-white py-2 px-4 hover:scale-105 transition;
    }

    /* isBlueInverted class */
    .isBlueInverted{
        @apply bg-transparent backdrop-blur-sm text-white py-2 px-4 border-2 border-[#3a78ff] hover:scale-105 transition;
    }

    /* side classes */
    .side {
        @apply text-[#a7b0c7] py-2 px-4 bg-transparent hover:bg-[#2d3549];
    }

    .side.active {
        @apply text-[#f5ece6] py-2 px-4 bg-transparent bg-[#2d3549] relative;
    }

    @media (min-width: 1280px) {
        .side.active::before {
            content: "";
            position: absolute;
            height: 100%;
            width: 4px;
            left: 0;
            top: 0;
            background: #3a78ff;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    }
</style>