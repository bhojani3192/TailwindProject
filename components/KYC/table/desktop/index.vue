<template>
    <div class="pt-2 pb-16 md:table hidden w-full">
        <table class="table-auto w-full">
            <thead>
                <tr>
                    <th class="w-[40%]">Other Representatives</th>
                    <th>Email</th>
                    <th>Verification link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name Surname</td>
                    <td>email@email.com</td>
                    <td class="text-brand-solid-500">
                        Email sent
                    </td>
                </tr>

                <tr>
                    <td>Name Surname</td>
                    <td>email@email.com</td>
                    <td class="warning">
                        Email pending
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
@import url('./styles.scss');
</style>