
<script lang="ts" setup>
import ListIcon from '~/assets/icons/list_icon.vue'
import GirdIcon from '~/assets/icons/grid_icon.vue'
const isGridView = ref<boolean>(true)

const onViewChange = (value: boolean) => {
    isGridView.value = value
}

</script>
<template>
    <section id="invest-all-projects">
        <div class="container md:py-16 py-10">
             <ProjectTopBar v-model="isGridView" />
 <!--
            <div class="flex justify-between items-center">
                <div class="w-1/2 flex items-center gap-10">
                    <h1 class="section-title">All Projects</h1>
                    <div class="btn-tabs">
                        <Button class="btn effects primary">Real Estate Loans</Button>
                        <Button class="btn effects">Crypto Loans</Button>
                    </div>
                </div>

                <div class="w-1/2 flex items-center justify-end">
                    <div class="view-btn">
                        <Button :class="`btn effects ${isGridView ? '' : ` active`}`" @click="onViewChange(false)">
                            <ListIcon :class="isGridView ? `` : `brand`" />
                            List View
                        </Button>
                        <Button :class="`btn effects ${isGridView ? ` active` : ``}`" @click="onViewChange(true)">
                            <GirdIcon :class="isGridView ? ` brand` : ``" />
                            Grid View
                        </Button>
                    </div>
                </div>
            </div>
    -->
            <DashboardPortfolioAllProjectsList v-if="!isGridView" />
            <DashboardPortfolioAllProjectsGrid v-if="isGridView" />

            <Pagination />
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    @apply bg-black-solid-50;

    .view-btn {
        @apply flex gap-2;

        .btn {
            @apply bg-black-transparent-50 rounded-full text-xs font-medium w-[128px] px-0 border-none;

            svg {
                @apply mr-3;
            }
        }

        .btn.active {
            @apply bg-brand-transparent-100 text-brand-solid-500;

            svg path {
                @apply fill-brand-solid-500;
            }
        }
    }
}
</style>