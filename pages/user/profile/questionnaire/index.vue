<script setup lang="ts">
useHead({
    title: 'Profile | Questionnaire'
})
definePageMeta({
    layout: 'user-profile-menu'
})
</script>
<template>
    <section class="bg-black-solid-50">
        <div class="container md:flex md:justify-between xl:gap-5 md:flex-wrap">
            <UserProfileQuestionnaire />
        </div>
    </section>
</template>