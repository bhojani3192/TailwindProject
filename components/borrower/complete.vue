
<script setup lang="ts">
import CompleteIcon from '~/assets/icons/complete_icon.vue';
</script>
<template>
    <FormWrapper :hide-bottom="true">
        <template #title>
            Complete
        </template>
        <div class="flex flex-col items-center gap-2 md:gap-4 md:py-14 py-16">
            <div class="icon-wrap">
                <CompleteIcon />
            </div>
            <h1 class="text-base sm:text-xl text-brand-solid-500 font-bold text-center">
                You are successfully registered
            </h1>
            <h2 class="text-sm font-medium mb-10">
                Please check your email
            </h2>
            <NuxtLink to="/" class="btn primary">GO TO HOME PAGE</NuxtLink>
        </div>
    </FormWrapper>
</template>

<style lang="scss" scoped>
.icon-wrap {
    @apply  flex items-center justify-center rounded-full w-16 h-16 md:h-[88px] md:w-[88px] bg-brand-transparent-100 mb-4 md:mb-0;
}
</style>