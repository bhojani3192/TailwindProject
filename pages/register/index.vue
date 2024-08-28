<script setup lang="ts">
import InvestorIcon from '~/assets/icons/investor_icon.vue';
import BorrowerIcon from '~/assets/icons/borrower_icon.vue';

useHead({
    title: 'Bitguana | Register',
    meta: [
        { name: 'description', content: 'Get more for your Crypto currencies by investing them in the real economy.' }
    ],
})
</script>

<template>
    <div class="w-full min-h-[600px] bg-black-solid-50 py-10 md:py-16 px-[34px] md:px-0">
        <div class="container bg-black-transparent-50 px-6 md:px-0 pt-6 pb-10 md:p-10 md:pb-24 rounded-3xl flex justify-center">
            <div class="flex flex-col justify-center md:items-center">
                <h1 class=" sm:text-xl mb-4 text-left font-bold">Register Now</h1>
                <p class="text-sm sm:text-base text-black-transparent-400">Please choose the correct profile matching your intentions
                </p>

                <div class="card-wrapper">
                    <NuxtLink to="/register/investor" class="card">
                        <div class="icon">
                            <InvestorIcon />
                        </div>
                        Investor
                    </NuxtLink>
                    <NuxtLink to="/register/borrower/loan-applicant" class="card">
                        <div class="icon">
                            <BorrowerIcon />
                        </div>
                        Borrower
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container{
@apply px-6 pt-6 pb-10 md:p-10 md:pb-24;
}
.card-wrapper {
    @apply grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-11;

    .card {
        @apply w-full h-[180px]  md:w-[256px] md:h-[200px] bg-white rounded-3xl flex flex-col md:justify-center items-center p-6 md:p-0;
        @apply font-bold text-base mx-auto; 

        .icon {
            @apply h-[80px] w-[80px] flex justify-center items-center rounded-full bg-brand-solid-100 mb-4 md:mb-5;
        }

        &:hover {
            @apply text-brand-solid-500;
        }
    }
}
</style>