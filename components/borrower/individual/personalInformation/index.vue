<template>
    <FormWrapper>
        <template #title>
            Personal Information
        </template>
        <BorrowerIndividualPersonalInformationForm />
        <template #bottom>
            <RegisterFooterButtons previous-path="/register/borrower/loan/real-estate"
                next-path="/register/borrower/individual/kyc" />
        </template>
    </FormWrapper>
</template>