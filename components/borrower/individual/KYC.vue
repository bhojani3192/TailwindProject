<template>
    <KYCCryptoWalletWrapper>
        <template #title>
            Open Crypto Wallet Account
        </template>

        <KYCIdentity />

        <template #bottom>
            <RegisterFooterButtons previous-path="/register/borrower/individual/personal-information"
                next-path="/register/borrower/complete" />
        </template>
    </KYCCryptoWalletWrapper>
</template>