<template>
    <tr :class="rowData.isComplete && 'complete'" @click="$props.onNavigate(1)">
        <td class="w-[240px]">{{ rowData.projectName }}</td>
        <td class="w-[80px]">{{ rowData.minimumInvestment }}</td>
        <td>{{ rowData.loanAmount }}</td>
        <td>{{ rowData.interestRate }}</td>
        <td>{{ rowData.invested }}</td>
        <td v-if="rowData.isComplete" colspan="5" class="invested">
            <div class="ribbon">
                <img :src="checkmarkIcon" alt="">
                Fully Invested
            </div>
        </td>
        <td v-if="!rowData.isComplete">{{ rowData.timeLeft }}</td>
        <td v-if="!rowData.isComplete">{{ rowData.amountLeft }}</td>
        <td v-if="!rowData.isComplete">{{ rowData.term }}</td>
        <td v-if="!rowData.isComplete">{{ rowData.repaymentType }}</td>
        <td v-if="!rowData.isComplete">{{ rowData.ltv }}</td>
    </tr>
</template>
<script lang="ts" setup>
import checkmarkIcon from '~/assets/icons/checkmark_icon.svg'
import type { projectDataType } from '../types';
const { data } = defineProps<{
    data: projectDataType
    onNavigate: (id: number) => void
}>()

const rowData = ref<projectDataType>(data)

onMounted(() => {

})
</script>

<style lang="scss" scoped>
tr.complete {
    @apply bg-brand-solid-50 border-brand-solid-500 border-t-2 border-b-2;

    td.invested {
        text-align: -webkit-right;

        .ribbon {
            @apply bg-brand-solid-500 w-[180px] h-10 text-white-500 flex justify-center items-center gap-2 rounded-[90px];
        }
    }
}

tr {
    @apply border-b border-black-transparent-200 h-16 cursor-pointer;

    td,
    th {
        &:first-of-type {
            @apply pl-8;
        }

        &:last-of-type {
            @apply pr-8;
        }
    }

    &:last-of-type {
        @apply border-none;
    }
}
</style>