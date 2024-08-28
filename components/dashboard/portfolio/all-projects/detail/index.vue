<template>
    <section class="">
        <div class="pb-12">
            <div class="bg-black-solid-50 py-6">
                <div class="container">
                    <div class="flex items-center pb-4">
                        <button class="scrollto-top pt-4">
                            <BackArrowIcon />
                        </button>
                        <div class="title">
                            <h1 class="text-xl font-bold">Luxury Residential Complex In The Centre Of Tbilisi</h1>
                            <p class="text-black-solid-400 font-medium text-sm">PUB-RED-0005</p>
                        </div>
                    </div>
                    <div class="lg:flex xs:block">
                        <DashboardPortfolioAllProjectsDetailTopbarLoanDetails />
                        <DashboardPortfolioAllProjectsDetailTopbarInvestestmentBreak />
                        <DashboardPortfolioAllProjectsDetailTopbarExpectedInterest />
                    </div>
                </div>
            </div>
            <div class="container mb-10">
                <DashboardPortfolioAllProjectsDetailPaymentSchedule />
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    h1 {
        @apply text-black-solid-500 lg:text-[25px] xs:text-[20px] font-bold lg:leading-10;
    }
    .scrollto-top {
        @apply xs:p-4 h-[52px] lg:p-0 lg:w-10 lg:h-10  rounded-full shadow-shadow-btn border-black-transparent-150 mr-4 md:mr-8 bg-white-500
    }
    
    .scrollto-top svg {
        @apply mx-auto
    }
</style>
<script>
    import BackArrowIcon from '@/assets/icons/backarrow_icon.vue';
    export default {
        name: 'InvestHeader',
        components: {BackArrowIcon}
    }
</script>