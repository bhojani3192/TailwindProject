<script lang="ts" setup>
import { data } from "./data"
import BackIcon from "~/assets/icons/backarrow_icon.vue";
</script>
<template>
    <div class="deposit-wrapper">
        <div class="deposit-box">

            <div class="top">
                <div class="md:w-1/3 md:pl-16">
                    <Button class="secondary btn-rounded" @click="navigateTo('/dashboard')">
                        <BackIcon class="mr-3" />
                        BACK
                    </Button>
                </div>
                <div class="title">
                    <h1>Withdrawal</h1>
                    <span>Withdrawing money from an account</span>
                </div>
                <div class="w-1/3 hidden md:block"></div>
            </div>

            <div class="deposit-content">
                <div class="row" v-for="(item, index) in data" :key="index">
                    <div class="label">{{ item.label }}</div>
                    <div class="value">{{ item.value }}</div>
                </div>
                <UserWithdrawBankForm v-if="false" />
                <UserWithdrawWalletForm />
            </div>

            <div class="footer">
                <Button class="primary">
                    REQUEST WITHDRAWAL
                </Button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.deposit-wrapper {
    @apply flex justify-center items-center md:pt-10 flex-col px-5 lg:px-0 pb-10 md:pb-0;

    .deposit-box {
        @apply bg-accent-second min-h-[522px] w-full lg:w-[864px] pt-6  rounded-3xl md:pt-10 relative md:gap-16;
        @apply flex justify-between flex-col overflow-hidden;

        .top {
            @apply flex items-center justify-center md:justify-between;

            .secondary {
                @apply text-[0] md:w-[160px] md:text-sm w-10 h-10 p-0 md:p-6 absolute top-4 left-4 md:relative md:top-[unset] md:left-[unset];
                 svg{
                    @apply mr-0 md:mr-3
                }
            }

            .title {
                @apply text-center md:w-2/3;

                h1 {
                    @apply font-bold text-lg md:text-2xl;
                }

                span {
                    @apply font-normal text-xs  md:text-sm;
                }
            }
        }

        .deposit-content {
            @apply max-w-[640px] w-full mx-auto grid grid-flow-row gap-2 md:gap-5 px-6 md:px-0 mt-8 md:mt-0;

            .row {
                @apply flex justify-between items-center font-normal;

                &:first-of-type {
                    @apply font-bold;
                }
            }
        }

        .footer {
            @apply bg-black-transparent-50 min-h-[96px] md:min-h-[128px] w-full flex justify-center gap-8 items-center px-6 md:px-0;

            .btn {
                @apply w-full  md:w-[304px] h-12 md:h-[56px] md:p-0 flex justify-center items-center;
            }
        }
    }
}
</style>