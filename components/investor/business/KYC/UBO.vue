<template>
    <KYCCryptoWalletWrapper type="KYB">
        <template #title>
            Open Crypto Wallet Account 2
        </template>

        <KYCIdentity />
        <KYCTable />

        <template #bottom>
            <RegisterFooterButtons previous-path="/register/investor/business/kyc/representatives"
                next-path="/register/investor/business/complete" />
        </template>
    </KYCCryptoWalletWrapper>
</template>