<script setup lang="ts">
import DownloadIcon from '@/assets/icons/download_icon.vue';
const rows = [
    {
        title: 'Terms & Conditions',
        link: ''
    },
    {
        title: 'Privacy Policy',
        link: ''
    },
    {
        title: 'Autoinvest Rules',
        link: ''
    },
]
</script>
<template>
    <section class="bg-white 2xl:w-[864px] md:h-[420px] card">
        <div class="xs:rounded-t-3xl sm:rounded-t-3xl lg:p-10 xs:p-5 sm:p-5 lg:w-96 lg:bg-white xs:bg-black-solid-50 sm:bg-black-solid-50 lg:border-0 sm:border-b sm:border-black-transparent-200 xs:border-b xs:border-black-transparent-200">
            <span class="">
                <h1 class="font-bold text-xl mb-2">Your agreements</h1>
                <p class="font-normal text-xs text-black-solid-500">List of agreements accepted</p>
            </span>
        </div>
        <div class="table-document">
            <div class="row head">
                <span>Document Title</span>
                <span class="hidden sm:block">Download File</span>
            </div>

            <div class="row" v-for="(item, index) in rows" :key="index">
                <span>{{ item.title }}</span>
                <NuxtLink class="flex items-center xs:py-2" :to="item.link" target="_blank" download>
                    <span class="mr-3">
                        <DownloadIcon></DownloadIcon>
                    </span>
                    Download
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    .table-document {
        @apply w-auto lg:py-0 xs:py-5 sm:py-5;

        .row {
            @apply h-16 xs:mb-3 sm:mb-3 xs:pb-16 sm:pb-16 xs:pl-6 xs:pt-2 lg:p-0 lg:mb-0 lg:px-5 lg:mx-10 lg:flex xs:block justify-between items-center border-b border-black-transparent-200;
            
            span,
            a {
                @apply text-sm font-normal;
            }

            a {
                @apply font-extrabold text-brand-solid-500;
            }

            &:last-of-type {
                @apply border-none;
            }
        }

        .row.head {
            @apply bg-black-solid-50 xs:hidden lg:flex;

            span {
                @apply font-bold;
            }
        }
    }
</style>