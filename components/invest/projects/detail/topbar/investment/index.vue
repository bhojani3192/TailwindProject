<template>
        <div class="investment-box">
            <div class="blur-wrapper">
                <div class="investment-section title" :class="loggedIn ? '' : 'blur-content'">
                    <div class="flex justify-between items-center pb-4">
                        <h2>Investment</h2>
                        <span class="text-xs w-[112px] h-[32px] rounded-lg bg-brand-solid-100 text-brand-solid-500 font-bold flex items-center justify-center">0% Interest</span>
                    </div>
                    <div class="flex xs:w-auto xs:h-[16px] lg:w-[265px] xl:w-[352px] lg:h-[16px]  bg-brand-solid-100 rounded-e-2xl">
                        <span class="w-6 h-auto bg-brand-solid-500 rounded-e-2xl"></span>
                    </div>
                    <div class="flex justify-between text-black-solid-500 pt-2">
                        <span class="xs:text-sm">5% (1 investors)</span>
                        <span class="xs:text-sm">95,000.00 EUR <b class="font-light text-sm">left</b></span>
                    </div>
                    <div class="my-5">
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder="Amount">
                            <span class="currency">EUR</span>
                        </div>
                    </div>
                    <Button class="primary xs:w-[100%] lg:w-[265px] xl:w-[352px] lg:h-[56px]">INVEST</Button>
                </div>
                <div v-if="!loggedIn" class="blur-overlay">
                    <span class="font-bold pb-2">To view the content, please sign in</span>
                    <span>
                        <Button class="primary xs:w-[100%] lg:w-[265px] xl:w-[192px] lg:h-[56px]" @click="navigateTo('/login')">SIGN IN</Button>
                    </span>
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const { loggedIn } = useUserSession()

</script>
<style lang="scss" scoped>
@import '../style.scss';
    .investment-box {
        @apply rounded-2xl xs:w-[320px] lg:w-[330px] xl:w-[416px] md:h-[300px] lg:h-[300px] bg-brand-solid-50 border border-black-solid-200;
        .investment-section {
            @apply px-8 py-6;
            .h2 {
                @apply pb-5
            }
        }
        .form-group {
            @apply items-center grid-cols-2;
        }
        .form-control {
            @apply xs:w-64 lg:w-[265px] xl:w-[352px] md:w-56 xs:pr-16 lg:pr-[70px] xs:bg-white lg:bg-black-solid-50;
        }

        .currency {
            @apply lg:ml-16 xl:ml-24 xs:ml-auto text-lg xs:pr-4 md:text-base lg:text-lg xs:text-lg lg:font-normal text-black-solid-400;
        }
        .blur-wrapper {
            @apply relative overflow-hidden;
        .blur-content {
            @apply relative blur-sm z-10
        }
        }
        .blur-overlay {
            @apply absolute top-1/3 left-0 w-full h-full z-10 flex flex-col items-center 
        }
    }
</style>