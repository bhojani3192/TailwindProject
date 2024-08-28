<script lang="ts" setup>
import { data } from "./data"
import BackIcon from "~/assets/icons/backarrow_icon.vue";
import EUFlag from "~/assets/icons/flags/eu.vue";
import GeorgiaFlag from "~/assets/icons/flags/georgia.vue";
import Logo from "~/assets/images/logo.vue";
import WalletLogo from "~/assets/images/wallet-logo.vue";
</script>
<template>
    <div class="deposit-wrapper">
        <div class="deposit-box">

            <div class="top">
                <div class="md:w-1/3 md:pl-16">
                    <Button class="secondary btn-rounded" @click="navigateTo('/dashboard')">
                        <BackIcon class="mr-3" />
                        BACK
                    </Button>
                </div>
                <div class="title">
                    <h1>Add Deposit</h1>
                    <span>Depositing money into an account</span>
                </div>
                <div class="md:w-1/3"></div>
            </div>

            <div class="deposit-content">
                <div class="row" v-for="(item, index) in data" :key="index">
                    <div class="label">{{ item.label }}</div>
                    <div class="value">{{ item.value }}</div>
                </div>
            </div>

            <div class="footer">
                <div class="group">
                    <Button class="primary">
                        Send from Bank Account
                    </Button>
                </div>
            </div>
        </div>
        <p class="contact-us-text">
            If you cannot send your funds through any of the options above, please
            contact us at
            <NuxtLink to="/"> deposits@bitguana.com </NuxtLink>
            and we will assist you.
        </p>
    </div>
</template>
<style lang="scss" scoped>
@import url('./styels.scss');
</style>