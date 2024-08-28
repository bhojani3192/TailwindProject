<script setup lang="ts">
import registerIguana from "~/assets/images/home/register_iguana.png";
</script>
<template>
    <section id="login">
        <div class="container md:py-16 py-10">
            <div class="flex flex-wrap md:flex-nowrap justify-between gap-6 lg:gap-8">
                <LoginForm />
                <div class="card register-card px-6 pt-8 pb-10 md:py-16">
                    <div class="img-wrap">
                        <img :src="registerIguana" alt="Register Iguana">
                    </div>
                    <h1 class="section-title">Don't have an account?</h1>
                    <Button class="primary" @click="navigateTo('/register')">Register Now</Button>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    .register-card {
        @apply w-full md:w-[60%] lg:w-2/3 flex flex-col justify-center items-center bg-brand-transparent-100;

        .img-wrap {
            @apply w-20 h-20 sm:h-[140px] sm:w-[140px];
        }

        .section-title {
            @apply text-brand-solid-500 mt-6 mb-4 md:mt-7 md:mb-9 text-base md:text-xl;
        }

        .btn.primary {
            @apply w-full md:w-[192px];
        }
    }
}
</style>