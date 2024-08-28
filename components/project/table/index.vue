<template>
    <ProjectTableDesktop :data="$props.data" class="hidden lg:flex" :on-navigate="onNavigate" />
    <ProjectTablePhone :data="$props.data" class="grid lg:hidden" :on-navigate="onNavigate" />
</template>

<script lang="ts" setup>
import type { projectDataType } from '../types';

defineProps<{
    data: projectDataType[]
    onNavigate: (id: number) => void
}>()
</script>