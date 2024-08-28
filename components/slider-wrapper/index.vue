<script setup lang="ts">

const props = defineProps<{
    slides: number,
    widthToScroll?: number
    sectionId?: string
}>()

const sliderEle = ref<Element | null>(null)
const widthToScroll = ref<number>(448)
const scrollWidth = ref<number>(0)

const disabledRight = ref<boolean>(false)
const disabledLeft = ref<boolean>(true)

const onScrollLeft = () => {
    if (sliderEle && sliderEle.value) {
        const currScroll = sliderEle.value.scrollLeft
        const toScroll = currScroll - widthToScroll.value
        if (toScroll === 0) {
            disabledLeft.value = true
        }
        if (-widthToScroll.value < toScroll) {
            sliderEle.value.scrollLeft = toScroll;
            disabledRight.value = false
        }
    }
}

const onScrollRight = () => {
    if (sliderEle && sliderEle.value) {
        const currScroll = sliderEle.value.scrollLeft
        const toScroll = currScroll + widthToScroll.value
        if (toScroll >= scrollWidth.value - widthToScroll.value) {
            disabledRight.value = true
        }
        if (scrollWidth.value > toScroll) {
            disabledLeft.value = false
            sliderEle.value.scrollLeft = toScroll;
        }
    }
}

onMounted(() => {
    const { slides } = props
    if (props.widthToScroll) {
        widthToScroll.value = props.widthToScroll
    }
    scrollWidth.value = slides * widthToScroll.value
})

</script>
<template>
    <section :id="$props.sectionId || `slider-wrapper-section`">
        <div class="slider-wrapper">
            <h1 class="section-title">
                <slot name="title"></slot>
            </h1>
            <div class="buttons">
                <Button id="left-button" aria-label="left-button" class="btn-rounded btn-sm secondary"
                    @click="onScrollLeft" :disabled="disabledLeft">
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14L2 8L8 2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Button>
                <Button id="right-button" aria-label="right-button" class="btn btn-rounded btn-sm secondary"
                    @click="onScrollRight" :disabled="disabledRight">
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 14L8 8L2 2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Button>
            </div>
        </div>
        <div class="slider-wrap" ref="sliderEle">
            <slot></slot>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    // @apply pt-10 pb-24 md:py-16 mx-auto lg:pl-36 md:pl-12 full:max-w-[1400px] pl-[34px] relative;
    @apply py-16 pb-24 mx-auto 2xl:max-w-[1400px] pl-8 md:pl-12 relative;

    .slider-wrapper {
        @apply flex justify-between max-w-[1312px] pr-[34px] lg:pr-0;
    }

    .slider-wrap {
        @apply mt-6 md:mt-10 flex gap-[14px] md:gap-8 overflow-x-scroll md:py-3 scroll-smooth;
    }

    .buttons {
        @apply flex gap-2 absolute md:relative bottom-8 md:bottom-0 justify-center left-0 right-0 lg:pr-[34px] 2xl:pr-0;

        .btn.secondary {
            @apply h-[40px] w-[40px] border border-black-transparent-100 p-0;

            svg path {
                @apply stroke-black-transparent-400;
            }

            &:disabled {
                @apply bg-black-transparent-50 border-none;

                svg path {
                    @apply opacity-40;
                }
            }

            &:disabled:hover,
            &:disabled:focus {
                @apply drop-shadow-none;
            }
        }
    }
}
</style>