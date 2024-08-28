<script setup lang="ts">
import ExportIcon from "~/assets/icons/dashboard/export_icon.vue";
</script>
<template>
    <div class="md:flex  md:flex-wrap lg:flex-nowrap  justify-between items-center">
        <h1 class="text-base font-semibold">
            Last transactions
        </h1>

        <div class="options">
            <select name="" id=""></select>
            <select name="" id=""></select>
            <select name="" id=""></select>

            <Button class="secondary">
                <ExportIcon />
                Export
            </Button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.options {
    @apply flex justify-between items-center md:mt-4 lg:mt-0 md:gap-3 lg:gap-6 lg:w-[80%] 2xl:w-[];

    select {
        @apply h-[48px] md:w-[150px] lg:w-[150px] 2xl:w-[192px] border border-black-transparent-200 rounded-lg;
    }

    .btn.secondary {
        svg {
            @apply mr-3;
        }

        @apply bg-brand-transparent-100 w-[140px] lg:w-[200px] h-[48px] lg:ml-2;
    }
}
</style>