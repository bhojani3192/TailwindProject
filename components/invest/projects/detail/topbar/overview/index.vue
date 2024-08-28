<template>
    <div class="overview-box">
        <div class="overview-section title">
            <h2 class="pb-5">Overview</h2>
            <div class="text-black-solid-500 xs:text-[14px]">
                <div class="flex justify-between pb-4">
                    <span>Status</span>
                    <span class="font-bold">Open for investment</span>
                </div>
                <div class="flex justify-between pb-4">
                    <span>Target</span>
                    <span class="font-bold">100,000.00 EUR</span>
                </div>
                <div class="flex justify-between pb-4">
                    <span>Completion Percentage</span>
                    <span class="font-bold">5 %</span>
                </div>
                <div class="flex justify-between pb-4">
                    <span>Raised</span>
                    <span class="font-bold">5,000.00 EUR</span>
                </div>
                <div class="flex justify-between">
                    <span>Publication Date</span>
                    <span class="font-bold">12.12.2026</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '../style.scss';
    .overview-box {
        @apply rounded-2xl xs:mb-4 xs:w-[320px] lg:w-[528px] h-[300px] lg:mr-12 xs:mr-12 md:mr-5 bg-white border border-black-solid-200;
        .overview-section {
            @apply px-10 py-6 xl:w-full lg:w-[304px];
            .h2 {
                @apply pb-5
            }
        }
    }
</style>