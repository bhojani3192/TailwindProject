<script setup lang="ts">
const props = defineProps<{
    hideBottom?: boolean
}>()
</script>

<template>
    <form>
        <div class="w-full md:text-center sm:text-2xl font-bold mb-4 md:mb-6">
            <slot name="title"></slot>
        </div>
        <div class="w-full rounded-2xl border border-black-transparent-200 min-h-[100px] overflow-hidden">
            <div class="md:py-4 md:px-10 lg:px-28 px-[14px] py-6">
                <slot></slot>
            </div>
            <div v-if="!props.hideBottom" class="bg-black-transparent-50 py-4 sm:py-8 px-[14px] md:py-12 md:px-10 lg:px-28">
                <slot name="bottom">
                </slot>
            </div>
        </div>
    </form>
</template>
