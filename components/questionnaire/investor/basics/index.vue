<template>
    <FormWrapper>
        <template #title>
            About You
        </template>

        <QuestionnaireInvestorBasicsForm />

        <template #bottom>
            <RegisterFooterButtons next-path="/questionnaire/investor/knowledge-and-experience" previous-path="/" />
        </template>
    </FormWrapper>
</template>