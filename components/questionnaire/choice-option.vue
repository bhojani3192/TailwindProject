<script setup lang="ts">
import type { QuestionnaireType } from "./types";
const { data, divider } = defineProps<{
    data: QuestionnaireType,
    divider?: boolean,
}>()
const { id, multiple, question, options } = data
const model = defineModel()
</script>

<template>
    <div class="form-group mb-6 md:mb-10">
        <label>{{ question }}</label>
        <div class="flex flex-col gap-y-4">

            <div class="control-group" v-for="(item, index) in options" :key="index">
                <input :type="multiple ? 'checkbox' : 'radio'" :id="id + '_' + item.label" :value="item.value"
                    class="form-control" :name="id || question" v-model="model" />
                <label :for="id + '_' + item.label"> {{ item.label }} </label>
            </div>

        </div>
    </div>
    <hr v-if="divider">
</template>

<style lang="scss" scoped>
hr {
    @apply mb-10;
}
</style>