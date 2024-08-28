<script setup lang="ts">
import questions from "./questions"
const { contactsWithPolitics } = useInvestorQuestionnaireStore()
</script>

<template>
    <div class="py-8">
        <QuestionnaireChoiceOption v-for="(item, index) in questions" :key="index" :data="item"
            :divider="index != questions.length - 1" v-model="contactsWithPolitics[item.id]" />
    </div>
</template>