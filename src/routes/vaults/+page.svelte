<script lang="ts">
	import Card from '$lib/Components/Card/Card.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Icon from '@iconify/svelte';
    import Modal from '$lib/Components/Modal/Modal.svelte'

    let vaults = [
        { 
            token: 'XVS', 
            img: 'https://app.venus.io/assets/xvs-e7b82352.svg',
            staked: '0', 
            apr: '8.3%', 
            daily_emission: '1.62K', 
            total_staked: '7.16M'
        },
        { 
            token: 'VAI', 
            img: 'https://app.venus.io/assets/vai-4ecaa030.svg',
            staked: '0', 
            apr: '19.97%', 
            daily_emission: '125.000064', 
            total_staked: '3.36M'
        }
    ];

    //Modal declaration
    let stakeModal: Modal;
    let withdrawModal: Modal;

    let modalTitle: string = '';

    function stakeModal_xvs() {
        modalTitle = 'Stake XVS';
        stakeModal.openModal();
    }

    function stakeModal_vai() {
        modalTitle = 'Stake VAI';
        stakeModal.openModal();
    }

    function withdrawModal_xvs() {
        modalTitle = 'Withdraw XVS';
        withdrawModal.openModal();
    }

    function withdrawModal_vai() {
        modalTitle = 'Withdraw VAI';
        withdrawModal.openModal();
    }


</script>


<div class="h-auto w-full flex flex-col xl:flex-row xl:max-w-[90rem] items-start mx-auto px-8 gap-6 mb-4">
	
    <Card customClass="!border-none !rounded-2xl">
        <div class="flex flex-col gap-y-6">
            <div class="flex flex-row items-center gap-x-2">
                <img src={vaults[0].img} alt="img">
                <p class="text-lg font-semibold">{vaults[0].token}</p>
            </div>
            
            <div class="space-y-4">
                <p class="text-[#98abca] text-sm">You are staking</p>
                <div class="flex flex-row items-center gap-x-2">
                    <img src={vaults[0].img} alt="img" class="w-10 h-10">
                    <p class="text-4xl font-semibold">{vaults[0].staked}</p>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-x-12">
                <div class="flex flex-row sm:flex-col gap-y-2 items-center sm:items-start justify-between w-full sm:w-auto">
                    <p class="text-[#98abca] text-sm">XVS Stake APR</p>
                    <p class="text-sm sm:text-xl font-semibold sm:font-bold">{vaults[0].apr}</p>
                </div>
                <div class="flex flex-row sm:flex-col gap-y-2 items-center sm:items-start justify-between w-full sm:w-auto">
                    <p class="text-[#98abca] text-sm">Daily Emission</p>
                    <p class="text-sm sm:text-xl font-semibold sm:font-bold flex flex-row items-center gap-x-1">
                        <img src="https://app.venus.io/assets/xvs-e7b82352.svg" alt="img">
                        <span>{vaults[0].daily_emission}</span>
                    </p>
                </div>
                <div class="flex flex-row sm:flex-col gap-y-2 items-center sm:items-start justify-between w-full sm:w-auto">
                    <p class="text-[#98abca] text-sm">Total Staked</p>
                    <p class="text-sm sm:text-xl font-semibold sm:font-bold flex flex-row items-center gap-x-1">
                        <img src={vaults[0].img} alt="img">
                        <span>{vaults[0].total_staked}</span>
                    </p>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-4">
                <Button width="w-full" mode="blue" rounded="rounded-lg" customClass="font-semibold h-auto sm:h-[48px]" handler={(event) => { stakeModal_xvs(); }}>Stake</Button>
                <Button width="w-full" mode="blue-inverted" rounded="rounded-lg" customClass="font-semibold h-auto sm:h-[48px]" handler={(event) => { withdrawModal_xvs(); }}>Withdraw</Button>
            </div>
        </div>
    </Card>

    <Card customClass="!border-none !rounded-2xl">
        <div class="flex flex-col gap-y-6">
            <div class="flex flex-row items-center gap-x-2">
                <img src={vaults[1].img} alt="img">
                <p class="text-lg font-semibold">{vaults[1].token}</p>
            </div>
            
            <div class="space-y-4">
                <p class="text-[#98abca] text-sm">You are staking</p>
                <div class="flex flex-row items-center gap-x-2">
                    <img src={vaults[1].img} alt="img" class="w-10 h-10">
                    <p class="text-4xl font-semibold">{vaults[1].staked}</p>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-x-12">
                <div class="flex flex-row sm:flex-col gap-y-2 items-center sm:items-start justify-between w-full sm:w-auto">
                    <p class="text-[#98abca] text-sm">XVS Stake APR</p>
                    <p class="text-sm sm:text-xl font-semibold sm:font-bold">{vaults[1].apr}</p>
                </div>
                <div class="flex flex-row sm:flex-col gap-y-2 items-center sm:items-start justify-between w-full sm:w-auto">
                    <p class="text-[#98abca] text-sm">Daily Emission</p>
                    <p class="text-sm sm:text-xl font-semibold sm:font-bold flex flex-row items-center gap-x-1">
                        <img src="https://app.venus.io/assets/xvs-e7b82352.svg" alt="img">
                        <span>{vaults[1].daily_emission}</span>
                    </p>
                </div>
                <div class="flex flex-row sm:flex-col gap-y-2 items-center sm:items-start justify-between w-full sm:w-auto">
                    <p class="text-[#98abca] text-sm">Total Staked</p>
                    <p class="text-sm sm:text-xl font-semibold sm:font-bold flex flex-row items-center gap-x-1">
                        <img src={vaults[1].img} alt="img">
                        <span>{vaults[1].total_staked}</span>
                    </p>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-4">
                <Button width="w-full" mode="blue" rounded="rounded-lg" customClass="font-semibold h-auto sm:h-[48px]" handler={(event) => { stakeModal_vai(); }}>Stake</Button>
                <Button width="w-full" mode="blue-inverted" rounded="rounded-lg" customClass="font-semibold h-auto sm:h-[48px]" handler={(event) => { withdrawModal_vai(); }}>Withdraw</Button>
            </div>
        </div>
    </Card>

</div>


<Modal bind:this={stakeModal} title={modalTitle}>
    <div class="my-2">
        Stake Modal
    </div>
</Modal>

<Modal bind:this={withdrawModal} title={modalTitle}>
    <div class="my-2">
        Withdraw Modal
    </div>
</Modal>