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
    <section>
        <div class="container">
            <div class="card table-document">
                <h2 class="">
                    Documents
                </h2>
                <div class="row head">
                    <span>Document Title</span>
                    <span class="hidden sm:block">Download File</span>
                </div>

                <div class="row" v-for="(item, index) in rows" :key="index">
                    <span>{{ item.title }}</span>
                    <NuxtLink class="flex items-center" :to="item.link" target="_blank" download>
                        <span class="mr-3">
                            <DownloadIcon></DownloadIcon>
                        </span>
                        Download
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    @apply pb-12;
    h2 {
            @apply xs:py-4 lg:pl-0 xs:pl-6 lg:pb-5 xs:border-b xs:border-black-solid-200 lg:border-none text-black-solid-500 text-[20px] font-bold leading-10 xs:bg-black-solid-50 lg:bg-white;
         }
    .table-document {
        @apply w-full lg:p-8 mt-10 rounded-2xl grid grid-cols-1;

        .row {
            @apply h-[86px] md:h-16 xs:pl-6 pt-5 md:pt-2 lg:flex xs:block justify-between items-center lg:px-8 border-b border-black-transparent-200;
            
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
}
</style>