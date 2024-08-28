<script setup lang="ts">
import BoardIcon from '~/assets/icons/board_icon.vue';
</script>

<template>
    <FormWrapper :hide-bottom="true">
        <template #title>
            Complete
        </template>
        <div class="flex flex-col items-center gap-2 md:gap-4 md:py-14 py-16">
            <div class="icon-wrap">
                <div class="mark" />
                <BoardIcon />
            </div>
            <h1 class="text-base sm:text-xl text-brand-solid-500 font-bold text-center max-w-[633px]">
                Congratulations on successfully completing our questionnaire! We will confirm your investor status
                shortly
            </h1>
            <h2 class="text-sm font-medium mb-10 text-center max-w-[633px]">
                In the meantime, you can already start to invest. Deposit funds into your wallet/s and start looking for
                investment opportunities. Enjoy the experience!
            </h2>
            <NuxtLink to="/" class="btn primary">GO TO HOME PAGE</NuxtLink>
        </div>
    </FormWrapper>
</template>

<style lang="scss" scoped>
.icon-wrap {
    @apply relative flex items-center justify-center rounded-full w-16 h-16 md:h-[88px] md:w-[88px] bg-brand-transparent-100 mb-4 md:mb-0;

    .mark {
        @apply absolute h-6 w-6 rounded-full right-0 top-0 bg-brand-solid-500 border-brand-solid-500 bg-[url('~/assets/icons/checkmark_icon.svg')] bg-no-repeat bg-center;
    }
}
</style>