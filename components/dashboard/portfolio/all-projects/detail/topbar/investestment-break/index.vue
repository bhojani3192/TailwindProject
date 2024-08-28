<script setup lang="ts">
</script>
<template>
    <div class="loan-box card">
        <div class="loan-section">
            <h2 class="pb-5 font-bold text-brand-gradient">Investment Breakdown</h2>
            <div class="text-black-solid-500 xs:text-[14px]">
                <div class="mb-4">
                    <div class="flex bg-[#00AC990D] w-full mb-2 h-4 rounded-e-2xl">
                        <span class="w-full bg-brand-gradient rounded-e-2xl"></span>
                    </div>
                    <p>1,727.50 EUR</p>
                </div>
                <div class="mb-4">
                    <div class="flex bg-[#3674D10A] w-full mb-2 h-4 rounded-e-2xl">
                        <span class="w-11 bg-blue-gradient rounded-e-2xl"></span>
                    </div>
                    <p>227.50 EUR</p>
                </div>
                <div class="mb-4">
                    <div class="flex bg-[#EE96300A] w-full mb-2 h-4 rounded-e-2xl">
                        <span class="w-5 bg-yellow-gradient rounded-e-2xl"></span>
                    </div>
                    <p>0.06 EUR</p>
                </div>
            </div>
            <div class="bg-black-solid-50 mt-7 w-full h-full p-4 rounded-3xl">
                <ul class="list-disc pl-8 marker:text-2xl text-black-solid-500">
                    <li class="marker:text-brand-solid-500">Amount of Interest</li>
                    <li class="marker:text-[#3977D4]">Principal</li>
                    <li class="marker:text-[#F19B38]">Comissions and Bonuses</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .loan-box {
        @apply rounded-2xl xs:mb-4 xs:w-full lg:w-4/12 h-[420px] lg:mr-12 xs:mr-12 md:mr-5 bg-white border border-black-solid-200;
        .loan-section {
            @apply px-10 py-6 xl:w-full lg:w-[304px];
        }
    }
</style>