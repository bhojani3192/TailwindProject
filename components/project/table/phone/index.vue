<template>
    <div class="mobile-list-grid" id="mobile-grid-card-wrap">
        <div class="card" v-for="(row, index) in data" :class="row.isComplete && `complete`"
            @click="$props.onNavigate(index)">
            <div class="card-title">
                Luxury Residential Complex In The Centre Of Tbilisi
            </div>
            <div class="info-grid">
                <div class="info" v-for="(item, index) in columns" :key="'mobile-list-col-' + index">
                    <span>{{ item.label }}</span>
                    <h1>{{ item.key }}</h1>
                </div>
            </div>
            <div class="ribbon" v-if="row.isComplete">
                <img :src="checkmarkIcon" alt="">
                Fully Invested
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { projectDataType } from '../../types';
import checkmarkIcon from '~/assets/icons/checkmark_icon.svg'
import columns from "./columns"
defineProps<{
    data: projectDataType[]
    onNavigate: (id: number) => void
}>()
</script>
<style lang="scss" scoped>
.mobile-list-grid {
    @apply my-6 grid-cols-1 gap-4;

    .card.complete {
        @apply border-brand-solid-500 border-2 bg-brand-solid-50;

        .ribbon {
            @apply w-[180px] h-[48px] rounded-l-3xl bg-brand-solid-500 absolute right-0 bottom-4 flex justify-center items-center text-sm text-white-500 font-bold gap-2;
        }
    }

    .card {
        @apply p-6;

        .card-title{
            @apply text-sm sm:text-base
        }

        .info-grid {
            @apply grid grid-cols-2 gap-4 mt-4;

            .info {
                span {
                    @apply text-black-solid-400 text-xs font-normal;
                }

                h1 {
                    @apply font-semibold text-sm;
                }
            }
        }
    }
}
</style>