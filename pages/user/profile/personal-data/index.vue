<script setup lang="ts">
useHead({
    title: 'Profile | Personal Data'
})
definePageMeta({
    layout: 'user-profile-menu'
})
</script>
<template>
    <section class="bg-black-solid-50">
        <UserProfilePersonalData />
    </section>
</template>
