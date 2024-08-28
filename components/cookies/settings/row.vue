<script setup lang="ts">
const props = defineProps<
    {
        label: string,
        toggle?: boolean
        defaultEnable?: boolean
    }
>()
import ExpandIcon from '~/assets/icons/expand_icon.vue';

const toggleId = ref('')
const isChecked = ref<boolean>(props.defaultEnable || false)
const isExpanded = ref<boolean>(false)

onMounted(() => {
    const id = props.label.toLowerCase() + 'Toggle'
    toggleId.value = id
})

const onChange = (e: any) => {
    isChecked.value = e.target.checked
}

const onExpand = (e: any) => {
    isExpanded.value = !isExpanded.value
}

</script>
<template>
    <div :class="`row ${isExpanded ? 'active' : ''}`">
        <div class="wrapper">
            <div class="title" @click="onExpand">
                <ExpandIcon class="dark" />
                {{ $props.label }}
            </div>

            <div>
                <span v-if="!toggle"> Always Enabled</span>
                <div v-else class="flex items-center gap-3">
                    <span v-if="isChecked">Enabled</span>
                    <span v-else class="disabled">Disabled</span>
                    <ToggleSwitch :id="toggleId" :on-change="onChange" :default-checked="defaultEnable" />
                </div>
            </div>
        </div>
        <div class="section" v-if="isExpanded">
            <CookiesSettingsTable />
            <div class="cookiesSettingTableMobile md:hidden"> 
            <div class="bg-[#3641400A] px-4 py-6">
                <div class="cookiesetting-row w-[163px] sm:w-[unset]">
                    <h6 class="text-xs sm:text-sm font-bold">Cookie</h6>
                    <span>cookielawinfo-checkbox-advertisement</span>
                </div>
                <div class="cookiesetting-row  sm:w-[unset] mt-3  ">
                    <h6 class="text-xs sm:text-sm font-bold">Duration</h6>
                    <span>1 year</span>
                </div>
                <div class="cookiesetting-row  sm:w-[unset] mt-3">
                    <h6 class="text-xs sm:text-sm font-bold">Description</h6>
                    <span>Set by the GDPR Cookie Consent 
plugin, this cookie is used to record 
the user consent for the cookies in 
the "Advertisement" category.</span>
                </div>
    

            </div>
         
          <div class=" px-4 py-6">
                <div class="cookiesetting-row w-[163px] sm:w-[unset]">
                    <h6 class="text-xs sm:text-sm font-bold">Cookie</h6>
                    <span>cookielawinfo-checkbox-analytics</span>
                </div>
                <div class="cookiesetting-row  sm:w-[unset] mt-3  ">
                    <h6 class="text-xs sm:text-sm font-bold">Duration</h6>
                    <span>11 months</span>
                </div>
                <div class="cookiesetting-row  sm:w-[unset] mt-3">
                    <h6 class="text-xs sm:text-sm font-bold">Description</h6>
                    <span>This cookie is set by GDPR Cookie 
Consent plugin. The cookie is used 
to store the user consent for the 
cookies in the category "Analytics".</span>
                </div>
    

            </div>

                  <div class="bg-[#3641400A] px-4 py-6">
                <div class="cookiesetting-row sm:w-[unset]">
                    <h6 class="text-xs sm:text-sm font-bold">Cookie</h6>
                    <span>cookielawinfo-checkbox-functional</span>
                </div>
                <div class="cookiesetting-row  sm:w-[unset] mt-3  ">
                    <h6 class="text-xs sm:text-sm font-bold">Duration</h6>
                    <span>11 months</span>
                </div>
                <div class="cookiesetting-row  sm:w-[unset] mt-3">
                    <h6 class="text-xs sm:text-sm font-bold">Description</h6>
                    <span>The cookie is set by GDPR cookie 
consent to record the user 
consent for the cookies in the 
category "Functional".</span>
                </div>
            </div>
               
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
.row.active {
    @apply bg-brand-transparent-100 px-0 md:px-6 pb-0;

    .wrapper{
        @apply px-6 md:px-0;
    }
}

.row {
    @apply bg-black-transparent-100 w-full py-4 px-6 rounded-2xl min-h-[64px];

    .wrapper {
        @apply text-base font-bold flex justify-between items-center ;
    }

    .title {
        @apply flex items-center gap-4 cursor-pointer;
    }

    span {
        @apply block text-xs text-brand-solid-500;
    }

    span.disabled {
        @apply text-black-transparent-400;
    }

    .section {
        @apply py-6 pt-4 w-full;

        .cookiesSettingTableMobile{
        h6{
            @apply mb-[7px]
        }
          span{
              @apply text-black-solid-500 text-sm ;
          }
        }
    }
}
</style>