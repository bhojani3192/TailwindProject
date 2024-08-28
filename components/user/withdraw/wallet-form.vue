<template>
    <form action="" class="mt-6 md:mt-10">
        <div class="form-group wallet-form-group">
            <label for="walletAddress">Wallet address</label>
            <input class="form-control" type="text" id="walletAddress" name="walletAddress" value="">
        </div>
        <div class="form-group wallet-form-group">
            <label for="network">Network</label>
            <input class="form-control" type="text" id="network" name="network" value="">
        </div>
        <div class="form-group upload-doc">
            <label for="uploadDocument">
                Upload document
                <span>Please upload here a document that can confirm your ownership of the bank account or wallet to where
                    you want us to transfer your funds -e.g. a bank statement displaying the account details and your name,
                    or similar.</span>
            </label>
            <Fileuploader :id="`uploadDocument`" />
        </div>
    </form>
</template>
<style lang="scss" scoped>
.form-group {
    @apply items-center mb-4  md:mb-6;

    input.form-control {
        @apply bg-white-500 border border-black-transparent-300 font-bold;
    }
}

.wallet-form-group{
   @apply relative;
    label{
        @apply absolute top-[6px] left-4  md:relative md:top-[unset]
 md:left-[unset] md:text-sm text-[10px] sm:text-xs  text-black-transparent-400 sm:text-black-solid-500   }
 input{
    @apply pl-4 md:pl-6 md:pt-4 pt-8 }
}

.upload-doc{
    label{
        @apply font-bold;
        span{
            @apply mt-2 text-xs sm:text-sm
        }
    }
}
</style>