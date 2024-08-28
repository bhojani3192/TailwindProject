<script lang="ts" setup>
import USDTIcon from '~/assets/icons/usdt_icon.vue';
</script>

<template lang="html">
  <section class="intro-section" id="intro">
    <div class="absolute left-0 mix-blend-multiply z-0">
      <img src="~/assets/images/home/home_bg_left.png" alt="" />
    </div>
    <div class="relative container max-w-[1600px] h-[0px]"></div>
    <div
      class="absolute right-0 h-[800px] mix-blend-multiply z-0 w-full bg-contain bg-no-repeat bg-right-bottom bg-[url('~/assets/images/home/home_bg_right.png')]">
    </div>
    <div class="container relative z-10 pt-[120px] md:pt-[80px]">
      <div class="flex flex-wrap justify-between items-center">
        <div class="banner-content w-full lg:w-1/2">
          <h1 class="banner-title">
            Get more for your
            <span class="text-brand-solid-500">Crypto</span> currencies by
            investing them in the
            <span class="text-brand-solid-500"> real economy</span>
          </h1>
          <p class="common-description mt-6 md:mt-9">
            Invest in loans secured with real estate, bank guarantees and crypto
            assets to earn attractive income while keeping your assets safe
          </p>
          <Button class="primary mt-8 md:mt-10 text-sm sm:text-base">GET STARTED</Button>
        </div>
        <div class=" lg:w-[60%] xl:w-1/2 w-full mt-[69px] md:mt-0 relative md:h-[650px]">
          <div class="img hover:animate-pulse absolute right-0">
            <img src="~/assets/images/home/home_crypto.png" alt="" />
          </div>
          <div
            class="currency_wrapper flex gap-x-5 justify-center z-20 relative translate-x-[10px] md:translate-x-[30px] md:translate-y-[140px] translate-y-[60px] ">
            <div class="currency-box">
              <div class="flex items-center">
                <USDTIcon />
                <h5 class="text-xs md:text-xl ml-2 font-bold text-black500">
                  USDT
                </h5>
              </div>
              <h4 class="number text-base md:text-[32px] text-black600 font-bold md:leading-[44px]">
                14%
              </h4>
              <span class="small-description">Average APY</span>
            </div>
            <div class="currency-box translate-y-[50px]">
              <div class="flex items-center">
                <USDTIcon />
                <h5 class="text-xs md:text-xl ml-2 font-bold text-black500">
                  USDT
                </h5>
              </div>
              <h4 class="number text-base md:text-[32px] text-black600 font-bold md:leading-[44px]">
                14%
              </h4>
              <span class="small-description">Average APY</span>
            </div>
            <div class="currency-box translate-y-[100px]">
              <div class="flex items-center">
                <USDTIcon />
                <h5 class="text-xs md:text-xl ml-2 font-bold text-black500">
                  USDT
                </h5>
              </div>
              <h4 class="number text-base md:text-[32px] text-black600 font-bold md:leading-[44px]">
                14%
              </h4>
              <span class="small-description">Average APY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.container {
  @apply px-[34px] 2xl:px-0;
}

.intro-section {
  @apply mx-auto min-h-[800px] lg:min-h-[800px] md:min-h-[100vh] md:max-h-[800px] pb-20 -mt-[80px];
  @apply bg-scroll bg-cover bg-center bg-[url('~/assets/images/home/home_bg.svg')] bg-no-repeat;

  .banner-content {
    @apply lg:pt-[140px] lg:pb-[226px] lg:w-[40%];

    .banner-title {
      @apply text-black-solid-600 text-2xl md:text-[40px] md:leading-[unset] font-bold;
    }
  }

  .currency_wrapper {
    .currency-box {
      @apply p-2 md:px-8 md:py-5 w-[82px] h-[77px] rounded-lg md:w-[160px] md:h-[150px] md:rounded-[32px] border-2 border-white;
      @apply bg-white-transparent-300 backdrop-blur-md;

      svg {
        @apply w-4 h-4 md:w-12 md:h-12;
      }

      .small-description {
        @apply sm:text-sm text-[10px];
      }
    }
  }
}
</style>