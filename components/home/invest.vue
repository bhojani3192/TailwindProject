<script lang="ts" setup>
import RightarrowIcon from '~/assets/icons/rightarrow_icon.vue';
import PlantIcon from '~/assets/icons/home/plant_icon.vue';
import invest from "~/assets/images/home/invest.png";
</script>

<template>
    <section id="home_invest">
        <div class="container py-10 md:py-16">
            <div class="section-title flex items-center">
                <PlantIcon />
                <h2 class="common-subtitle"><span>Invest</span> with confidence</h2>
            </div>

            <div class="flex flex-wrap md:flex-nowrap gap-6 md:gap-8 items-center mt-6 md:mt-10">

                <div class="md:w-1/3 w-full">
                    <div class="">
                        <img :src="invest" alt="invest-img">
                    </div>
                </div>

                <div class="md:w-2/3 w-full">
                    <p class="description font-semibold">Investments in loans can be an attractive addition to any
                        portfolio.
                    </p>
                    <p class="description font-normal mt-4 mb-6">Investing in consumer and small business credit can
                        offer Bitguana is an authorized investment firm under MiFID. Your assets are held separately
                        from Bitguana's assets. Investors are also protected up to €20 000 under the investor
                        compensation scheme.</p>
                    <NuxtLink to="/" class="link">
                        Discover investing with Bitguana
                        <RightarrowIcon />
                    </NuxtLink>
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    @apply bg-black-solid-50;
}
</style>