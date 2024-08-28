<template>
    <KYCCryptoWalletWrapper type="KYB">
        <template #title>
            Open Crypto Wallet Account 2
        </template>

        <KYCIdentity />
        <KYCTable />

        <template #bottom>
            <RegisterFooterButtons previous-path="/register/borrower/business/kyc/representatives"
                next-path="/register/borrower/financial-information" />
        </template>
    </KYCCryptoWalletWrapper>
</template>