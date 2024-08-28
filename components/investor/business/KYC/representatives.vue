<template>
    <KYCCryptoWalletWrapper>
        <template #title>
            Open Crypto Wallet Account 1
        </template>

        <KYCIdentity />
        <KYCTable />

        <template #bottom>
            <RegisterFooterButtons :previous-path="`/register/investor/business/UBO`"
                next-path="/register/investor/business/kyc/UBO" />
        </template>
    </KYCCryptoWalletWrapper>
</template>