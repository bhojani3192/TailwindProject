<script lang="ts" setup>
import WealthIcon from '~/assets/icons/home/wealth_icon.vue';
import RightarrowIcon from '~/assets/icons/rightarrow_icon.vue';
import wealth from "~/assets/images/home/wealth.svg";
</script>

<template>
    <section class="home_wealth">
        <div class="container py-10 md:py-16">
            <div class="section-title flex items-center">
                <WealthIcon />
                <h2 class="common-subtitle"><span>Build</span> your Wealth</h2>
            </div>

            <div class="flex flex-wrap md:flex-nowrap gap-6 md:gap-8 items-center mt-6 md:mt-10">
                <div class="md:w-2/3 w-full">
                    <p class="description font-semibold">Investments in loans can be an attractive addition to any
                        portfolio.
                    </p>
                    <p class="description font-normal mt-4 mb-6">Investing in consumer and small business credit can
                        offer
                        attractive
                        long-term returns compared to
                        bank
                        deposits as well as popular international indexes for stocks, bonds, and real estate.⁵ Similar
                        to
                        other forms
                        of investing, risks apply.</p>
                    <NuxtLink to="" class="link">
                        See statistics
                        <RightarrowIcon />
                    </NuxtLink>
                </div>
                <div class="md:w-1/3 w-full">
                    <div class="">
                        <img :src="wealth" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>