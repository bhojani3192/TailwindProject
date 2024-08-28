<script setup lang="ts">
type FREQUENCY = 'monthly' | 'quarterly' | 'semi-annual' | 'annual'
type CURRENCY = 'USDT' | 'EURT' | 'BTC'
const loanFrequency = ref<FREQUENCY>('monthly')
const loanAmount = ref('0')
const loanTerm = ref('0')
const loanCurrency = ref<CURRENCY>('USDT')

const onLoanAmountChange = (amount: string) => {
    loanAmount.value = amount
}
const onLoanTermChange = (Term: string) => {
    loanTerm.value = Term
}
const onLoanFrequencyChange = (frequency: FREQUENCY) => {
    loanFrequency.value = frequency
}
const onLoanCurrencyChange = (currency: CURRENCY) => {
    loanCurrency.value = currency
}

</script>
<template>
    <div class="loan-amount mb-6">
        <div class="flex justify-between items-baseline">
            <h2>Loan Amount</h2>
            <div class="btn-group gap-3 mt0">
                <span class="amount">{{ loanAmount }}</span>
                <Button :class="loanCurrency == 'USDT' && 'active'" @click="onLoanCurrencyChange('USDT')">USDT*</Button>
                <Button :class="loanCurrency == 'EURT' && 'active'" @click="onLoanCurrencyChange('EURT')">EURT*</Button>
                <Button :class="loanCurrency == 'BTC' && 'active'" @click="onLoanCurrencyChange('BTC')">BTC*</Button>
            </div>
        </div>
        <div class="mt-3">
            <RangeSlider :id="`LoanAmountSlider`" step="100" :max="'15000'" :change="onLoanAmountChange" />
        </div>
    </div>

    <div class="loan-term mb-6">
        <div class="flex justify-between items-baseline">
            <h2>Loan Term</h2>
            <h3><span class="amount">{{ loanTerm }}</span> mo.</h3>
        </div>
        <div class="mt-3">
            <RangeSlider :id="`LoanTermSlider`" :max="'60'" :change="onLoanTermChange" />
        </div>
    </div>

    <div class="frequency">
        <h2>Frequency</h2>
        <div class="btn-group gap-3">
            <Button :class="loanFrequency == 'monthly' && `active`"
                @click="onLoanFrequencyChange('monthly')">Monthly</Button>
            <Button :class="loanFrequency == 'quarterly' && `active`"
                @click="onLoanFrequencyChange('quarterly')">Quarterly</Button>
            <Button :class="loanFrequency == 'semi-annual' && `active`"
                @click="onLoanFrequencyChange('semi-annual')">Semi-annual</Button>
            <Button :class="loanFrequency == 'annual' && `active`" @click="onLoanFrequencyChange('annual')">Annual</Button>
        </div>
    </div>

    <div class="monthly-payment mt-8">
        <h2>Monthly Payment (incl. fees)</h2>
        <span class="amount"> <b>3000</b> USDT</span>
    </div>

    <p class="disclaimer">
        *Your loan will be collected in the selected cryptocurrency, but Bitguana can
        convert it for you to fiat currency (EUR, USD, GEL) afterwards and disburse it to your bank
        account.
    </p>
</template>
<style lang="scss" scoped>
@import url("./style.scss");
</style>