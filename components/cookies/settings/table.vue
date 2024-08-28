<template>
    <table>
        <thead>
            <tr>
                <th> Cookie </th>
                <th> Duration </th>
                <th> Description </th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(item, index) in [1, 2, 3, 4]" :key="index">
                <td>cookielawinfo-checkbox- advertisement</td>
                <td>1 year</td>
                <td>Set by the GDPR Cookie Consent plugin, this cookie is used to record the user consent for
                    the cookies in the "Advertisement" category.</td>
            </tr>
        </tbody>
    </table>
</template>
<style lang="scss" scoped>
table {
@apply hidden md:block ;
    

    thead {
        @apply bg-black-transparent-50;
    }

    tr {
        @apply h-12;

        &:nth-of-type(even) {
            @apply bg-black-transparent-50;
        }
    }
}
</style>