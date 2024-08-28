<script lang="ts" setup>
const project: number[] = Array(15).fill(1)
</script>
<template>
    <div class="project-grid" id="grid-card-wrap">
        <ProjectCardPortfolio v-for="(item, index) in project" :key="index" />
    </div>
</template>