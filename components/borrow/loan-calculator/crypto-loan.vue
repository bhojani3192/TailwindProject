<script setup lang="ts">
type CURRENCY = 'USDT' | 'EURT' | 'BTC'
const loanAmount = ref('0')
const loanCurrency = ref<CURRENCY>('USDT')

const onLoanAmountChange = (amount: string) => {
    loanAmount.value = amount
}
const onLoanCurrencyChange = (currency: CURRENCY) => {
    loanCurrency.value = currency
}

</script>
<template>
    <div class="property-estimated-value mb-6">
        <div class="flex justify-between items-center">
            <h2>Collateral</h2>
            <h2>All: <span class="text-brand-solid-500 font-bold"> 2.880931 BTC</span></h2>
        </div>
        <div class="mt-3 select-wrap">
            <input type="number" id="propertyEstimatedValue" class="" value="200000"
                aria-label="Property Estimated Value input" />
            <select class="" name="" id="property-estimated" aria-label="property-estimated">
                <option value="">USD</option>
                <option value="">USD</option>
                <option value="">USD</option>
            </select>
        </div>
    </div>

    <div class="loan-amount mb-6">
        <div class="flex justify-between items-baseline">
            <h2>Loan Amount</h2>
            <div class="btn-group mt0 gap-3">
                <span class="amount">{{ loanAmount }}</span>
                <Button :class="loanCurrency == 'USDT' && 'active'" @click="onLoanCurrencyChange('USDT')">USDT*</Button>
                <Button :class="loanCurrency == 'EURT' && 'active'" @click="onLoanCurrencyChange('EURT')">EURT*</Button>
                <Button :class="loanCurrency == 'BTC' && 'active'" @click="onLoanCurrencyChange('BTC')">BTC*</Button>
            </div>
        </div>
        <div class="mt-3">
            <RangeSlider :id="`LoanAmountSlider`" step="100" max="15000" :change="onLoanAmountChange" />
        </div>
    </div>

    <div class="frequency plan">
        <h2>Select Plan</h2>
        <div class="btn-group gap-3">
            <Button class="active">
                <div class="pl-3">
                    <h1>90%</h1>
                    <span>30 days </span>
                    <span>5% PDL</span>
                </div>
            </Button>
            <Button>
                <div class="pl-3">
                    <h1>70%</h1>
                    <span>61 days </span>
                    <span>25% PDL</span>
                </div>
            </Button>
            <Button>
                <div class="pl-3">
                    <h1>90%</h1>
                    <span>30 days </span>
                    <span>5% PDL</span>
                </div>
            </Button>
        </div>
    </div>

    <div class="grid grid-flow-row my-8 gap-3">
        <div class="flex justify-between">
            <div class="label">Loan-to-Value</div>
            <div class="value"> <b>90</b> %</div>
        </div>
        <div class="flex justify-between">
            <div class="label">Price Down Limit</div>
            <div class="value">5% <b>32,551.65</b> USDT</div>
        </div>
        <div class="flex justify-between">
            <div class="label">Interest</div>
            <div class="value">2.1% <b>384.00</b> USDT</div>
        </div>
        <div class="flex justify-between">
            <div class="label">Repayment</div>
            <div class="value"><b>1,570.68</b> USDT</div>
        </div>
        <div class="flex justify-between">
            <div class="label">Term</div>
            <div class="value"><b>30 Days</b></div>
        </div>
        <div class="flex justify-between">
            <div class="label">Repay until</div>
            <div class="value"><b>09 September, 2023, 15:37</b> GMT+3</div>
        </div>
        <div class="flex justify-between">
            <div class="label">Repay option</div>
            <div class="value">Monthly</div>
        </div>
    </div>

    <div class="monthly-payment mt-8">
        <h2>Monthly Payment (incl. fees)</h2>
        <span class="amount"> <b>933.19 USDT</b> /mo</span>
    </div>

    <p class="disclaimer">
        *Your loan will be collected in the selected cryptocurrency, but Bitguana can
        convert it for you to fiat currency (EUR, USD, GEL) afterwards and disburse it to your bank
        account.
    </p>
</template>
<style lang="scss" scoped>
@import url("./style.scss");

.value {
    @apply text-black-transparent-400 font-normal;

    b {
        @apply text-black-solid-500 font-medium;
    }
}

.frequency.plan {
    .btn-group {
        .btn {
            @apply max-h-[80px] h-[80px] rounded-xl py-3 px-6 justify-start;

            h1 {
                @apply m-0 text-base font-bold text-left;
            }

            span {
                @apply block text-xs text-left;
            }
        }
    }
}
</style>