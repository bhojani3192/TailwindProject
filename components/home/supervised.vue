<template>
    <section id="home-supervised">
        <div class="container py-10 md:py-16">
            <div class="section-title flex items-center">
                <ShieldIcon />
                <h2 class="common-subtitle"><span>Supervised</span> by the Financial Supervisory Authority of Norway
                </h2>
            </div>

            <div class="flex flex-wrap md:flex-nowrap gap-6 md:gap-8 items-center mt-6 md:mt-10">
                <div class="md:w-1/3 w-full">
                    <div class="">
                        <img :src="SupervisedImg" alt="">
                    </div>
                </div>
                <div class="md:w-2/3 w-full">
                    <NorwayFlag />
                    <p class="description font-normal mt-4 mb-6">Bitguana is registered with Finanstilsynet as a loan
                        intermediary between business borrowers and lenders,
                        under Låneformidlingsloven § 2-4.</p>
                    <NuxtLink to="/" class="link">
                        See More
                        <RightarrowIcon />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import ShieldIcon from '~/assets/icons/home/shield_icon.vue';
import RightarrowIcon from '~/assets/icons/rightarrow_icon.vue';
import SupervisedImg from '~/assets/images/home/supervised.png';
import NorwayFlag from '~/assets/icons/flags/norway.vue';
</script>

<style lang="scss" scoped>
section {
    @apply bg-brand-solid-600;

    .section-title svg{
        @apply min-w-12
    }

    .common-subtitle,
    .description {
        @apply text-white-500;
    }
}
</style>