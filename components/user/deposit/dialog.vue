<script setup lang="ts">
import CloseIcon from '~/assets/icons/header/close_icon.vue';
import WalletLogo from '~/assets/images/wallet-logo.vue';
defineProps<{
    show: boolean
    onClose: () => void
}>()
</script>
<template>
    <Dialog :show="$props.show" :on-close="$props.onClose">
        <div class="deposit_dialog">
            <div class="dialog-title">
                <div>
                    <h1>
                        Add Deposit
                    </h1>
                    <span>Depositing money into an account</span>
                </div>
                <Button class="effects" @click="$props.onClose">
                    <CloseIcon />
                </Button>
            </div>

            <div class="dialog-panel">

                <div class="withdraw-input">
                    <div class="form-group">
                        <input class="form-control" type="text" id="terms" name="terms" value="">
                        <span>EUR</span>
                    </div>
                </div>

                <div class="form-group">
                    <div class="control-group">
                        <input class="form-control" type="checkbox" id="terms" name="terms" value="">
                        <label for="terms">I have read and I accept the <NuxtLink to="/termsAndConditions"> Terms and
                                Conditions </NuxtLink></label>
                    </div>
                </div>
            </div>

            <div class="dialog-footer">
                <Button class="primary" @click="navigateTo('/dashboard/deposit')">CONTINUE</Button>
            </div>

            <div class="powered-by-footer">
                <div class="flex justify-center items-center gap-2">
                    <span>Powered by </span>
                    <WalletLogo />
                </div>
            </div>
        </div>
    </Dialog>
</template>
<style lang="scss" scoped>
.deposit_dialog {
    @apply bg-white-500 w-full h-[334px] md:w-[528px] md:h-[385px] py-4 pb-6 md:pb-8 px-[34px] md:py-8 md:px-10 rounded-tl-3xl rounded-tr-3xl md:rounded-3xl overflow-hidden;

    .dialog-title {
        @apply flex justify-between items-center;

        h1 {
            @apply text-xl font-bold;
        }

        span {
            @apply text-xs;
        }

        .btn {
            @apply h-10 w-10 bg-white-500 p-0 border border-black-transparent-100 rounded-full;
        }
    }

    .dialog-footer {
        @apply flex justify-center;

        .btn {
            @apply w-full md:w-[200px];
        }
    }

    .dialog-panel {
        .withdraw-input {
            @apply my-6 md:mb-6 md:mt-10;

            .form-group {
                @apply m-0 p-0 relative;

                input {
                    @apply pr-[56px];
                }

                span {
                    @apply absolute right-6 top-4 text-base;
                }
            }

            span {
                @apply text-xs text-black-transparent-400;
            }
        }
    }

    .form-group {
        @apply grid-cols-1;

        .control-group {
            label {
                @apply max-w-full w-full text-xs font-normal;

                a {
                    @apply underline font-bold;
                }
            }
        }
    }

    .powered-by-footer {
        @apply bg-black-transparent-100 absolute bottom-0 left-0 h-[50px] w-full flex items-center justify-center;

        span {
            @apply text-xs;
        }
    }
}
</style>