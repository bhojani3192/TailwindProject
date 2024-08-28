<script setup lang="ts">
import NewsIcon from "~/assets/icons/home/news_icon.vue";
import news from "./data"
</script>
<template>
    <SliderWrapper :slides="news.length" :width-to-scroll="368">
        <template #title>
            <div class="section-title flex items-center">
                <NewsIcon />
                <h2 class="common-subtitle"><span>News</span></h2>
            </div>
        </template>

        <CompanyNewsCard v-for="(item, index) in news" :key="index" :news="item" />

    </SliderWrapper>
</template>