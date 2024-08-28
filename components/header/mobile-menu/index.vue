<script setup lang="ts">
import Logo from '~/assets/images/logo.vue';
import CloseIcon from '~/assets/icons/header/close_icon.vue';
import UpRightArrowIcon from '~/assets/icons/uprightarrow_icon.vue';
import WorldIcon from "~/assets/icons/world_icon.vue";
import DownarrowIcon from '~/assets/icons/downarrow_icon.vue';
import UserIcon from '~/assets/icons/header/user_icon.vue';
const { user, loggedIn } = useUserSession()

const router = useRouter()

router.beforeEach(async (to, from) => {
    onCloseMenu()
})

const props = defineProps<{ onClose: () => void }>()

const onCloseMenu = () => {
    props.onClose()
}

const showLangOptions = ref(false)

const openLangOptions = () => {
    showLangOptions.value = true
}

const closeLangOptions = () => {
    showLangOptions.value = false
}
</script>

<template>
    <div class="mobile-menu-wrap block">
        <div class="container py-4 flex justify-between items-center lg:px-0">
            <div class="logo">
                <NuxtLink to="/">
                    <Logo />
                </NuxtLink>
            </div>

            <div class="mobile-menu">
                <Button class="secondary menu-btn" @click="onCloseMenu">
                    <CloseIcon />
                    Close
                </Button>
            </div>
        </div>


        <div class="mobile-nav-menu">
            <HeaderMobileMenuLoggedInLinks v-if="loggedIn" />
            <HeaderMobileMenuPublicLink v-else />
        </div>

        <div class="sign-in-wrap">

            <Button v-if="loggedIn" class="h-[48px] secondary btn-rounded" @click="navigateTo('/dashboard')">
                {{ loggedIn && user ? user.name : 'User Name' }}
                <div class="btn-ico inline-block ml-[13px]">
                    <UserIcon />
                </div>
            </Button>

            <Button v-else class="h-[48px] secondary btn-rounded" @click="navigateTo('/login')">
                SIGN IN
                <div class="btn-ico inline-block ml-[13px]">
                    <UpRightArrowIcon />
                </div>
            </Button>

            <div class="lang-box-wrap" @click="openLangOptions">
                <div class="flex items-center gap-2">
                    <WorldIcon />
                    <span>EN</span>
                    <DownarrowIcon />
                </div>
            </div>
        </div>
    </div>
    <HeaderMobileMenuLangOptions v-if="showLangOptions" :on-close="closeLangOptions" />
</template>

<style lang="scss" scoped>
.mobile-menu-wrap {
    @apply lg:hidden fixed top-0 left-0 h-dvh w-dvw bg-white-500 z-40;

    .mobile-nav-menu {
        @apply mt-14;

        ul {
            li {
                @apply h-16 w-full flex items-center justify-center;

                a {
                    @apply text-xl font-black text-black-solid-500;
                }
            }
        }
    }

    .sign-in-wrap {
        @apply flex justify-center items-center flex-col mt-14;

        .btn {
            @apply w-[292px] drop-shadow-lg;
        }

        .btn-ico {
            @apply h-[32px] w-[32px] flex justify-center items-center rounded-full bg-brand-gradient;
        }
    }

    .lang-box-wrap {
        @apply mt-10;
    }
}
</style>