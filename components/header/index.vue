<script setup lang="ts">
import Logo from '~/assets/images/logo.vue';
import WorldIcon from "~/assets/icons/world_icon.vue";
import UpRightArrowIcon from '~/assets/icons/uprightarrow_icon.vue';
import MenuIcon from '~/assets/icons/header/bars_icon.vue';
import UserIcon from '~/assets/icons/header/user_icon.vue';

const bg = ref('bg')
const handleScroll = (event: any) => {
    if (window.scrollY > 80) {
        bg.value = 'bg-white'
    } else {
        bg.value = 'bg-[transparent]'
    }
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
})

const showMobileMenu = ref(false)

const openMobileMenu = () => {
    showMobileMenu.value = true
}

const closeMobileMenu = () => {
    showMobileMenu.value = false
}
const { user, loggedIn } = useUserSession()
</script>

<template lang="html">
    <div :class="`fixed top-0 w-full z-20 transition-colors ` + bg">
        <header class="container py-4 flex justify-between items-center lg:px-0">
            <div class="logo">
                <NuxtLink to="/" aria-label="footer homepage link">
                    <Logo />
                </NuxtLink>
            </div>
            <div class="nav-menu hidden lg:block">
                <ul class="flex gap-x-12">
                    <li>
                        <NuxtLink to="/borrow" :active-class="`active`">BORROW
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/invest" :active-class="`active`">INVEST
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/careers" :active-class="`active`">CAREERS
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/company" :active-class="`active`">COMPANY
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="mobile-menu">
                <Button class="secondary menu-btn" @click="openMobileMenu">
                    <MenuIcon />
                    MENU
                </button>
            </div>
            <div class="header-btn lg:flex items-center hidden ">
                <div class="language_dropdown flex items-center mr-8">
                    <WorldIcon />
                    <select aria-label="language_box" name="language" id="language_box"
                        class="bg-[transparent] w-[48px] h-[24px] text-transparent-400 font-bold outline-0">
                        <option value="">EN</option>
                        <option value="">ES</option>
                        <option value="">UA</option>
                    </select>
                </div>


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
            </div>
        </header>
    </div>

    <HeaderMobileMenu :on-close="closeMobileMenu" v-if="showMobileMenu" />
</template>

<style lang="scss" scoped>
.btn-ico {
    @apply h-[32px] w-[32px] flex justify-center items-center rounded-full;
    background: linear-gradient(87deg, #00AC99 0%, #01DBC3 100%);
}
</style>