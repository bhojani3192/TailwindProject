<script setup lang="ts">
useHead({
    title: 'Profile | Agreements'
})
definePageMeta({
    layout: 'user-profile-menu',
})
</script>
<template>
    <section class="bg-black-solid-50">
        <div class="container lg:flex">
            <UserProfileAgreements />
        </div>
    </section>
</template>