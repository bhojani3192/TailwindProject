<template>
    <section id="careers-team">
        <div class="container">
            <h1 class="section-title">The Team</h1>
            <p class="section-description dark md:w-1/2">
                20+ amazing people who create products that help millions of people feel better.
            </p>

            <div class="gallery-wrap">
                <div class="large-image">
                    <img :src="team" alt="" class="w-full">
                </div>
                <div class="sub-images flex mt-8 gap-4 lg:gap-8 flex-wrap lg:flex-nowrap">
                    <div class="sub-image" v-for="(img, index) in images" :key="index">
                        <img :src="img" alt="" class="w-full">
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script lang="ts" setup>
import team from "@/assets/images/careers/team.png"
import team1 from "@/assets/images/careers/team-1.png"
import team2 from "@/assets/images/careers/team-2.png"
import team3 from "@/assets/images/careers/team-3.png"
import team4 from "@/assets/images/careers/team-4.png"

const images = [team1, team2, team3, team4]
</script>

<style lang="scss" scoped>
section {
    @apply py-10 md:py-20;

    .gallery-wrap {
        @apply mt-6 md:mt-8;

        .large-image {
            @apply w-full h-[200px] md:h-[unset] lg:h-[600px] overflow-hidden rounded-lg;

            img {
                @apply h-full object-cover
            }
        }

        .sub-image {
            @apply w-[47.5%] lg:w-[328px] h-auto lg:h-[328px] overflow-hidden rounded-lg;
        }

        img {
            @apply transition-all duration-500 ease-in-out cursor-pointer;
            @apply lg:grayscale;

            &:hover {
                @apply grayscale-0 scale-[1.05];
            }
        }
    }
}
</style>