<script lang="ts">
	import Icon from "@iconify/svelte";
	import { slide } from "svelte/transition";
	import { onMount, onDestroy } from 'svelte';

	export let showCombo: boolean = false;
	export let imgSelect: string = '';
    export let headSelect:string= '';

    let comboElement: any;

    function handleClickOutside(event: any) {
        if (showCombo && !comboElement.contains(event.target)) {
            showCombo = false;
        }
    }

    if (typeof window !== 'undefined') {
        onMount(() => {
            window.addEventListener('click', handleClickOutside);
        });

        onDestroy(() => {
            window.removeEventListener('click', handleClickOutside);
        });
    }

    //ComboBox custom class declaration
    export let classes: string = '';
</script>

<button
	class="flex flex-row items-center justify-between gap-x-6 bg-[#2d3549] hover:bg-[#4c5670] rounded-lg py-2 px-4 w-full {classes}"
	on:click|stopPropagation={(event) => {
        showCombo = !showCombo;
    }}
    bind:this={comboElement}
>
    <!--Dropdown Button Display-->
    <div class="flex flex-row items-center gap-x-2">
        {#if imgSelect}
            <img src={imgSelect} alt="img" class="h-5 w-5">
        {/if}        
        <p class="text-sm font-semibold inline">{headSelect}</p>
    </div>
    <div class="{showCombo? '-rotate-180' : ''} !transition-all duration-1000">
        <Icon icon="mingcute:down-line" class="h-5 w-5"/>
    </div>

    <!--Dropdown Content-->
	{#if showCombo}
		<div
			class="absolute z-[9999] top-[110%] right-0 flex flex-col h-auto w-full bg-[#181d27] rounded-lg border border-gray-800 shadow-[5px_5px_30px_15px_rgba(0,0,0,0.3)] "
			in:slide
			out:slide
		>
            <slot/>
		</div>
	{/if}

</button>
