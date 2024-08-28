
<script setup lang="ts">
import illustration from "~/assets/images/invest/investing-illustration.png"
</script>
<template>
    <section id="invest_intro">
        <div class="container">
            <div class="flex flex-wrap md:flex-nowrap justify-between md:gap-8 items-center flex-col-reverse md:flex-row">
                <div class="md:w-1/2 w-full">
                    <img :src="illustration" alt="">
                </div>
                <div class="md:w-1/2 w-full">
                    <h1 class="section-title">Investing with Bitguana</h1>
                    <p class="common-description">We make investing in loans easy, whether you're a beginner
                        or an experienced investor. Start with the first €50, or build
                        portfolios of any size. Automate your investments, or take
                        as much control as you want.</p>
                    <Button class="btn primary">START INVESTING</Button>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    @apply py-10 md:py-0 bg-black-solid-50 md:min-h-[690px] flex justify-center items-center;
  

    h1.section-title {
        @apply  text-xl md:text-[32px] md:leading-[unset] ;
    }

    p.common-description {
        @apply mt-6 mb-8 md:my-10 max-w-[568px] text-black-transparent-400 text-sm sm:text-base md:text-xl font-normal;
    }

    button.btn {
        @apply max-w-[200px] md:max-w-[240px] w-full;
    }
}
</style>