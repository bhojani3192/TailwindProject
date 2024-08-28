<template>
    <FormWrapper>
        <template #title>
            Personal Information
        </template>
        <InvestorIndividualForm />
        <template #bottom>
            <RegisterFooterButtons previous-path="/register/investor" next-path="/register/investor/individual/kyc" />
        </template>
    </FormWrapper>
</template>