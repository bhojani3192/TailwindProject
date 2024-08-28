<template>
    <FormWrapper>
        <template #title>
            Crypto Loan
        </template>
        <BorrowerLoanForCryptoForm />
        <template #bottom>
            <RegisterFooterButtons next-path="/register/borrower/company-overview"
                previous-path="/register/borrower/loan-applicant" />
        </template>
    </FormWrapper>
</template>