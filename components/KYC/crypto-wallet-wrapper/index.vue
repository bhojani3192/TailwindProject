<script setup lang="ts">
import Logo from "~/assets/images/logo.vue";
defineProps<{
    type?: 'KYC' | 'KYB'
}>()
</script>

<template>
    <FormWrapper>
        <template #title>
            <slot name="title"></slot>
        </template>
        <div class="pb-8">
            <div class="heading">
                <h1 class="form-heading">{{ $props.type || 'KYC' }}</h1>
                <div class="logo">
                    <Logo />
                    <span class="badge">PAY</span>
                </div>
            </div>
            <p>{{ `To use the Bitguana platform, you must open a Bitguana Pay account to enable the virtual currency
                wallets that you will use inside the Bitguana platform. Please refer to the Bitguana Pay wallet terms
                and conditions`}} <NuxtLink class="link" to="/">here.</NuxtLink>
            </p>
            <p>{{ `Bitguana Pay is a regulated entity and as such, it must comply with all applicable law at all
                times.`}}</p>
            <slot></slot>

            <div class="mt-6">
                <p class="sm">
                    Under normal circumstances, the identification process should take less than 5 minutes to complete.
                    For a successful identification the recipient of the email should prepare:
                </p>

                <ul class="list-disc ml-5">
                    <li>A passport or official (government-issued) identity card;</li>
                    <li>A device with a camera (a mobile phone, or laptop, etc.);</li>
                    <li>There must not be any other persons in the room at the time of identification;</li>
                    <li>A well-lit environment and a good internet connection will make the process easier and faster.
                    </li>
                </ul>
            </div>
        </div>

        <template #bottom>
            <slot name="bottom"></slot>
        </template>
    </FormWrapper>
</template>

<style lang="scss" scoped>
p {
    @apply text-base font-semibold mb-5 max-w-[1016px];
}

p.sm,
ul li {
    @apply font-medium text-sm;
}

.heading {
    @apply flex justify-between w-full sm:w-[55%] items-center;
}

.logo {
    @apply relative w-[142px] sm:w-auto;

    svg {
        @apply w-[112px] h-8 sm:h-auto sm:w-auto;
    }

    .badge {
        @apply absolute translate-x-16 right-16 md:right-7 top-3 bg-brand-solid-500 rounded-xl flex justify-center items-center text-white;
        @apply h-4 w-[30px] text-[10px] top-0 sm:text-xs sm:h-5 sm:w-10;
    }
}
</style>