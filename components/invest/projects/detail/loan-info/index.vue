<template>
    <section>
        <div class="card container rounded-2xl border border-black-solid-200">
            <h2>Loan Information</h2>
            <div class="lg:flex">
                <div class="lg:w-2/4 xs:contents lg:block">
                    <div class="flex xs:items-center justify-between px-8 pb-4" v-for="(item, index) in firstHalfToShow" :key="index">
                        <span class="lg:text-sm xs:text-xs xs:w-[220px]">{{ item.title }}</span>
                        <span class="lg:text-sm xs:text-xs font-bold xs:text-right">{{ item.desc }}</span>
                    </div>
                </div>
                <div class="lg:w-2/4 xs:contents lg:block">
                    <div class="flex xs:items-center justify-between px-8 pb-4" v-for="(item, index) in secondHalfToShow" :key="index">
                        <span class="lg:text-sm xs:text-xs xs:w-[220px]">{{ item.title }}</span>
                        <span class="lg:text-sm xs:text-xs font-bold xs:text-right">{{ item.desc }}</span>
                    </div>
                </div>
            </div>
            <div class="xs:bg-brand-solid-100 lg:bg-white xs:mb-5 cursor-pointer xs:w-[244px] xs:h-[40px] xs:flex xs:items-center xs:justify-center xs:m-auto xs:rounded-2xl" @click="showAll = !showAll">
                <div class="flex justify-center items-center">
                    <span class="text-brand-solid-500 font-extrabold lg:text-sm xs:text-xs">{{ showAll ? 'See less' : 'See more' }}</span>
                    <span class="lg:ml-5 xs:ml-3">
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path v-if="!showAll" d="M14 2L8 8L2 2" stroke="#00AC99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path v-else d="M2 8L8 2L14 8" stroke="#00AC99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { ref, watch } from 'vue';
    import { rows } from './data';

    // Split rows into two halves
    const firstHalf = ref<typeof rows>([]);
    const secondHalf = ref<typeof rows>([]);

    rows.forEach((item, index) => {
        if (index < rows.length / 2) firstHalf.value.push(item);
        else secondHalf.value.push(item);
    });

    // Control whether to show all data or only a limited number of items
    const showAll = ref(false);

    // Computed properties to determine which items to display based on the showAll flag
    const firstHalfToShow = ref<typeof rows>([]);
    const secondHalfToShow = ref<typeof rows>([]);

    // Update displayed items based on the showAll flag
    const updateDisplayedItems = () => {
        if (showAll.value) {
            firstHalfToShow.value = firstHalf.value;
            secondHalfToShow.value = secondHalf.value;
        } else {
            firstHalfToShow.value = firstHalf.value.slice(0, 4);
            secondHalfToShow.value = secondHalf.value.slice(0, 4);
        }
    };

    // Initial update
    updateDisplayedItems();

    // Watch for changes in the showAll flag and update displayed items accordingly
    watch(showAll, updateDisplayedItems);
</script>

<style lang="scss" scoped>
    section {
        @apply my-12 xs:mx-3;
        h2 {
            @apply p-8 text-black-solid-500 text-[20px] font-bold leading-10;
        }
    }
</style>
