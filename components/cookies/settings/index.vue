<script setup lang="ts">
import CloseIcon from '~/assets/icons/header/close_icon.vue';
defineProps<{
    onClose: () => void
}>()
</script>
<template>
    <div class="cookie-settings">
        <div class="dialog-title">
            <div>
                <h1>
                    Privacy Overview
                </h1>
            </div>
            <Button class="effects" @click="$props.onClose">
                <CloseIcon />
            </Button>
        </div>
        <div class="dialog-panel">
            <p>This website uses cookies to improve your experience while you navigate through the website. Out of these,
                the cookies that are categorized as necessary are stored on your browser as they are essential for the
                working of basic functionalities of the website. We also use third-party cookies that help us analyze and
                understand how you use this website. These cookies will be stored in your browser only with your consent.
                You also have the option to opt-out of these cookies. But opting out of some of these cookies may affect
                your browsing experience.</p>
            <div class="settings">
                <CookiesSettingsRow label="Mandatory" />
                <CookiesSettingsRow label="Functional" :toggle="true" :default-enable="true" />
                <CookiesSettingsRow label="Analytics" :toggle="true" />
                <CookiesSettingsRow label="Advertising" :toggle="true" />
            </div>
        </div>

        <div class="dialog-footer">
            <Button class="primary" @click="$props.onClose">{{ `SAVE & ACCEPT` }}</Button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.cookie-settings {
    @apply bg-white-500 min-h-[621px] lg:w-[864px] rounded-[32px] drop-shadow-lg py-8 px-10;

    .dialog-title {
        @apply flex justify-between items-center;

        h1 {
            @apply text-xl font-bold;
        }

        .btn {
            @apply h-10 w-10 bg-white-500 p-0 border border-black-transparent-100 rounded-full;
        }
    }

    p {
        @apply text-sm font-normal text-justify;
    }

    .dialog-panel {
        @apply my-6;

        .settings {
            @apply mt-6 gap-2 sm:gap-3 grid grid-cols-1 max-h-[428px] overflow-scroll;
        }
    }

    .dialog-footer {
        @apply flex justify-end mt-12 md:mt-0;

        .btn {
            @apply w-full md:w-[200px];
        }
    }
}
</style>