<script lang="ts" setup>
type LOANTYPE = 'RealEstateProject' | 'CryptoLoan' | 'BusinessLoan';
const selectedLoanType = ref<LOANTYPE>('RealEstateProject')
const onSelectLoanType = (type: LOANTYPE) => {
    selectedLoanType.value = type
}
</script>

<template lang="html">
    <div class="loan-calculator-card">
        <div class="calculator">
            <h1>Loan Calculator</h1>

            <div class="loan-type mb-8">
                <h2>Loan Type</h2>
                <div class="btn-group gap-3">
                    <Button :class="selectedLoanType === 'RealEstateProject' && `active`"
                        @click="onSelectLoanType('RealEstateProject')">Real Estate Project</Button>

                    <Button :class="selectedLoanType === 'CryptoLoan' && `active`"
                        @click="onSelectLoanType('CryptoLoan')">Crypto Loan</Button>

                    <Button :class="selectedLoanType === 'BusinessLoan' && `active`"
                        @click="onSelectLoanType('BusinessLoan')">Business Loan</Button>
                </div>
            </div>

            <BorrowLoanCalculatorRealEstateProject v-if="selectedLoanType === 'RealEstateProject'" />
            <BorrowLoanCalculatorCryptoLoan v-if="selectedLoanType === 'CryptoLoan'" />
            <BorrowLoanCalculatorBusinessLoan v-if="selectedLoanType === 'BusinessLoan'" />

        </div>
    </div>
</template>
<style lang="scss" scoped>
@import url("./style.scss");
</style>