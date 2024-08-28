<script setup lang="ts">
const isAccepted = useCookie('isAccepted')
const cookieSettingsDialog = ref<boolean>(false)

const onCookiesAccept = () => {
    isAccepted.value = 'true';
}

const onOpenCookieSettings = () => {
    cookieSettingsDialog.value = true
}

const onCloseCookieSettings = () => {
    cookieSettingsDialog.value = false
}

</script>
<template>
    <div class="cookies_wrap" v-if="!isAccepted">
        <div class="container">
            <div class="cookies_div">
                <div class="cookies_info">
                    <h1>We value your privacy</h1>
                    <p>We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze
                        our traffic. By clicking "Accept", you consent to our use of cookies.
                        <NuxtLink>Cookie Policy</NuxtLink>
                    </p>
                </div>
                <div class="flex items-center gap-4">
                    <Button class="effects cookie" @click="onOpenCookieSettings">Cookie Settings</Button>
                    <Button class="primary" @click="onCookiesAccept">Accept</Button>
                </div>
            </div>
        </div>
    </div>
    <Dialog :show="cookieSettingsDialog" :on-close="onCloseCookieSettings">
        <CookiesSettings :on-close="onCloseCookieSettings" />
    </Dialog>
</template>
<style lang="scss" scoped>
.cookies_wrap {
    @apply sticky bottom-0 md:bottom-8 z-50;
    .container{
        @apply px-0 md:px-[34px] w-full 2xl:w-[1320px] max-w-full 2xl:max-w-[1320px]
    }

    .cookies_div {
        @apply lg:h-32 w-full bg-white-500 py-7 px-[34px]  md:px-12  rounded-tl-3xl rounded-tr-3xl md:rounded-3xl drop-shadow-lg lg:gap-8 xl:gap-0;
        @apply lg:flex justify-between items-center md:overflow-hidden;

        button.btn {
            @apply w-[136px] md:w-[180px] h-[48px] p-0 rounded-[40px]  text-sm md:text-base ; 
        }

        .btn.cookie {
            @apply bg-black-solid-100 text-black-transparent-400;
        }

        .cookies_info {
            @apply w-full lg:w-2/3 max-w-[755px];

            h1 {
                @apply text-base font-extrabold;
            }

            p {
                @apply text-xs sm:text-sm font-medium lg:mt-2 mt-[34px] mb-10 lg:mb-0 ;
            }

            a{
                @apply text-brand-solid-500 underline font-medium
            }
        }
    }

}
</style>