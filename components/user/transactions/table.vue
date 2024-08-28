<template>
    <UserTransactionsFilters />
    <table class="table-auto w-full mb-8 mt-6">
        <thead>
            <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Transaction ID</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in [1, 2, 3, 4, 5]" :key="index">
                <td>01.09.2022</td>
                <td>Investment / repayment</td>
                <td>REP-F35DF292-959</td>
                <td>531.67 EUR</td>
                <td class="text-warning-solid-500">Pending</td>
            </tr>
        </tbody>
    </table>
    <Pagination />
</template>

<style lang="scss" scoped>
table {

    th,
    td {
        &:last-of-type {
            @apply text-end;
        }
    }
}
</style>