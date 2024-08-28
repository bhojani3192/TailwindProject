<script setup lang="ts">
const { loggedIn, fetch } = useUserSession()

onMounted(async () => {
    await fetch();
    if (!loggedIn.value) {
        navigateTo('/')
    }
})
</script>
<template>
    <HeaderDashboard />
    <div class="pt-20">
        <slot v-if="loggedIn"></slot>
    </div>
    <Footer />
</template>