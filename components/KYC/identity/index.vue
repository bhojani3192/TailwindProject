<script setup lang="ts">
import CompleteIcon from '~/assets/icons/complete_icon.vue';
import IdentityIcon from '~/assets/icons/identity_icon.vue';
import SpinnerIcon from '~/assets/icons/spinner_icon.vue';
type STATUS = 'PENDING' | 'SUCCESS' | 'NONE';

const verificationStatus = ref<STATUS>('NONE')
const onVerifyIdentity = () => {
    verificationStatus.value = 'PENDING'
}

onUpdated(() => {
    if (verificationStatus.value == 'PENDING') {
        setTimeout(() => {
            verificationStatus.value = 'SUCCESS';
        }, 2000);
    }
})

</script>

<template>
    <div class="identity-wrap">
        <p>Please verify your identity</p>
        <Button class="primary" @click="onVerifyIdentity">
            <IdentityIcon />
            Verify Identity
        </Button>
        <div :class="`badge warning ${verificationStatus == 'PENDING' ? 'flex' : 'hidden'}`">
            <SpinnerIcon class="animate-spin" />
            Pending verification
        </div>
        <div :class="`badge success ${verificationStatus == 'SUCCESS' ? 'flex' : 'hidden'}`">
            <CompleteIcon class="h-3 w-4" />
            Verification complete
        </div>
    </div>
</template>

<style lang="scss" scoped>
.identity-wrap {
    @apply flex justify-center items-center flex-col gap-4 pt-5 mb-16;

    p {
        @apply text-sm text-black-transparent-400 font-medium;
    }

    .btn.primary {
        @apply w-[300px] uppercase;

        svg {
            @apply mr-3;
        }
    }

    .badge {
        @apply py-2 px-4 items-center justify-between gap-3 rounded-full mt-2 text-sm font-semibold;

        svg {
            animation-duration: 2.5s;
        }
    }

    .badge.warning {
        @apply bg-warning-solid-500/10;
    }

    .badge.success {
        @apply bg-brand-solid-100 text-brand-solid-500;
    }
}
</style>