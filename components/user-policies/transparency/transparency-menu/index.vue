<script setup lang="ts">
</script>
<template>
    <section class="">
        <div class="lg:border lg:border-black-solid-200 lg:rounded-3xl lg:drop-shadow-md bg-black-solid-50 w-[304px] lg:h-[282px] sm:pb-10 xs:pb-10">
            <div class="lg:p-10">
                <h1 class="font-bold text-xl">
                    Transparency
                </h1>
                <div class="xs:overflow-auto sm:overflow-auto lg:overflow-visible xs:w-[375px] sm:w-[375px]">                    
                    <div class="profile-menu pt-5">
                        <ul class="xs:flex sm:flex lg:block text-sm">
                            <li >
                                <NuxtLink to="dispute-management" :active-class="`active`">
                                    Rules for dispute management
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="interest-policy" :active-class="`active`">
                                    Conflicts of interest policy
                                </NuxtLink>
    
                            </li>
                            <li>
                                <NuxtLink to="recovery-policy" :active-class="`active`">
                                    Debt recovery policy
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="fees" :active-class="`active`">
                                    Fees
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="investment-risk" :active-class="`active`">
                                    Investment risk
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.profile-menu {
    a {
        @apply font-bold text-black-solid-500 flex items-center whitespace-nowrap mr-8 lg:mt-3 xs:justify-center sm:justify-center lg:justify-normal;
    }

    a.active {
        @apply text-brand-solid-500 relative;

        &::before {
            @apply lg:absolute lg:content-[''] lg:w-[7px] lg:h-[30px] lg:bg-brand-gradient lg:-left-10 lg:rounded-r-lg;
        }
    }
}
</style>