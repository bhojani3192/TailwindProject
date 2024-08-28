<template>
    <div class="flex justify-center lg:justify-between items-center flex-wrap lg:flex-nowrap gap-y-4 lg:gap-0">
        <div class=" w-1/2  lg:w-[70%] 2xl:w-1/2  flex items-center md:gap-10">
            <h1 class="section-title">All Projects</h1>

            <div class="btn-tabs hidden lg:flex">
                <Button class="btn effects primary">Real Estate Loans</Button>
                <Button class="btn effects">Crypto Loans</Button>
            </div>
        </div>

        <div class="w-1/2  lg:w-[30%] 2xl:w-1/2    flex items-center justify-end">
            <div class="view-btn">
                <Button :class="`btn effects ${viewModel ? '' : ` active`}`" @click="onViewChange(false)">
                    <ListIcon :class="viewModel ? `` : `brand`" />
                    List View
                </Button>
                <Button :class="`btn effects ${viewModel ? ` active` : ``}`" @click="onViewChange(true)">
                    <GirdIcon :class="viewModel ? ` brand` : ``" />
                    Grid View
                </Button>
            </div>
        </div>
        <div class="btn-tabs  lg:hidden">
            <Button class="btn effects primary">Real Estate Loans</Button>
            <Button class="btn effects">Crypto Loans</Button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ListIcon from '~/assets/icons/list_icon.vue'
import GirdIcon from '~/assets/icons/grid_icon.vue'

const viewModel = defineModel()

const projectViewState = useCookie<'gird' | 'list'>('projectViewState')

const onViewChange = (value: boolean) => {
    viewModel.value = value
    projectViewState.value = value ? 'gird' : 'list'
}

onMounted(() => {
    if (projectViewState.value === 'list') {
        viewModel.value = false;
    }
})

</script>

<style lang="scss" scoped>
.view-btn {
    @apply flex gap-2;

    .btn {
        @apply bg-black-transparent-50 rounded-full text-[0] w-12 h-12 md:text-xs font-medium md:w-[128px] md:h-[unset] justify-center px-0 border-none;

        svg {
            @apply md:mr-3;
        }
    }

    .btn.active {
        @apply bg-brand-transparent-100 text-brand-solid-500;

        svg path {
            @apply fill-brand-solid-500;
        }
    }
}
</style>