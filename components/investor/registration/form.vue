<script setup lang="ts">
const { userData } = useInvestorStore()
</script>

<template>
    <h1 class="form-heading mt-0 md:mt-10">Type of investor</h1>
    <div class="form-group mb-6 md:mb-10">
        <label>Type of investor</label>
        <div class="flex flex-col gap-y-4">
            <div class="control-group">
                <input type="radio" v-model="userData.typeOfInvestor" id="business" name="typeOfInvestor"
                    value="business" class="form-control" />
                <label for="business"> Business/Legal person </label>
            </div>
            <div class="control-group">
                <input type="radio" v-model="userData.typeOfInvestor" id="individual" name="typeOfInvestor"
                    value="individual" class="form-control" />
                <label for="individual"> Individual/natural person </label>
            </div>
        </div>
    </div>

    <div class="form-group mb-6 md:mb-10">
        <label>Currencies intended to be used
            for investment purposes</label>
        <div class="flex flex-col gap-y-4">
            <div class="control-group">
                <input type="checkbox" v-model="userData.currency" id="USDT" value="USDT" class="form-control" />
                <label for="USDT"> USDT </label>
            </div>
            <div class="control-group">
                <input type="checkbox" v-model="userData.currency" id="BTC" value="BTC" class="form-control" />
                <label for="BTC"> BTC </label>
            </div>
            <div class="control-group">
                <input type="checkbox" v-model="userData.currency" id="ETH" value="ETH" class="form-control" />
                <label for="ETH"> ETH </label>
            </div>
        </div>
    </div>

    <div class="form-group mb-6 md:mb-10">
        <label>Expected investment amount/s</label>
        <div class="flex flex-col gap-y-4">
            <div class="control-group">
                <input type="radio" v-model="userData.investmentAmount" id="1" name="investmentAmount"
                    value="Below USDT 5,000" class="form-control" />
                <label for="1"> Below USDT 5,000 </label>
            </div>
            <div class="control-group">
                <input type="radio" v-model="userData.investmentAmount" id="2" name="investmentAmount"
                    value="USDT 5,001 to USDT 25,000" class="form-control" />
                <label for="2"> USDT 5,001 to USDT 25,000 </label>
            </div>
            <div class="control-group">
                <input type="radio" v-model="userData.investmentAmount" id="3" name="investmentAmount"
                    value="USDT 25,001 to USDT 100,000" class="form-control" />
                <label for="3"> USDT 25,001 to USDT 100,000 </label>
            </div>
            <div class="control-group">
                <input type="radio" v-model="userData.investmentAmount" id="5" name="investmentAmount"
                    value="USDT 100,001 to USDT 1 million" class="form-control" />
                <label for="5"> USDT 100,001 to USDT 1 million </label>
            </div>
            <div class="control-group">
                <input type="radio" v-model="userData.investmentAmount" id="4" name="investmentAmount"
                    value="USDT 1 million to USDT 5 million" class="form-control" />
                <label for="4"> USDT 1 million to USDT 5 million </label>
            </div>
            <div class="control-group">
                <input type="radio" v-model="userData.investmentAmount" id="6" name="investmentAmount"
                    value="Over USDT 5 million" class="form-control" />
                <label for="6"> Over USDT 5 million </label>
            </div>
        </div>
    </div>

    <hr />

    <h1 class="form-heading">Contact email</h1>
    <div class="form-group items-center">
        <label for="emailAddress">Email address</label>
        <input class="form-control" v-model="userData.emailAddress" type="email" id="emailAddress" name="emailAddress">
    </div>

    <hr />

    <h1 class="form-heading">Contact phone number</h1>
    <div class="form-group items-center">
        <label for="phoneNumber">Phone</label>
        <div class="grid grid-flow-col">
            <input class="form-control max-w-[128px] w-[96px] sm:w-full" type="number" max="10" id="countryCode"
                name="countryCode" value="">
            <input class="form-control w-[188px] sm:w-full" type="number" max="10" id="phoneNumber" name="phoneNumber"
                value="">
        </div>
    </div>
</template>