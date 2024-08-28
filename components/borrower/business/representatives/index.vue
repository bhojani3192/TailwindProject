<template>
    <FormWrapper>
        <template #title>
            Authorized signatories/representatives' identification
        </template>
        <BorrowerBusinessRepresentativesForm />

        <template #bottom>
            <RegisterFooterButtons next-path="/register/borrower/business/UBO"
                previous-path="/register/borrower/business/company-overview" />
        </template>
    </FormWrapper>
</template>