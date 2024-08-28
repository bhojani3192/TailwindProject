<template>
    <nav v-if="showNav">
        <div class="container">
            <div class="links-wrap">
                <NuxtLink v-for="(item, index) in links" :key="index" :to="item.path" active-class="active">
                    {{ item.name }}
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
const showNav = ref<boolean>(false)
const handleScroll = (event: any) => {
    if (window.scrollY > 200) {
        showNav.value = true
    } else {
        showNav.value = false
    }
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
})

const links = [
    {
        path: '#company-about',
        name: 'About',
    }, {
        path: '#loan-statistics',
        name: 'Loan Statistics',
    }, {
        path: '#investor-statistics',
        name: 'Investor Statistics',
    }, {
        path: '#company-news',
        name: 'Latest News',
    }, {
        path: '#legalAndTransparency',
        name: 'Legal and Transparency',
    }, {
        path: '#company-contact-us',
        name: 'Contact Us',
    }, {
        path: '#company-faq',
        name: 'F.A.Q',
    },
]
</script>

<style lang="scss" scoped>
nav {
    @apply overflow-x-auto bg-brand-solid-600 h-16 fixed top-[72px] md:top-20 w-full z-50 flex justify-center items-center;

    .links-wrap {
        @apply grid grid-flow-col gap-6 justify-center w-[874px] md:w-full;

        a {
            @apply text-white-transparent-400;
        }

        a.active {
            @apply text-white-500 ;
        }
    }
}
</style>