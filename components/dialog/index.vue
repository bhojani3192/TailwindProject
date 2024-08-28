<script setup lang="ts">
const props = defineProps<{
    show: boolean
    onClose: () => void
}>()
</script>
<template>
    <div class="dialog-wrap" v-if="$props.show">
        <div class="backdrop" @click="$props.onClose"></div>
        <div class="dialog">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.dialog-wrap {
    @apply fixed top-0 left-0 w-full h-dvh z-50;
    @apply flex justify-center items-center;

    .backdrop {
        @apply fixed top-0 left-0 bg-black-transparent-300 w-full h-dvh z-40;
    }

    .dialog {
        @apply z-[60] fixed bottom-0 md:relative md:bottom-[unset] w-full md:w-auto;
    }
}
</style>