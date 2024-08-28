<template>
    <KYCCryptoWalletWrapper>
        <template #title>
            Open Crypto Wallet Account
        </template>

        <KYCIdentity />

        <template #bottom>
            <RegisterFooterButtons previous-path="/register/investor/individual"
                next-path="/register/investor/individual/complete" />
        </template>
    </KYCCryptoWalletWrapper>
</template>