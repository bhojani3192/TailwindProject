<script lang="ts" setup>
import illustration from '~/assets/images/borrow/getInTouch-Illustration.png'
</script>
<template>
    <section id="getInTouch">
        <div class="container">
            <h1 class="section-title">
                Get in Touch
            </h1>

            <div class="flex flex-wrap md:flex-nowrap justify-between items-center mt-6 md:mt-10 gap-8 2xl:gap-0">
                <BorrowGetInTouchForm />
                <div class="illustration">
                    <img :src="illustration" alt="getInTouch-illustration">
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    @apply bg-brand-solid-50 py-10 md:py-16;
}
</style>