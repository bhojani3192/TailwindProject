<script lang="ts" setup>
const project: number[] = Array(15).fill(1)
</script>
<template>
    <div class="card p-8 mt-8" id="list-card-wrap" >
        <table class="table-auto w-full">
            <thead>
                <tr>
                    <th>Project code</th>
                    <th>Invested at</th>
                    <th>Amount invested</th>
                    <th>Expected return</th>
                    <th>Outst. princial</th>
                    <th>Rcvd. principal</th>
                    <th>Rcvd. income</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr class="cursor-pointer" v-for="(item, index) in project" :key="index" @click="navigateTo('portfolio/details/1')">
                    <td>PUB-RED-0005</td>
                    <td>31.08.2022</td>
                    <td>5,000.00 EUR</td>
                    <td>-3.024489%</td>
                    <td>531.66 EUR</td>
                    <td>1063.34 EUR</td>
                    <td>-3.64 EUR</td>
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