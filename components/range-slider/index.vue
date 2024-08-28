<script lang="ts" setup>
const props = defineProps<{
    id?: string
    max?: string
    min?: string
    step?: string
    change?: (value: string) => void
}>()

const { change, min, max } = props
const progress = ref<string>('0');

const onRangeProgress = (e: any) => {
    if (change) {
        change(e.target.value)
    }
    let value = e.target.value
    if (max) {
        const x = (parseInt(e.target.value) / parseInt(max)) * 100
        value = (x).toString()
    }
    progress.value = value
}
</script>
<template>
    <div class="slider-wraper">
        <input type="range" name="" :id="$props.id" @change="onRangeProgress" value="0" class="slider"
            :aria-label="`${$props.id}_slider`" :max="$props.max" :min="$props.min" :step="$props.step">
        <div :class="'progress'" :style="'width:' + progress + '%;'" />
    </div>
</template>
<style lang="scss" scoped>
.slider-wraper {
    @apply relative;

    .slider {
        @apply appearance-none w-full h-[12px] rounded-md bg-black-transparent-100 outline-none opacity-100 z-20 relative;

        &::-webkit-slider-thumb {
            @apply w-[24px] h-[32px] bg-white-500 opacity-100 border-2 border-solid border-brand-solid-500 cursor-pointer appearance-none rounded-2xl;
        }
    }

    .progress {
        @apply max-h-[12px] min-h-[12px] bg-brand-gradient rounded-md absolute rounded-e-none top-[6px] -z-10;
    }
}
</style>