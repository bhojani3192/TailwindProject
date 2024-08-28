<script setup lang="ts">
import projectDummyImage_1 from '~/assets/images/project-dummy-image-1.png'
const { loggedIn } = useUserSession()
const data = [
    {
        title: 'Invested at',
        value: '31.08.2022'
    },
    {
        title: 'Amount invested',
        value: '100,000 EUR'
    },
    {
        title: 'Expected return',
        value: '-3.024489%'
    },
    {
        title: 'Outst. princial',
        value: '531.66 EUR'
    },
    {
        title: 'Rcvd. principal',
        value: '15,222.00 EUR'
    },
    {
        title: 'Received income',
        value: '33,043.00 EUR'
    },
]
</script>
<template>
    <div class="card cursor-pointer"
        @click="!loggedIn ? navigateTo('invest/project/details/1') : navigateTo('portfolio/details/1')">
        <div class="img-wrap">
            <img :src="projectDummyImage_1" alt="projectDummyImage">
        </div>
        <div class="card-title">
            <div>
                <h1>PUB-RED-0005</h1>
            </div>
            <div>
                <p class="text-[#EE9630] text-base">Pending</p>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="flex flex-col" v-for="(item, index) in data" :key="index">
                <span class="text-xs text-black-solid-400">{{ item.title }}</span>
                <span class="font-bold text-black-solid-500">{{ item.value }}</span>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card {
    @apply bg-white-500 border border-black-transparent-200 w-full xl:max-h-[451px] xl:h-[451px] p-4 md:p-6 rounded-2xl drop-shadow-lg lg:w-full 2xl:max-w-[416px];

    .img-wrap {
        @apply rounded-lg max-w-[368px] max-h-[246px] overflow-hidden;
    }

    .card-title {
        @apply text-base md:text-xl font-bold mt-4 flex justify-between items-center;
    }

    .interest-amount {
        @apply flex justify-between mt-[10px];

        span {
            @apply text-xs text-black-transparent-400 font-normal block;

            &:last-of-type {
                @apply text-right;
            }
        }
    }
}
</style>