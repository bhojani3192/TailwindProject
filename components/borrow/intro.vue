<template>
    <section class="" id="intro">
        <div class="container flex flex-wrap lg:flex-nowrap items-start justify-between">
            <div class="title">
                <h1>We provide access to 2-5 year personal loans to qualified borrowers. They then repay in fixed, monthly
                    payments.</h1>
                <p class="common-description">Here are some things we may check for:</p>
                <ul class="mt-[21px] pl-5">
                    <li>Credit scores from 640+</li>
                    <li>Income and bank statements</li>
                    <li>300+ data points to prevent fraud</li>
                </ul>
                <Button class="primary mt-8 md:mt-10">Start Borrowing</Button>
            </div>

            <BorrowLoanCalculator />
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    @apply py-16 bg-black-solid-50;

    .title {
        @apply max-w-[650px];

        h1 {
            @apply text-black-solid-500 text-xl md:text-[32px] font-bold md:leading-10;
        }

        p {
            @apply mt-6 md:mt-8 text-black-solid-400;
        }

        ul {
            @apply list-disc text-base font-semibold;
            li{
                @apply text-sm sm:text-base;
            }
        }
    }
}
</style>