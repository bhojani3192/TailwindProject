<template>
    
        <div class="py-8">

            <div class="form-group items-center">
                <label for="cryptoAmount">Amount and type of crypto assets to be provided as collateral</label>
                <input class="form-control" type="number" id="cryptoAmount" name="cryptoAmount" value="">
            </div>

            <div class="form-group">
                <label for=""></label>
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
                    <div class="control-group">
                        <input type="radio" id="other" name="currency" value="other" class="form-control" />
                        <label for="other"> Other </label>
                    </div>
                </div>
            </div>
        </div>
    
</template>