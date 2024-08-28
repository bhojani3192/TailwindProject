<script setup lang="ts">
interface Props {
    previousPath: string
    nextPath: string
}
const props = defineProps<Props>();
</script>
<template>
    <div class="flex items-center  md:justify-center gap-4 form-btn">

        <Button class="secondary  w-[84px] md:min-w-[300px]" @click="navigateTo(props.previousPath)">
            GO BACK
            <svg class="md:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M15 20L7 12L15 4" stroke="#364140" stroke-width="3" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>

        </Button>

        <Button class="primary w-full md:w-[unset] md:min-w-[300px]" @click="navigateTo(props.nextPath)">
            CONTINUE
        </Button>

    </div>
</template>
<style lang="scss" scoped>
.btn.secondary {
    @apply bg-black-transparent-100 text-[0] md:text-base py-2.5 md:py-[17px] text-black-solid-500
}
</style>