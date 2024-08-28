<script setup lang="ts">
import FinanceIcon from "~/assets/icons/home/finance_icon.vue";
import RightarrowIcon from "~/assets/icons/rightarrow_icon.vue";
</script>
<template>
    <section class="finanace-wrapper md:py-16">
        <div class="container">
            <div class="">
                <div class="section-title-wrap">
                    <div class="section-title flex items-center">
                        <FinanceIcon />
                        <h2 class="common-subtitle text-white-500"><span>P2P</span> Finance
                        </h2>
                    </div>
                    <p class="section-description font-light text-white-transparent-400 max-w-[520px]">
                        Experience the ultimate convenience and simplicity of the new financial
                        services era with Bitguana's all in one peer to peer (P2P) platform
                    </p>
                </div>
            </div>
            <div class="row mt-6 md:mt-10">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="finanace-box md:flex relative">
                        <div class="finanace-content w-full md:w-[60%]">
                            <h2 class="text-2xl md:text-[32px] text-brand-solid-500 font-bold">Borrow</h2>
                            <p class="text-white-500 pt-4 pb-6 md:py-6">If you need funding for your projects, apply and
                                obtain a quick
                                response
                                from investorsinas little as 2 business days
                            </p>
                            <a href="" class="learnmore-link">Learn more
                                <RightarrowIcon />
                            </a>

                        </div>
                        <div class="finanance-img md:absolute">
                            <img src="~/assets/images/home/finance_calculator.png" alt="">
                        </div>
                    </div>
                    <div class="finanace-box md:flex relative">
                        <div class="finanace-content w-full md:w-[60%]">
                            <h2 class="text-2xl md:text-[32px] text-brand-solid-500 font-bold">Invest</h2>
                            <p class="text-white-500 pt-4 pb-6">
                                If you want higher yields for your
                                savings
                                but without incurring into
                                additional risks,
                                put your fiat or crypto currencies to work
                                in the
                                real economy, with real assets
                                backing them
                            </p>
                            <a href="" class="learnmore-link">Learn more
                                <RightarrowIcon />
                            </a>

                        </div>
                        <div class="finanance-img invest-img">
                            <img src="~/assets/images/home/finance_bitcoin.svg" alt=""
                                class="md:translate-x-[130px] md:translate-y-[80px] translate-x-[-150px] translate-y-[50px]">
                            <img src="~/assets/images/home/finance_invest.png" alt="" class="relative z-9">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.finanace-wrapper {
    @apply bg-accent-third py-10 md:pb-[164px]
}

.finanace-wrapper .finanace-box {
    @apply bg-white-transparent-100 pt-8 md:pt-10 px-8 lg:pl-16 md:pr-5 rounded-3xl min-h-[350px];

    p {
        @apply text-sm sm:text-base
    }
}

.learnmore-link {
    @apply text-brand-solid-500 underline font-black hover:text-brand-solid-400 text-sm sm:text-base;
}

.learnmore-link:hover path {
    @apply stroke-brand-solid-400
}

.finanace-wrapper .invest-img {
    @apply md:absolute right-0 flex top-[140px] justify-end flex-row-reverse md:flex-row
}

.finanace-wrapper .finanance-img {
    @apply mt-8 md:mt-0 -translate-x-8 md:translate-x-0 md:right-[-50px] md:top-[240px] lg:top-[140px] xl:right-[0px]
}

.register-wrapper {
    @apply pb-[93px]
}
</style>