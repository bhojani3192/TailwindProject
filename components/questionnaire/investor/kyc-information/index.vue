<template>
    <FormWrapper>
        <template #title>
            KYC information for money laundering and terrorist financing prevention
        </template>

        <QuestionnaireInvestorKycInformationForm />

        <template #bottom>
            <RegisterFooterButtons previous-path="/questionnaire/investor/knowledge-and-experience"
                next-path="/questionnaire/investor/contacts-with-politics" />
        </template>
    </FormWrapper>
</template>