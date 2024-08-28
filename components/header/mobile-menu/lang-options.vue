<script setup lang="ts">
import CloseIcon from '~/assets/icons/header/close_icon.vue';
const props = defineProps<{ onClose: () => void }>()

const onCloseMenu = () => {
    props.onClose()
}
</script>
<template>
    <div :class="`lang-choice-box-wrap block lg:hidden`" id="backdrop">
        <div class="lang-choice-box">
            <div class="flex justify-between items-center">
                <h1 class="section-title">Choose Language</h1>
                <Button class="secondary" @click="onCloseMenu">
                    <CloseIcon />
                </Button>
            </div>

            <div class="lang-opt">
                <div class="opt active">
                    ENGLISH
                </div>
                <div class="opt">
                    Español
                </div>
                <div class="opt">
                    ქართული
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.lang-choice-box-wrap {
    @apply fixed bg-black-transparent-300 h-dvh w-dvw top-0 left-0 z-50;

    .lang-choice-box {
        @apply fixed bottom-0 bg-white-500 py-6 px-9 w-full rounded-t-3xl;
    }

    button.btn.secondary {
        @apply drop-shadow-lg rounded-full p-0 h-10 w-10;
    }

    .lang-opt {
        @apply py-6 gap-3 flex flex-col items-center;

        .opt {
            @apply w-full max-w-[292px] h-12 border border-black-transparent-200 flex items-center justify-center text-sm font-semibold drop-shadow-lg rounded-lg;
        }

        .opt.active {
            @apply bg-brand-transparent-100 border-brand-transparent-100 text-brand-solid-500 font-bold;
        }
    }
}
</style>