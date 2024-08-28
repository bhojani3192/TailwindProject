<script setup lang="ts">
import UploadIcon from '@/assets/icons/upload_icon.vue'
const props = defineProps<{
    id: string
    name?: string
}>()
</script>
<template>
    <div class="file-wrapper">
        <input class="form-control" type="file" :id="props.id" :name="props.name || props.id" value="">
        <div class="wrap">
            <div class="icon">
                <UploadIcon />
            </div>
            <h1> <b> Click to upload </b> or drag and drop</h1>
            <span> JPG, PNG or PDF (max. 5MB) </span>
        </div>
    </div>
</template>