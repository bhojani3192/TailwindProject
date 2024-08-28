<script setup lang="ts">
import points from './points';
</script>

<template>
    <div class="pt-3">
        <p class="description">
            When marking your answers, please make sure to be familiar with the terms "politically exposed" "important
            public duties" "close family members" and "close assistant", as defined below:
        </p>

        <p class="description">
            Politically exposed persons mean natural persons who are or have been entrusted with prominent public
            functions and immediate family members, or persons known to be close associates of such persons.
        </p>

        <div class="points">
            <p>Prominent public function means the functions in your place of residence, of:</p>

            <ul>
                <li v-for="(item, index) in points" :key="index">
                    {{ item }}
                </li>
            </ul>

            <p>Close family members mean the spouse, or a person with whom a partnership is registered (hereinafter the
                common-law spouse), parents, siblings,
                children and spouse's children's spouses or common-law spouse's
                children.</p>
        </div>
        <hr class="mt-10" />
    </div>
</template>

<style scoped lang="scss">
.description {
    @apply font-semibold mt-5;
}

.points {
    @apply mt-6 text-sm font-medium;

    ul {
        @apply py-3 pl-4 list-disc;

        li {
            @apply mb-[6px]
        }
    }
}
</style>