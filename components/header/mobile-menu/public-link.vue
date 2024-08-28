<template>
    <ul class="">
        <li>
            <NuxtLink to="/borrow">BORROW</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/invest">INVEST</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/careers">CAREERS
            </NuxtLink>
        </li>
        <li>
            <NuxtLink to="/company">COMPANY</NuxtLink>
        </li>
    </ul>
</template>
<style scoped lang="scss">
ul {
    @apply flex flex-col;

    li {
        @apply h-16 w-full flex items-center justify-center;

        a {
            @apply text-xl font-black text-black-solid-500;
        }
    }
}
</style>