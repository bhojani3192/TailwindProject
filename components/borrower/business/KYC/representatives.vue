<template>
    <KYCCryptoWalletWrapper>
        <template #title>
            Open Crypto Wallet Account 1
        </template>

        <KYCIdentity />
        <KYCTable />

        <template #bottom>
            <RegisterFooterButtons previous-path="/register/borrower/business/UBO"
                next-path="/register/borrower/business/kyc/UBO" />
        </template>
    </KYCCryptoWalletWrapper>
</template>