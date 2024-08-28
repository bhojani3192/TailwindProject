<script lang="ts" setup>
const props = defineProps<{
    id: string,
    onChange?: (e: any) => void,
    defaultChecked?: boolean
}>()
const isChecked = ref<boolean>(props.defaultChecked || false)
</script>
<template>
    <div class="toggle-switch">
        <label :for="$props.id" class="themeSwitcherThree relative inline-flex cursor-pointer select-none items-center">
            <input v-model="isChecked" @change="$props.onChange" type="checkbox" name="toggle-switch" :id="$props.id"
                class="sr-only" />
            <div class="switch">
                <span class="sw" />
            </div>
        </label>
    </div>
</template>
<style lang="scss" scoped>
.toggle-switch {
    .switch {
        @apply rounded-[90px] p-1 flex h-8 w-14 items-center justify-center bg-black-transparent-100 gap-[4px] relative;

        .sw {
            @apply flex h-6 w-6 items-center justify-center rounded-[90px] bg-white -translate-x-3 transition-all;
        }
    }

    input[type='checkbox']:checked+.switch {
        @apply bg-brand-solid-500;

        .sw {
            @apply translate-x-3;
        }
    }
}
</style>