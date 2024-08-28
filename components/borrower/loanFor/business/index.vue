<template>
    <FormWrapper>
        <template #title>
            Short description of the business loan project
        </template>
        <BorrowerLoanForBusinessForm />
        <template #bottom>
            <RegisterFooterButtons next-path="/register/borrower/company-overview"
                previous-path="/register/borrower/loan-applicant" />
        </template>
    </FormWrapper>
</template>