<script setup lang="ts">
const { clear, user, loggedIn } = useUserSession()
const doLogout = async () => {
    await clear()
    navigateTo('/')
}
</script>
<template>
    <section class="">
        <div class="lg:border lg:border-black-solid-200 lg:rounded-3xl lg:drop-shadow-md bg-black-solid-50 w-[304px] lg:h-[361px] sm:pb-10 xs:pb-10">
            <div class="lg:p-10">
                <h1 class="font-bold text-xl">
                    {{ loggedIn && user ? user.name : 'User Name' }}
                </h1>
                <p class="font-normal text-base text-black-solid-400">My account</p>
                <div class="xs:overflow-auto sm:overflow-auto md:overflow-visible lg:overflow-visible xs:w-[350px] sm:w-[350px]">                    
                    <div class="profile-menu pt-5">
                        <ul class="flex lg:flex-col lg:gap-4 xs:gap-6 sm:gap-6 font-bold text-sm">
                            <li >
                                <NuxtLink to="personal-data" :active-class="`active`">
                                    Personal Data
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="identification" :active-class="`active`">
                                    Identification
                                </NuxtLink>
    
                            </li>
                            <li>
                                <NuxtLink to="questionnaire" :active-class="`active`">
                                    Questionnaire
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="agreements" :active-class="`active`">
                                    Agreements
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mt-7 lg:block xs:hidden sm:hidden">
                    <Button class="logout-btn" @click="doLogout">Log Out</Button>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.logout-btn {
   @apply bg-black-solid-400 rounded-2xl text-white w-48 h-14 font-black text-base;
}
.profile-menu {
    a {
        @apply font-bold text-black-solid-500 flex items-center xs:w-28 sm:w-28;
    }

    a.active {
        @apply text-brand-solid-500 relative;

        &::before {
            @apply lg:absolute lg:content-[''] lg:w-[7px] lg:h-[30px] lg:bg-brand-gradient lg:-left-10 lg:rounded-r-lg;
        }
    }
}
</style>