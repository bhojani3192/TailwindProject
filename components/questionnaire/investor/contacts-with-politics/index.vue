<template>
    <FormWrapper>
        <template #title>
            Information on contacts with politically exposed persons
        </template>

        <QuestionnaireInvestorContactsWithPoliticsNotice />
        <QuestionnaireInvestorContactsWithPoliticsForm />

        <template #bottom>
            <RegisterFooterButtons previous-path="/questionnaire/investor/kyc-information"
                next-path="/questionnaire/investor/complete" />
        </template>
    </FormWrapper>
</template>