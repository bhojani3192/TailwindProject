<script setup lang="ts">
import logo from '~/assets/images/lg-logo.png';
</script>
<template>
    <section id="company-about">
        <div class="container">
            <div class="flex flex-wrap md:flex-nowrap justify-between items-center">
                <div class="w-full md:w-1/2">
                    <h1 class="section-title"> About The Company</h1>
                    <p class="description">At Bitguana we connect investors - private persons
                        and institutions - to loans issued by digital consumer
                        finance companies from various European countries
                        in one online P2P investment marketplace.</p>
                </div>
                <div class="w-1/2 flex justify-center company-logo">
                    <img :src="logo" alt="company about logo" />
                </div>
            </div>
            <div class="mt-6 md:mt-10">
                <p>It all started out with an idea that investing should be easier and more rewarding for the investor,
                    regardless of their location or the
                    volume of available capital. With the near-endless possibilities the digital world has to offer, the
                    team behind Bitguana pooled their
                    know-how, skills and energy to bring to life the idea that is simple borderless P2P marketplace.
                    Bitguana is not another
                    intermediary for asset management, but an investment platform combining trustworthy borrowers from the
                    European new age
                    digital banking industry with investors who can benefit from this innovative financing opportunity. We
                    offer fair returns and an
                    investment environment where risks are controlled. Without any unnecessary fees, of course.</p>
            </div>
             <div class=" flex justify-center mobile-logo md:hidden mt-6">
                    <img :src="logo" alt="company about logo" />
                </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    @apply bg-black-solid-50 py-10 lg:py-36 flex-wrap md:flex-nowrap;

    h1.section-title {
        @apply text-2xl md:text-[32px] font-bold;
    }

    p.description {
        @apply max-w-[509px] mt-6 md:mt-8 text-sm md:text-xl font-medium;
    }

    .company-logo{
        @apply hidden md:block; 
    }
}
</style>