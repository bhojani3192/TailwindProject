<template>
    <FormWrapper>
        <template #title>
            Information about the real estate property
        </template>
        <BorrowerLoanForRealEstateForm />
        <template #bottom>
            <RegisterFooterButtons next-path="/register/borrower/business/company-overview"
                previous-path="/register/borrower/loan-applicant" />
        </template>
    </FormWrapper>
</template>