<script setup lang="ts">
useHead({
    title: 'Profile | Identification'
})
definePageMeta({
    layout: 'user-profile-menu',
})
</script>
<template>
    <section class="bg-black-solid-50">
        <div class="container xs:px-0 md:flex md:justify-between md:flex-wrap xl:gap-5 xl:flex-nowrap">
            <UserProfileIdentification />
        </div>
    </section>
</template>