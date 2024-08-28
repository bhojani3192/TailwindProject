<script setup lang="ts">
import news from "./data"
</script>
<template>
    <SliderWrapper :slides="news.length" :width-to-scroll="368" :section-id="`company-news`">
        <template #title>
            Latest News
        </template>

        <CompanyNewsCard v-for="(item, index) in news" :key="index" :news="item" />

    </SliderWrapper>
</template>