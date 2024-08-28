

<script setup lang="ts">
import CloudquestionIcon from '~/assets/icons/home/cloudquestion_icon.vue';
import ExpandIcon from '~/assets/icons/expand_icon.vue'
import RightarrowIcon from '~/assets/icons/rightarrow_icon.vue';
import { faqs } from "./data"
const selectedQuestionIndex = ref<number>(-1)

const onQuestionExpand = (index: number) => {
    selectedQuestionIndex.value = index
}

</script>
<template>
    <section id="home_faq">
        <div class="container md:py-16 py-10">
            <div class="flex items-center justify-center flex-col">
                <div class="section-title flex items-center">
                    <CloudquestionIcon />
                    <h2 class="common-subtitle"><span>Frequently</span> asked questions</h2>
                </div>

                <div class="faq-wrap">
                    <div class="faq" @click="onQuestionExpand(index)" v-for="(faq, index) in faqs" :key="index"
                        :class="index === selectedQuestionIndex ? `expand` : ``">
                        <div class="question">
                            <ExpandIcon class="dark" />
                            {{ faq.question }}
                        </div>
                        <div class="answer">
                            {{ faq.answer }}
                        </div>
                    </div>
                </div>

                <NuxtLink class="link" to="/">
                    See more
                    <RightarrowIcon />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    @apply bg-white-gradient;

    .faq-wrap {
        @apply mt-6 md:mt-10 mb-6;

        .faq {
            @apply bg-black-transparent-100 md:w-[640px] min-h-14 md:min-h-16 py-4 flex flex-col justify-center items-start px-6 md:px-10 rounded-2xl;
            @apply text-base cursor-pointer mb-4;

            .question {
                @apply font-bold flex items-center gap-4 md:gap-8 text-sm sm:text-base;
            }

            .answer {
                @apply my-2 px-12 hidden;
            }
        }

        .faq.expand {
            .answer {
                @apply my-2 px-8 md:px-12 block;
            }
        }
    }
}
</style>