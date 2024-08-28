<template>
    <div class="card p-8 mt-6 md:mt-8" id="list-card-wrap">
        <table class="table-auto w-full">
            <thead>
                <tr>
                    <th>Project name</th>
                    <th>Minimum investment</th>
                    <th>Loan amount</th>
                    <th>Interest rate</th>
                    <th>Invested</th>
                    <th>Time left</th>
                    <th>Amount Left</th>
                    <th>Term</th>
                    <th>Repayment type</th>
                    <th>LTV</th>
                </tr>
            </thead>
            <tbody>
                <ProjectTableRow v-for="(item, index) in  $props.data " :data="item" :key="`project-table-row_` + index"
                    :on-navigate="onNavigate" />
            </tbody>
        </table>
    </div>
</template>

<script lang="ts" setup>
import type { projectDataType } from '../types';

defineProps<{
    data: projectDataType[]
    onNavigate: (id: number) => void
}>()
</script>

<style lang="scss" scoped>
table {
    @apply text-sm text-left;


    thead {
        @apply bg-black-solid-50 font-bold;
    }

    tr {
        @apply border-b border-black-transparent-200 h-16 cursor-pointer;

        td,
        th {
            &:first-of-type {
                @apply pl-8;
            }

            &:last-of-type {
                @apply pr-8;
            }
        }

        &:last-of-type {
            @apply border-none;
        }
    }
}
</style>