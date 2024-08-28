<template>
    <HeaderDashboard />
    <section class="bg-black-solid-50 mt-20 pt-10 lg:pb-20">
        <div class="container lg:flex items-baseline justify-between md:gap-8 2xl:gap-[unset]">
            <UserProfileProfileMenu />
            <slot></slot>
        </div>
        <div ref="logoutBtn" :class="{ 'sticky': isSticky }" class="flex justify-center items-center sm:py-10 xs:py-10 lg:hidden xs:w-full sm:w-full">
            <Button class="logout-btn" @click="doLogout">Log Out</Button>
        </div>
    </section>
    <Footer />
</template>
<style lang="scss" scoped>
.logout-btn {
   @apply bg-black-solid-400 rounded-2xl text-white xs:w-[350px] sm:w-[350px] lg:w-48 h-14 font-black text-base;
}
.sticky {
    @apply fixed lg:bottom-0 xs:bottom-0 z-30 xs:bg-white sm:bg-white shadow-[rgba(0,0,15,0.5)_0px_5px_5px_5px];
}
</style>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const { clear } = useUserSession();
const isSticky = ref(false);

const doLogout = async () => {
    await clear();
    navigateTo('/');
};

const handleScroll = () => {
    const footer = document.querySelector('footer');
    if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        isSticky.value = footerTop >= 775;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
