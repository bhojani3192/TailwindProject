<script setup lang="ts">
import bitguanaCoinIllustration from "~/assets/images/home/bitguana_coin_illustration.png"
</script>
<template>
    <section id="home_moneytowork">
        <div class="container">
            <div class="flex flex-wrap items-center relative">
                <div class="md:w-1/3 w-full">
                    <img :src="bitguanaCoinIllustration" alt="">
                    <div class="img-wrap"></div>
                </div>
                <div class="md:w-2/3 w-full mt-12 md:mt-0 z-[11]">
                    <h1 class="section-title">Put your money to work</h1>
                    <p class="description">Annual investment returns delivered since May 20221. Higher than traditional
                        asset classes.
                        You continue to earn interest while the invested loan is overdue.
                    </p>
                    <Button class="secondary">Start Investing</Button>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    @apply bg-brand-gradient py-10 md:py-14 overflow-hidden;

    img{
        @apply mx-auto md:mx-[unset]
    }
    .img-wrap {
        @apply w-[292px] h-[292px] md:h-[400px] md:w-[400px] absolute rounded-full bg-black-transparent-100 left-0 right-0 top-[-20px] mx-auto md:mx-[unset] md:-top-[75px] md:-left-[75px] z-10;
    }

    .description {
        @apply mt-6 mb-8 max-w-[716px];
    }

    .btn.secondary {
        @apply max-w-[200px] w-[200px];
    }
}
</style>