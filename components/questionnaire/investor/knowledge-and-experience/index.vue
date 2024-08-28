<template>
    <FormWrapper>
        <template #title>
            Information about your knowledge and experience
        </template>

        <QuestionnaireInvestorKnowledgeAndExperienceForm />

        <template #bottom>
            <RegisterFooterButtons previous-path="/questionnaire/investor"
                next-path="/questionnaire/investor/kyc-information" />
        </template>
    </FormWrapper>
</template>