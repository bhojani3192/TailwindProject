<template>
    <ul>
        <li>
            <NuxtLink to="/dashboard" :active-class="`active`">
                <OverviewIcon />
                OVERVIEW
            </NuxtLink>
        </li>
        <li>
            <NuxtLink to="/dashboard/invest" :active-class="`active`">
                <InvestIcon />
                INVEST
            </NuxtLink>

        </li>
        <li>
            <NuxtLink to="/dashboard/portfolio" :active-class="`active`">
                <PortfolioIcon />
                PORTFOLIO
            </NuxtLink>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import OverviewIcon from "~/assets/icons/header/watch_icon.vue"
import InvestIcon from "~/assets/icons/header/search_icon.vue"
import PortfolioIcon from "~/assets/icons/header/bag_icon.vue"
</script>

<style scoped lang="scss">
ul {
    @apply flex flex-col;

    li {
        @apply h-16 w-full flex items-center justify-center;

        a {
            @apply text-xl font-black text-black-solid-500 flex justify-center items-center gap-3;
        }
    }
}
</style>