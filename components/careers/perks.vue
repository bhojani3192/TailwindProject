<template lang="html">
    <section id="careers-perks-benifit">
        <div class="container">
            <h1 class="section-title">{{ `Perks & Benefits` }}</h1>
            <p class="section-description dark md:w-1/2">
                20+ amazing people who create products that help millions of people feel better. We cooperate only with
                talented people and we are proud to be a team of professionals.
            </p>

            <div class="card-wrap">
                <div class="card" v-for="(item, index) in [1, 2, 3, 4, 5, 6]" :key="index">
                    <div class="icon-wrap">
                        <img :src="icons[index]" alt="">
                    </div>
                    <div class="card-title">
                        Vacation
                    </div>
                    <p class="card-description">
                        As per the laws of your country. We do ask you to take a proper rest
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import Vacation from "@/assets/icons/careers/perk-vacation.svg";
import Insurance from "@/assets/icons/careers/perk-insurance.svg"
import Sick from "@/assets/icons/careers/perk-sick.svg";
import Holidays from "@/assets/icons/careers/perk-holidays.svg"
import Environment from "@/assets/icons/careers/perk-environment.svg"
import Comfort from "@/assets/icons/careers/perk-comfort.svg"
const icons = [Vacation, Insurance, Sick, Holidays, Environment, Comfort]
</script>
<style lang="scss" scoped>
section {
    @apply py-10 md:py-20;

    .card-wrap {
        @apply grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5  lg:gap-6 2xl:gap-8 mt-6 md:mt-10;

        .card {
            @apply p-6 md:py-10 md:px-8 bg-card-gradient min-h-[260px] md:h-[330px] border-0 drop-shadow-[none];

            .icon-wrap {
                @apply mb-6;

                img {
                    @apply h-14 w-14;
                }
            }

            .card-title {
                @apply mb-4;
            }
        }
    }
}
</style>