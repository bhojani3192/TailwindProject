<script setup lang="ts">
import { testimonial } from "./data"
</script>
<template>
    <SliderWrapper :slides="testimonial.length" :width-to-scroll="448">
        <template #title>
            What Our Clients Say
        </template>

        <div class="testimony-box" v-for="(item, index) in testimonial" :key="index">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <span>{{ item.user }}</span>
        </div>

    </SliderWrapper>
</template>
<style lang="scss" scoped>
@import url("./style.scss");
</style>