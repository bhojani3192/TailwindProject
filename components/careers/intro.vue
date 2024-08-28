<template>
  <section id="careers-intro">
    <div class="container relative">
      <div class="md:flex ">
        <div class="md:w-1/2 w-full">
          <h1 class="common-subtitle font-bold">Join Bitguana</h1>
          <p class="common-description">We're building a world-first product. Something that will
            fundamentally change the way people deal with their money.
            So, if we want to reach our lofty goals (global domination,
            naturally), we need the right people to get us there.</p>
          <Button class="primary">APPLY NOW</Button>
        </div>

        <div class="md:w-1/2 w-full">
          <div class="banner-img-wrap">
            <div class="banner-img">
              <img :src="CareerBg" alt="career bg">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import CareerBg from "@/assets/images/careers/career_bg.png"
</script>

<style lang="scss" scoped>
section {
  @apply bg-black-solid-50 py-10 md:py-12 h-[480px] md:h-[unset];

 .common-subtitle{
  @apply md:text-[32px] text-xl;
 }


  .common-description {
    @apply max-w-[584px] mt-6 md:mt-8 text-black-solid-400;
  }

  .btn {
    @apply w-[240px] mt-8 md:mt-10;
  }

  .banner-img-wrap {
    @apply absolute mt-10 md:mt-0;

    .banner-img {
      @apply grayscale rounded-3xl overflow-hidden max-w-[640px] max-h-[418px]     md:h-[180px] lg:h-[418px];

      img {
        @apply transition-all duration-700 ease-in-out;
      }

      &:hover {
        @apply grayscale-0;

        img {
          @apply scale-[1.02];
        }
      }
    }
  }
}
</style>