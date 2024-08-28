<script setup lang="ts">
const howItWorks = [{
    rank: '01',
    title: 'Register account',
    description: `Simply create your account and submit proof of identity.`,
},
{
    rank: '02',
    title: 'Make a bank transfer to your virtual account',
    description: `Your transaction will be processed in seconds, regardless of the week’s time and day.`,
},
{
    rank: '03',
    title: 'Choose a project to finance',
    description: `We already assigned credit risk ranking to each loan but you can do your own due diligence. Browse loans yourself or
    usee the automatic investment feature not to miss on the best projects.`,
}, {
    rank: '04',
    title: 'Start investing',
    description: `Other investors are joining you to fully finance the project. After the funding process is over, we collect final documents from the farmer to put your money at work safely.`,
},
{
    rank: '05',
    title: 'Get your interest',
    description: `Congrats, you are getting passive income from investing!`,
}]
</script>
<template>
    <section id="how-it-works">
        <div class="container md:py-16 py-10">
            <h1 class="section-title"> How it Works? </h1>

            <div class="box-wrap">
                <div class="box" v-for="(item, index) in howItWorks" :key="index">
                    <h1 class="rank">{{ item.rank }}</h1>
                    <h2>{{ item.title }}</h2>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.box-wrap {
    @apply flex xl:justify-between mt-6 md:mt-10 mb-4 flex-wrap xl:flex-nowrap gap-6;

    .box {
        @apply w-full md:w-[48%] lg:w-[31%]  xl:w-[240px] xl:min-h-[450px] min-h-[202px] mb-4 md:mb-0 border border-black-transparent-200 bg-white-500 rounded-3xl flex flex-col justify-start items-start p-6 md:p-8;

        h1.rank {
            @apply text-[40px] md:text-[48px] text-brand-solid-500 font-bold;
        }

        h2 {
            @apply text-base font-bold mt-4 ;
        }

        p {
            @apply text-sm font-normal mt-2 md:my-4;
        }
    }
}
</style>