<template>

    <h1 class="form-heading">Select type of loan applicant</h1>
    <div class="form-group">
        <label for="">Type of loan</label>
        <div class="flex flex-col gap-y-4">
            <div class="control-group">
                <input type="radio" id="business" name="typeOfLoanApplicant" value="business" class="form-control" />
                <label for="business"> Business/Legal person </label>
            </div>
            <div class="control-group">
                <input type="radio" id="individual" name="typeOfLoanApplicant" value="individual"
                    class="form-control" />
                <label for="individual"> Individual/natural person </label>
            </div>
        </div>
    </div>
    <hr class="my-10" />

    <h1 class="form-heading">Desired maximum loan amount</h1>
    <div class="form-group">
        <label for="amount">Amount</label>
        <input class="form-control" type="number" id="amount" name="amount" value="">
    </div>
    <div class="form-group">
        <label for="">Currency</label>
        <div class="flex flex-col gap-y-4">
            <div class="control-group">
                <input type="radio" id="USDT" name="currency" value="USDT" class="form-control" />
                <label for="USDT"> USDT </label>
            </div>
            <div class="control-group">
                <input type="radio" id="BTC" name="currency" value="BTC" class="form-control" />
                <label for="BTC"> BTC </label>
            </div>
            <div class="control-group">
                <input type="radio" id="ETH" name="currency" value="ETH" class="form-control" />
                <label for="ETH"> ETH </label>
            </div>
        </div>
    </div>
    <hr class="my-10" />

    <h1 class="form-heading"> Minimum loan amount acceptable</h1>
    <div class="form-group">
        <label for="minimumLoanamount">Amount</label>
        <input class="form-control" type="number" id="minimumLoanamount" name="minimumLoanamount" value="">
    </div>
    <div class="form-group">
        <label for="">Currency</label>
        <div class="flex flex-col gap-y-4">
            <div class="control-group">
                <input type="radio" id="minimumLoanUsdt" name="currency" value="USDT" class="form-control" />
                <label for="minimumLoanUsdt"> USDT </label>
            </div>
            <div class="control-group">
                <input type="radio" id="minimumLoanBtc" name="currency" value="BTC" class="form-control" />
                <label for="minimumLoanBtc"> BTC </label>
            </div>
            <div class="control-group">
                <input type="radio" id="minimumLoanEth" name="currency" value="ETH" class="form-control" />
                <label for="minimumLoanEth"> ETH </label>
            </div>
        </div>
    </div>
    <hr class="my-10" />

    <h1 class="form-heading"> Loan term </h1>
    <div class="form-group">
        <label for="loanTerm">Loan term</label>
        <input class="form-control" type="number" id="loanTerm" name="loanTerm" value="">
    </div>
    <hr class="my-10" />

    <h1 class="form-heading">Select type of loan</h1>
    <div class="form-group">
        <label for="">Type of loan</label>
        <div class="flex flex-col gap-y-4">
            <div class="control-group">
                <input type="radio" id="realEstateProject" name="typeOfLoan" value="realEstateProject"
                    class="form-control" />
                <label for="realEstateProject"> Real estate project </label>
            </div>
            <div class="control-group">
                <input type="radio" id="businessLoan" name="typeOfLoan" value="businessLoan" class="form-control" />
                <label for="businessLoan"> Business loan </label>
            </div>
            <div class="control-group">
                <input type="radio" id="cryptoLoan" name="typeOfLoan" value="cryptoLoan" class="form-control" />
                <label for="cryptoLoan"> Crypto loan </label>
            </div>
        </div>
    </div>
    <hr class="my-10" />

    <h1 class="form-heading">Contact email</h1>
    <div class="form-group">
        <label for="email">Email address</label>
        <input class="form-control" type="email" id="email" name="email" value="">
    </div>
    <hr class="my-10" />

    <h1 class="form-heading">Contact phone number</h1>
    <div class="form-group">
        <label for="phoneNumber">Phone</label>
        <div class="grid grid-flow-col">
            <input class="form-control max-w-[128px] w-[96px] sm:w-full" type="number" max="10" id="countryCode"
                name="countryCode" value="">
            <input class="form-control w-[188px] sm:w-full" type="number" max="10" id="phoneNumber" name="phoneNumber"
                value="">
        </div>
    </div>


</template>