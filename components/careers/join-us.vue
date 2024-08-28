<script setup lang="ts">
import { data } from './data';
</script>
<template>
    <section id="careers-joinus">
        <div class="container">
            <h1 class="section-title">Why Join Us?</h1>
            <p class="section-description">
                We believe that any success at Bitguana comes from two things: our people and
                our culture. We believe that brilliant people operating in a great culture will produce the best
                outcome.
            </p>

            <div class="card-wrap">
                <div class="card" v-for="(item, index) in data" :key="index">
                    <h1 class="index">{{ `0${index + 1}` }}</h1>
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
<style lang="scss" scoped>
section {
    @apply pt-28 sm:pt-40  pb-10 md:py-20;

    .section-description {
        @apply text-black-solid-500 max-w-[696px];
    }

    .card-wrap {
        @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-6 md:mt-10;

        .card {
            @apply py-8 px-8 md:px-10 min-h-[300px] md:min-h-[340px];

            .index {
                @apply font-bold text-[48px] text-brand-solid-500 mb-6;
            }

            .card-title {
                @apply mb-4;
            }
        }
    }
}
</style>