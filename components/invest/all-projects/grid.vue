<script lang="ts" setup>
const project: number[] = Array(15).fill(1)
</script>
<template>
    <div class="project-grid" id="grid-card-wrap">
        <ProjectCard v-for="(item, index) in project" :key="index" :class="index % 4 && `complete`" />
    </div>
</template>