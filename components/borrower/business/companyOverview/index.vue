<template>
    <FormWrapper>
        <template #title>
            Company Overview
        </template>
        <BorrowerBusinessCompanyOverviewForm />
        <template #bottom>
            <RegisterFooterButtons next-path="/register/borrower/business/representatives"
                previous-path="/register/borrower/loan/real-estate" />
        </template>
    </FormWrapper>
</template>