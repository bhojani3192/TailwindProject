<script setup lang="ts">
import InvestedIcon from "~/assets/icons/dashboard/invested_icon.vue"
import InTransferIcon from "~/assets/icons/dashboard/intransfer_icon.vue"
import TotalValueIcon from "~/assets/icons/dashboard/totalvalue_icon.vue";
import { lineChartData, statCard, barChartData } from "./data"
import WalletLogo from "~/assets/images/wallet-logo.vue";
import smWalletLogo from "~/assets/images/wallet-logo.svg";

const depositDialogShow = ref<boolean>(false)
const withdrawDialogShow = ref<boolean>(false)

const onDepositDialogOpen = () => {
    depositDialogShow.value = true
}
const onDepositDialogClose = () => {
    depositDialogShow.value = false
}

const onWithdrawDialogOpen = () => {
    withdrawDialogShow.value = true
}
const onWithdrawDialogClose = () => {
    withdrawDialogShow.value = false
}
</script>
<template>
    <section id="user_statistics">
        <div class="container py-6 md:py-16">
            <div class="flex flex-wrap lg:flex-nowrap gap-8 items-end">
                <div class=" w-full lg:w-2/3">
                    <div class="flex flex-col  gap-y-6 md:gap-y-8">

                        <div class="investments-wrap">
                            <div class="investments-number">
                                <span>Available for Investments</span>
                                <h1 class="mt-2"> <b>3,138.87</b> EUR</h1>
                                <span class="justify-center items-center gap-2 mt-4 hidden md:flex">
                                    Wallet provided by
                                    <WalletLogo />
                                </span>
                            </div>

                            <div class="btn-grp">
                                <Button class="primary" @click="onDepositDialogOpen">Add Deposit</Button>
                                <Button class="primary" @click="onWithdrawDialogOpen">Withdraw</Button>
                            </div>

                            <div class="investments-number md:hidden">
                                <span class="justify-center items-center gap-2 flex">
                                    Wallet provided by
                                    <img :src="smWalletLogo" alt="" srcset="">
                                </span>
                            </div>
                        </div>

                        <div class="account-stats">
                            <div class="stat-box">
                                <div class="icon">
                                    <InvestedIcon />
                                </div>
                                <div class="info">
                                    <span>Invested</span>
                                    <h1>10,095.00 EUR</h1>
                                </div>
                            </div>
                            <div class="stat-box">
                                <div class="icon">
                                    <InTransferIcon />
                                </div>
                                <div class="info">
                                    <span>In Transfer</span>
                                    <h1>500.00 EUR</h1>
                                </div>
                            </div>
                            <div class="stat-box">
                                <div class="icon">
                                    <TotalValueIcon />
                                </div>
                                <div class="info">
                                    <span>Total account value</span>
                                    <h1>13,255.00 EUR</h1>
                                </div>
                            </div>
                        </div>

                        <div class="card charts-card">
                            <div class="w-full md:w-1/2 chart-wrap">
                                <div class="info">
                                    <h1>Total investment</h1>
                                    <span>Last 6 months</span>
                                </div>
                                <ChartBar :data="barChartData" :bar-thickness="24" />
                            </div>
                            <div class="w-full md:w-1/2 chart-wrap">
                                <div class="info">
                                    <h1>Total investment</h1>
                                    <span>Last 6 months</span>
                                </div>
                                <ChartLine :data="lineChartData" />
                            </div>
                        </div>

                        <div class="statistics-card-wrap">

                            <div class="card stat-card" v-for="(item, index) in statCard" :key="`statCard_` + index">
                                <span>{{ item.label }}</span>
                                <h2> <b> {{ item.value }}</b> EUR</h2>
                            </div>

                        </div>
                    </div>
                </div>

                <UserStatisticsPortfolio />

            </div>
        </div>
    </section>
    <UserDepositDialog :show="depositDialogShow" :on-close="onDepositDialogClose" />
    <UserWithdrawDialog :show="withdrawDialogShow" :on-close="onWithdrawDialogClose" />
</template>
<style lang="scss" scoped>
section {
    @apply bg-black-solid-50;

    .investments-wrap {
        @apply flex flex-col lg:flex-row justify-between items-center gap-y-4 lg:gap-y-0;

        .btn-grp {
            @apply flex justify-between items-center gap-5 md:gap-6 xl:gap-8 w-full md:w-auto;
        }
    }

    .investments-number {
        @apply w-full md:w-auto;

        span {
            @apply text-xs sm:text-sm font-normal;
        }

        h1 {
            @apply text-xl lg:text-[28px] xl:text-[32px] md:text-[32px] font-normal;
        }
    }

    .btn {
        @apply w-1/2 md:w-[192px] px-5 md:px-6;
    }

    .statistics-card-wrap {
        @apply grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-x-5 gap-y-4 md:gap-x-8 md:gap-y-6;

        .stat-card {
            @apply min-h-[112px] bg-accent-second text-center flex justify-center items-center flex-col rounded-2xl;

            span {
                @apply text-xs sm:text-sm font-normal text-black-transparent-400;
            }

            h2 {
                @apply text-sm sm:text-base mt-2;
            }
        }
    }

    .info {

        h1 {
            @apply text-[10px] text-sm sm:text-base font-semibold;
        }

        span {
            @apply text-[10px] sm:text-xs font-normal;
        }
    }

    .charts-card {
        @apply py-6 px-6 md:px-10 min-h-[250px] md:flex justify-between items-end gap-x-10;

        .chart-wrap {
            .info {
                @apply mb-5 md:mb-8;

                span {
                    @apply text-black-transparent-400;
                }
            }
        }
    }

    .account-stats {
        @apply py-4 px-6 md:py-5 md:px-8 bg-accent-third rounded-2xl min-h-[96px] text-white md:flex justify-between items-center;

        .stat-box {
            @apply w-full md:w-1/3 flex gap-4 mb-4 md:mb-0 md:justify-center last:mb-0;

            .icon {
                @apply w-10 h-10 md:h-14 md:w-14 bg-white-transparent-100 rounded-full overflow-hidden flex justify-center items-center;


            }

            h1 {
                @apply text-sm sm:text-base
            }

        }

        .info span {
            @apply text-white-transparent-400;
        }
    }
}
</style>