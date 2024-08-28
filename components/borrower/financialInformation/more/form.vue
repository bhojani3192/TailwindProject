<template>
    
        <div class="py-8">
            <div class="form-group items-center">
                <label for="financialProjections">
                    Please upload bank statement from no more than 3 months ago, so that we can verify the details and the
                    ownership of the bank account where the loan proceeds will be sent
                </label>
                <Fileuploader :id="`financialProjections`" />
            </div>

            <div class="form-group items-center">
                <label for="bankStatements">
                    Alternatively, you can allow us to request your bank to see your bank information. To do so, please
                    submit the request on the button below, and you will receive an email to enable us to make said request
                    to your
                </label>
                <div></div>
            </div>

            <hr class="my-10" />

            <div class="mb-10">
                <p class="sm">
                    You may submit to us any additional documents in relation to the project you intend to finance, or
                    in relation to assets that you aim to pledge.
                </p>
            </div>

            <div class="form-group items-center">
                <label for="anotherDocument">
                    Upload another document
                </label>
                <Fileuploader id="anotherDocument" />
            </div>

            <div class="form-group">
                <label for="projectTitle">
                    Type in description of document uploaded
                </label>
                <textarea name="descriptionOfDocument" id="descriptionOfDocument" cols="30" rows="10"
                    class="form-control"></textarea>
            </div>

        </div>
    
</template>