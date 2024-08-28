<script lang="ts" setup>
const isGridView = ref<boolean>(true)
</script>
<template>
    <section id="invest-all-projects invest">
        <div class="container md:py-16 py-10">
            <ProjectTopBar v-model="isGridView" />

            <InvestAllProjectsList v-if="!isGridView" />
            <InvestAllProjectsGrid v-if="isGridView" />

            <Pagination />
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    @apply bg-black-solid-50;
}
</style>