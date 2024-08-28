<script setup lang="ts">
import { faqIndexes, faqs } from './data';
import ExpandIcon from '~/assets/icons/expand_icon.vue'
const selectedFaqIndex = ref<number>(0)
const selectedQuestionIndex = ref<number>(0)
const onSelectIndex = (index: number) => {
    selectedFaqIndex.value = index
}

const onQuestionExpand = (index: number) => {
    selectedQuestionIndex.value = index
}
</script>
<template>
    <section id="company-faq">
        <div class="container md:py-16 py-10">
            <h1 class="section-title">Frequently Asked Questions</h1>
            <div class="faq-wrap">
                <div class="md:w-1/3 w-full">
                    <div class="card faq-indexes">
                        <ul>
                            <li @click="onSelectIndex(index)" v-for="(item, index) in faqIndexes" :key="index"
                                :class="index === selectedFaqIndex ? `active` : ``">{{
                                    item
                                }}</li>
                        </ul>
                    </div>
                </div>
                <div class="md:w-2/3 w-full" >
                    <div class="card faqs">
                        <h1 class="section-title title md:mb-3">{{ faqIndexes[selectedFaqIndex] }}</h1>

                        <div @click="onQuestionExpand(index)"
                            :class="`faqs-question-answer ` + (index === selectedQuestionIndex ? `expanded` : ``)"
                            v-for="(faq, index) in faqs" :key="`question-answer-` + index">
                            <div class="question">
                                {{ faq.question }}
                                <ExpandIcon />
                            </div>
                            <div class="answer">
                                {{ faq.answer }}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    @apply bg-black-solid-50;

    .faq-wrap {
        @apply flex flex-wrap md:flex-nowrap justify-between items-start  gap-6 lg:gap-8 mt-6 md:mt-10;

        .card {
            @apply p-6 md:p-8
        }
        .faqs{
            @apply p-0 md:p-8;
                .section-title{
                 @apply p-6 pb-4 text-base md:text-xl md:p-0; 
                }
                

        }
    

        .faq-indexes {
            @apply border-0 drop-shadow-none p-0 md:p-6 bg-black-solid-50 md:border md:drop-shadow-md;

            ul {
                @apply relative flex md:block w-full overflow-scroll md:overflow-visible gap-6 md:gap-0;

                li {
                    @apply mb-0 md:my-4 text-sm font-bold cursor-pointer relative whitespace-nowrap md:whitespace-normal;
                }

                li.active {
                    @apply text-brand-solid-500;

                    &::after {
                        @apply content-[''] w-[5px] h-[20px] rounded-r-lg md:bg-brand-solid-500 absolute -left-6 top-0;
                    }
                }
            }
        }

        .faqs-question-answer {
            @apply border-b border-black-transparent-200 overflow-hidden;

            .question {
                @apply cursor-pointer flex justify-between;
            }

            .question,
            .answer {
                @apply h-16 px-6 md:px-8 py-5 text-sm;
            }

            .answer {
                @apply max-h-0 py-0 overflow-hidden;
            }

            &:last-of-type {
                @apply border-none;
            }
        }

        .faqs-question-answer.expanded {
            @apply bg-brand-solid-50;

            .question {
                @apply font-bold;
            }

            .answer {
                @apply block max-h-[500px] h-auto px-6 md:px-8  pb-5;
            }
        }
    }
}
</style>