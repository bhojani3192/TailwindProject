
<script setup lang="ts">
import Logo from '~/assets/images/logo.vue';

const onScrollTop = () => {
    window.scrollTo(0, 0);
}
</script>
<template>
    <footer class="footer-wrapper">
        <button class="scrollto-top" @click="onScrollTop" aria-label="scrollto-top">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 15L12 9L6 15" stroke="#364140" stroke-opacity="0.64" stroke-width="3" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </button>
        <div class="container">
            <NuxtLink to="/" class="md:mb-2.5  mb-10 inline-block" aria-label="footer homepage link">
                <Logo />
            </NuxtLink>
            <div class="row flex flex-wrap mb-12">
                <div class="company-wrap">
                    <div class="address">
                        <div class="office-address">
                            <h5 class="box-content-title">Bitguana LLC</h5>
                            <p>Paseo de la Castellana 18
                                28046 Madrid
                                Spain</p>
                        </div>
                        <div class="office-address ">
                            <h5 class="box-content-title">Bitguana LLC</h5>
                            <p>Paseo de la Castellana 18
                                28046 Madrid
                                Spain</p>
                        </div>
                        <div class="office-address ">
                            <h5 class="box-content-title">Bitguana LLC</h5>
                            <p>Paseo de la Castellana 18
                                28046 Madrid
                                Spain</p>
                        </div>
                        <div class="office-address ">
                            <h5 class="box-content-title">Bitguana LLC</h5>
                            <p>Paseo de la Castellana 18
                                28046 Madrid
                                Spain</p>
                        </div>
                    </div>
                </div>
                <div class="link-wrapper flex">
                    <div class="menu-link">
                        <h6 class="footer-title">Menu</h6>
                        <ul class="mt-[22px]">
                            <li>
                                <a href="#0">Home</a>
                            </li>
                            <li>
                                <a href="#0">Borrow</a>
                            </li>
                            <li>
                                <a href="#0">Invest</a>
                            </li>
                            <li>
                                <a href="#0">Company</a>
                            </li>
                        </ul>
                    </div>
                    <div class="leagal-link">
                        <h6 class="footer-title">Legal</h6>
                        <ul class="mt-[22px]">
                            <li>
                                <a href="/legal/user-agreement">User agreement</a>
                            </li>
                            <li>
                                <a href="/legal/privacy-policy">Privacy policy</a>
                            </li>
                            <li>
                                <a href="/legal/cookie-policy">Cookie policy</a>
                            </li>
                        </ul>
                    </div>
                    <div class="transparency-link">
                        <h6 class="footer-title">Transparency</h6>
                        <ul class="mt-[22px]">
                            <li>
                                <a href="/transparency/dispute-management">Rules for dispute management</a>
                            </li>
                            <li>
                                <a href="/transparency/interest-policy">Conflicts of interest policy</a>
                            </li>
                            <li>
                                <a href="/transparency/recovery-policy">Debt recovery policy</a>
                            </li>
                            <li>
                                <a href="/transparency/fees">Fees</a>
                            </li>
                            <li>
                                <a href="/transparency/investment-risk">Investment risky</a>
                            </li>
                            <li>
                                <a href="#0">F.A.Q</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div clsss="bottom-footer">
                <p class="text-[12px] text-black-solid-400">Copyright © 2024 Bitguana. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
@import "./footer.scss";
</style>