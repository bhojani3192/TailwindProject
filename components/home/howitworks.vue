<script lang="ts" setup>
import CloudquestionIcon from '~/assets/icons/home/cloudquestion_icon.vue';
import depositFunds from "~/assets/images/home/deposit-funds.svg"
import collectYourEarnings from "~/assets/images/home/collect-your-earnings.svg"
import investInstantly from "~/assets/images/home/invest-instantly.svg"
</script>
<template>
    <section id="home_works">
        <div class="container md:py-16 py-10">
            <div class="section-title flex items-center">
                <CloudquestionIcon />
                <h2 class="common-subtitle"><span>How</span> it works</h2>
            </div>

            <div class="flex flex-wrap lg:flex-nowrap md:gap-8 items-start mt-6 md:mt-10">

                <div class="w-full md:w-[47%] lg:w-1/3">
                    <img :src="depositFunds" alt="">
                    <div class="info">
                        <p class="description font-semibold">Deposit your funds </p>
                        <p class="description font-normal mt-4 mb-6">Safely transfer to and store your traditional or your
                            crypto currencies on your dedicated, insured
                            Bitguana wallet.</p>
                    </div>
                </div>
                <div class="w-full md:w-[47%] lg:w-1/3">
                    <!-- <div class="card work-card"> -->
                    <img :src="investInstantly" alt="investInstantly">
                    <!-- </div> -->
                    <div class="info">
                        <p class="description font-semibold">Deposit your funds </p>
                        <p class="description font-normal mt-4 mb-6">Safely transfer to and store your traditional or your
                            crypto currencies on your dedicated, insured
                            Bitguana wallet.</p>
                    </div>
                </div>

                <div class="w-full md:w-[47%] lg:w-1/3">
                    <img :src="collectYourEarnings" alt="collectYourEarnings">
                    <div class="info">
                        <p class="description font-semibold">Deposit your funds </p>
                        <p class="description font-normal mt-4 mb-6">Safely transfer to and store your traditional or your
                            crypto currencies on your dedicated, insured
                            Bitguana wallet.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    .info {
        @apply mt-4 md:mt-8;
    }
}
</style>