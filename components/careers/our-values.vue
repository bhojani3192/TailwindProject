<template>
    <section id="careers-our-values">
        <div class="container">
            <h1 class="section-title">Our Values</h1>
            <p class="section-description dark">
                We believe that any success at Bitguana comes from two things: our people and our culture.
            </p>

            <div class="card-wrap">
                <div class="card" v-for="(item, index) in values" :key="index">
                    <div class="icon-wrap">
                        <img :src="icons[index]" alt="">
                    </div>
                    <div class="card-title">
                        {{ item.title }}
                    </div>
                    <p class="card-description">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { values } from './data';
import Think from "@/assets/icons/careers/value_think.svg"
import Deliver from "@/assets/icons/careers/value_deliver.svg"
import Done from "@/assets/icons/careers/value_done.svg"
import Dream from "@/assets/icons/careers/value_dream.svg"
import Settle from "@/assets/icons/careers/value_settle.svg"

const icons = [Done, Deliver, Dream, Settle, Think]
</script>

<style lang="scss" scoped>
section {
    @apply py-10 md:py-16 bg-brand-transparent-100;

    .card-wrap {
        @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-6 md:mt-10;

        .card {
            @apply p-8 md:p-10 min-h-[350px] md:h-[380px];

            .icon-wrap {
                @apply bg-brand-transparent-100 mb-6 h-20 w-20 rounded-full flex justify-center items-center;

                img {
                    @apply h-8 w-8;
                }
            }

            .card-title {
                @apply mb-4;
            }
        }
    }
}
</style>