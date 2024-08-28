<script setup lang="ts">
const { loggedIn } = useUserSession()
</script>
<template>
    <HeaderDashboard v-if="loggedIn" />
    <Header v-else />
    <section class="bg-black-solid-50 mt-20 pt-10 lg:pb-20">
        <div class="container lg:flex justify-between">
            <UserPoliciesLegalLegalMenu />
            <slot></slot>
        </div>
    </section>
    <Footer />
</template>