<template>
    <FormWrapper>
        <template #title>
            Financial Information
        </template>
        <BorrowerFinancialInformationForm />
        <template #bottom>
            <RegisterFooterButtons previous-path="/register/borrower/business/kyc/UBO"
                next-path="/register/borrower/financial-information/more" />
        </template>
    </FormWrapper>
</template>