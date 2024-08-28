<template>
    <FormWrapper>
        <template #title>
            Loan Applicant Registration
        </template>
        <BorrowerLoanApplicantForm />

        <template #bottom>
            <div class="form-group mb-0 gap-0 md:grid-cols-3 max-w-full items-center">
                <div class="">
                    <!-- empty -->
                </div>
                <div class="flex flex-col gap-y-4 col-span-2 md:pl-24">
                    <div class="control-group">
                        <input type="checkbox" id="terms" name="terms" value="" class="form-control" />
                        <label for="terms" class="full">
                            I confirm that I have read and that I agree with the terms and conditions specified in the
                            Bitguana User Agreement. </label>
                    </div>
                    <div class="control-group">
                        <input type="checkbox" id="privacyPolicy" name="privacyPolicy" value="" class="form-control" />
                        <label for="privacyPolicy" class="full">
                            I agree that my personal data be processed for the purposes of direct marketing. More
                            information about how we process personal data is included in our
                            <NuxtLink to="/" class="underline font-bold">
                                Privacy Policy.
                            </NuxtLink>
                        </label>
                    </div>

                    <Button class="primary md:max-w-[300px] mt-6 max-w-full w-full"
                        @click="navigateTo('/register/borrower/loan/real-estate')">
                        CONTINUE
                    </Button>
                </div>
            </div>
        </template>
    </FormWrapper>
</template>