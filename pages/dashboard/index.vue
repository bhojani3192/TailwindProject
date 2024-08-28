<script setup lang="ts">

useHead({
    title: 'Dashboard',
    meta: [
        { name: 'description', content: 'Get more for your Crypto currencies by investing them in the real economy.' }
    ],
})
definePageMeta({
    layout: 'dashboard'
})

</script>
<template>
    <UserOverview />
</template>