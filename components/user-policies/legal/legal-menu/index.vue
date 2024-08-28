<template>
    <section class="">
        <div class="lg:border lg:border-black-solid-200 lg:rounded-3xl lg:drop-shadow-md bg-black-solid-50 w-[320px] lg:h-[361px] sm:pb-10 xs:pb-10">
            <div class="lg:p-10">
                <h1 class="font-bold text-xl">
                    Legal
                </h1>
                <div class="xs:overflow-auto sm:overflow-auto lg:overflow-visible xs:w-[350px] sm:w-[350px]">                    
                    <div class="profile-menu pt-5">
                        <ul class="flex lg:flex-col lg:gap-4 xs:gap-6 sm:gap-6 font-bold text-sm">
                            <li>
                                <NuxtLink to="user-agreement" :active-class="`active`" @click="deactivatePrivacyPolicy">
                                    User Agreement
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="privacy-policy" :active-class="`active`" @click="activatePrivacyPolicy">
                                    Privacy Policy
                                </NuxtLink>
                                <div v-if="privacyPolicyActive" class="overflow-auto">
                                    <ul class="privacy-item">
                                            <li >
                                                <NuxtLink to="#" :class="{ 'active': activeListItem === 1 }" @click="setActiveListItem(1)">
                                                    Website
                                                </NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="#" :class="{ 'active': activeListItem === 2 }" @click="setActiveListItem(2)">
                                                    For website visitors
                                                </NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="#" :class="{ 'active': activeListItem === 3 }" @click="setActiveListItem(3)">
                                                    For Persons Submitting Enquiries
                                                </NuxtLink>
                                            </li>
                                            <li >
                                                <NuxtLink to="#" :class="{ 'active': activeListItem === 4 }" @click="setActiveListItem(4)">
                                                    For Employee Candidates
                                                </NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="#" :class="{ 'active': activeListItem === 5 }" @click="setActiveListItem(5)">
                                                    For Marketing content
                                                </NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink to="#" :class="{ 'active': activeListItem === 6 }" @click="setActiveListItem(6)">
                                                    For Investors
                                                </NuxtLink>
                                            </li>
                                </ul>
                                </div>
                            </li>
                            <li>
                                <NuxtLink to="cookie-policy" :active-class="`active`" @click="deactivatePrivacyPolicy">
                                    Cookie Policy
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const privacyPolicyActive = ref(false);
const activeListItem = ref(null);
const privacyPolicyItemSelected = ref(false);

function activatePrivacyPolicy() {
    privacyPolicyActive.value = true;
}

function deactivatePrivacyPolicy() {
    privacyPolicyActive.value = false;
    activeListItem.value = null;
}

function setActiveListItem(item) {
    activeListItem.value = item;
    if (item !== null) {
        privacyPolicyActive.value = true;
    }
}

watch(activeListItem, () => {
    privacyPolicyItemSelected.value = activeListItem.value !== null;
});
</script>

<style lang="scss" scoped>
.profile-menu {
    a {
        @apply font-bold text-black-solid-500 flex items-center sm:justify-center xs:justify-center lg:justify-normal;
    }

    a.active {
        @apply text-brand-solid-500 relative;

        &:not(privacyPolicyItemSelected)::before {
            @apply lg:absolute lg:content-[''] lg:w-[7px] lg:h-[30px] lg:bg-brand-gradient lg:-left-10 lg:rounded-r-lg;
        }
    }
}

.privacy-item {
    @apply xs:flex justify-between sm:flex lg:block lg:relative sm:absolute xs:absolute xs:w-[250px] whitespace-nowrap sm:w-[250px] overflow-y-auto max-h-[300px];
    a {
        @apply lg:font-normal xs:font-bold sm:font-bold text-black-solid-500 flex items-center text-xs lg:p-1 sm:relative xs:relative sm:mr-8 xs:mr-8 lg:mr-0 lg:mt-0 sm:mt-2 xs:mt-2;
    }
    a.active {
        @apply text-brand-solid-500 sm:relative;
    }
}

</style>
