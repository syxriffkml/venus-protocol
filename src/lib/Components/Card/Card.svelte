<script lang="ts">
    export let width: string = 'w-full';
	export let customClass: string = '';
	export let animate: 'floating' | 'floating-shadow' | 'floating-none' = 'floating-none';
</script>

<!-- prettier-ignore -->
<div class="border border-gray-700 bg-[#1e2431] p-6 rounded-lg {width} {customClass}
    { animate === 'floating' ? 'floating' : 
      animate === 'floating-shadow' ? 'floating-shadow' : 
      animate === 'floating-none' ? 'floating-none' : ''}" 
>
    <slot></slot>
</div>

<style>
	.floating {
		transition: transform 0.3s ease;
	}

	.floating:hover {
		transform: translateY(-5px); /* Adjust the value as needed */
	}

	.floating-shadow {
		transition: transform 0.3s ease;
	}

	.floating-shadow:hover {
		transform: translateY(-5px) translateX(-5px);
		box-shadow: 3px 10px 20px rgba(174, 236, 255, 1);
	}
</style>
