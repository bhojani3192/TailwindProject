<script setup lang="ts">
import FaceKycIcon from "~/assets/icons/home/face_kyc_icon.vue";
import FingerKycIcon from "~/assets/icons/home/finger_kyc_icon.vue"
import RegisterIcon from "~/assets/icons/home/register_icon.vue";
</script>

<template>
    <section class="register-wrapper bg-brand-solid-50 py-10 md:py-16">
        <div class="container">
            <div class=" row-main-section   flex flex-wrap lg:flex-nowrap">
                <div class="section-title-wrap">
                    <div class="section-title flex items-center">
                        <RegisterIcon />
                        <h2 class="common-subtitle"><span>Register</span> at Bitguana
                        </h2>
                    </div>
                    <p class="section-description text-black-solid-400 max-w-[520px]">
                        To get started, register to open an account at Bitguana. The onboarding process can be completed
                        conveniently online in a few minutes
                    </p>

                    <h4 class="mt-6 md:mt-16 section-subtitle max-w-[520px] md:w-[70%]">
                        <b>Identify yourself </b> in just a <b>few clicks </b> and
                        <b>get yours </b> <b>Bitguana account </b> opened <b>today</b>
                    </h4>
                    <NuxtLink to="/register" class="btn primary mt-6 md:mt-10 w-fit">START REGISTRATION</NuxtLink>
                </div>
                <div class="register-img">
                    <div class="register-img-wrapper">
                        <div class="register-icon absolute top-0 -left-[25px]">
                            <FaceKycIcon />
                        </div>
                        <div class="dragon-img">
                            <img src="~/assets/images/home/register_iguana.png" alt=""
                                class="p-9 md:p-0 left-0 right-0 mx-auto absolute top-[50%] bottom-0 -translate-y-[50%]">
                        </div>
                        <div class="register-icon absolute bottom-0 -right-[40px]">
                            <FingerKycIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.register-wrapper .section-title-wrap {
    @apply w-full lg:w-[52%] xl:w-[60%] xl:pr-[210px];
}

.register-wrapper {
    .register-img-wrapper {
        @apply w-[292px] h-[292px] md:h-[420px] md:w-[420px] rounded-full bg-brand-solid-100 relative mx-auto;

        .register-icon {
            svg {
                @apply w-24 h-24 xl:w-[144px] xl:h-[144px]
            }
        }
    }

    .btn {
        @apply text-sm sm:text-base
    }
}

.register-wrapper .register-img {
    @apply w-full lg:w-[40%] mt-10 lg:mt-0
}</style>