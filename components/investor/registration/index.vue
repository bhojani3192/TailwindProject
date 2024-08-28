<script setup lang="ts">
const { policyAndTerms, userData } = useInvestorStore()
const onNavigate = () => {
    navigateTo(`/register/investor/${userData.typeOfInvestor}`)
}
</script>

<template>
    <FormWrapper>
        <template #title>
            User Registration
        </template>

        <InvestorRegistrationForm />

        <template #bottom>
            <div class="form-group mb-0 gap-0 grid-cols-1 md:grid-cols-3 max-w-full items-start md:items-center">
                <div class="">
                    <!-- empty -->
                </div>
                <div class="flex flex-col gap-y-4 col-span-2 md:pl-24">
                    <div class="control-group">
                        <input type="checkbox" id="termsAndConditions" name="termsAndConditions"
                            v-model="policyAndTerms.termsAndConditions" class="form-control" />
                        <label for="termsAndConditions" class="full">
                            I confirm that I have read and that I agree with the terms and conditions specified in the
                            Bitguana User Agreement.
                        </label>
                    </div>
                    <div class="control-group">
                        <input type="checkbox" id="privacyPolicy" v-model="policyAndTerms.privacyPolicy"
                            name="privacyPolicy" class="form-control" />
                        <label for="privacyPolicy" class="full">
                            I agree that my personal data be processed for the purposes of direct marketing. More
                            information about how we process personal data is included in our
                            <NuxtLink to="/" class="underline font-bold">
                                Privacy Policy.
                            </NuxtLink>
                        </label>
                    </div>
                    <Button class="primary md:max-w-[300px] max-w-full w-full mt-2.5 md:mt-6"
                        @click="onNavigate()">CONTINUE</Button>
                </div>
            </div>
        </template>
    </FormWrapper>
</template>
