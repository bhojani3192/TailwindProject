<script setup lang="ts">
const rows = [
    {
        title: 'User terms',
        link: ''
    },
    {
        title: 'Terms & Conditions',
        link: ''
    },
    {
        title: 'Reliability Assessment Rules',
        link: ''
    },
    {
        title: 'Rules for Consideration of Disputes',
        link: ''
    },
    {
        title: 'Conflict of Interest Management Policy',
        link: ''
    },
    {
        title: 'Contract for Assignment of Rights of Claim',
        link: ''
    },
    {
        title: 'Business Continuity Plan',
        link: ''
    }
]
</script>

<template>
    <section id="legalAndTransparency">
        <div class="container">
            <h1 class="section-title">
                Legal and Transparency
            </h1>

            <div class="card table-document">
                <div class="row head">
                    <span>Document Title</span>
                    <span class="hidden sm:block">Download File</span>
                </div>

                <div class="row" v-for="(item, index) in rows" :key="index">
                    <span>{{ item.title }}</span>
                    <NuxtLink :to="item.link" target="_blank" download>Read More</NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    @apply bg-brand-transparent-50 py-10 md:py-16;

    .table-document {
        @apply w-full p-0 md:p-8 mt-10 rounded-2xl grid grid-cols-1;

        .row {
            @apply h-[86px] md:h-16 flex flex-wrap md:flex-nowrap justify-between items-center py-4 md:py-0 px-6 md:px-8 border-b border-black-transparent-200;
            
            span,
            a {
                @apply text-sm font-normal inline-block w-full md:w-[unset];
            }

            a {
                @apply font-extrabold text-brand-solid-500;
            }

            &:last-of-type {
                @apply border-none;
            }
        }

        .row.head {
            @apply bg-black-solid-50;

            span {
                @apply font-bold last:hidden md:last:inline-block;
            }
        }
    }
}
</style>