<script lang="ts" setup>
const project: number[] = Array(15).fill(1)
</script>
<template>
    <div class="card p-8 mt-8 bg-white" id="list-card-wrap" >
        <h2 class="pb-5 font-bold">Payment Schedule</h2>
        <table class="table-auto w-full">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Principal</th>
                    <th>Interest</th>
                    <th>Total</th>
                    <th>Payment received</th>
                    <th>Payment date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in project" :key="index">
                    <td>31.08.2022</td>
                    <td>2,000.00 EUR</td>
                    <td>1,063.34 EUR</td>
                    <td>5,000.00 EUR</td>
                    <td>531.66 EUR</td>
                    <td>31.08.2022</td>
                    <td class="text-[#EE9630]">Pending</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style lang="scss" scoped>
table {
    @apply text-sm text-left;


    thead {
        @apply bg-black-solid-50 font-bold;
    }

    tr {
        @apply border-b border-black-transparent-200 h-16;

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