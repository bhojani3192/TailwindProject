<script setup lang="ts">
const onLogin = async () => {
    const res = await $fetch('/api/auth/login', { method: 'POST' });
    if (res) {
        setTimeout(() => {
            navigateTo('/dashboard')
        }, 500);
    }
}
</script>
<template>
    <div class="card login-card">
        <h1 class="card-title">Log In</h1>
        <form>
            <div class="form-group">
                <input class="form-control" type="email" placeholder="Email" id="Email" name="Email" value="" />
            </div>
            <div class="form-group">
                <input class="form-control" type="password" placeholder="Password" id="password" name="password" value="" />
            </div>
            <NuxtLink to="/">Forgot Password?</NuxtLink>
            <Button class="primary mt-6 md:mt-7" @click="onLogin">LOG IN</Button>
        </form>
    </div>
</template>
<style lang="scss" scoped>
.login-card {
    @apply lg:w-1/3 md:w-[40%] w-full md:py-10 pb-8 p-6 md:px-8;

    .card-title {
        @apply text-base md:text-xl font-bold;
    }

    form {
        @apply w-full mt-5;

        a {
            @apply underline font-bold text-xs sm:text-sm text-brand-solid-500;
        }

        .form-group {
            @apply grid-cols-1 mb-4;

            .control-group {
                label {
                    @apply max-w-full w-full text-xs font-normal;

                    b {
                        @apply underline font-bold;
                    }
                }
            }
        }

        Button.btn {
            @apply w-full md:w-[216px];
        }
    }
}
</style>