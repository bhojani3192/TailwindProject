<template>
    <form action="" class="mt-10">
        <div class="form-group">
            <label for="IBAN">IBAN</label>
            <input class="form-control" type="text" id="IBAN" name="IBAN" value="">
        </div>
        <div class="form-group">
            <label for="SWIFT">BIC/SWIFT</label>
            <input class="form-control" type="text" id="SWIFT" name="SWIFT" value="">
        </div>
        <div class="form-group">
            <label for="bankName">Bank Name</label>
            <input class="form-control" type="text" id="bankName" name="bankName" value="">
        </div>
        <div class="form-group">
            <label for="bankAddress">Bank Address</label>
            <input class="form-control" type="text" id="bankAddress" name="bankAddress" value="">
        </div>
        <div class="form-group">
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
    @apply items-center;

    input.form-control {
        @apply bg-white-500 border border-black-transparent-300;
    }
}
</style>