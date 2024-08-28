<template>
    <div>
        <InvestProjectsDetailTopbar />
            <InvestProjectsDetailNavbar @clicked="handleValue" />
        <div ref="summarySection" class="section">
            <InvestProjectsDetailSummary />
        </div>
        <div class="">
            <div class="blur-wrapper">
                <div :class="loggedIn ? '' : 'blur-content'">
                    <div ref="loanInfoSection" class="section">
                        <InvestProjectsDetailLoanInfo />
                    </div>
                    <div ref="borrowerInfoSection" class="section">
                        <InvestProjectsDetailBorrowerInfo />
                    </div>
                    <div ref="additionalInfoSection" class="section">
                        <InvestProjectsDetailAdditionalInfo />
                    </div>
                    <div ref="documentsSection" class="section">
                        <InvestProjectsDetailDocuments />
                    </div>
                </div>
                <div v-if="!loggedIn" class="blur-overlay">
                    <span class="font-bold pb-2">To view the content, please sign in</span>
                    <Button class="primary xs:w-[100%] lg:w-[265px] xl:w-[192px] lg:h-[56px]" @click="navigateTo('/login')">SIGN IN</Button>
                </div>
            </div>
        </div>
        <InvestProjectsDetailProjectUpdate />
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const { loggedIn } = useUserSession()
 
    // Define refs for each section
    const summarySection = ref(null);
    const loanInfoSection = ref(null);
    const borrowerInfoSection = ref(null);
    const additionalInfoSection = ref(null);
    const documentsSection = ref(null);

    // Function to handle emitted value from child component
    const handleValue = (value) => {
        // Scroll to the corresponding section based on the emitted value
        let sectionRef;
        switch(value) {
            case 'summary':
                sectionRef = summarySection.value;
                break;
            case 'loan':
                sectionRef = loanInfoSection.value;
                break;
            case 'borrower':
                sectionRef = borrowerInfoSection.value;
                break;
            case 'additional_info':
                sectionRef = additionalInfoSection.value;
                break;
            case 'documents':
                sectionRef = documentsSection.value;
                break;
            default:
                return;
        }
        
        // Scroll to the center of the section
        if (sectionRef) {
            const sectionRect = sectionRef.getBoundingClientRect();
            const scrollTop = sectionRect.top + window.scrollY;
            const scrollOffset = scrollTop - window.innerHeight / 2 + sectionRect.height / 2;
            window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
        }
    };
</script>

<style scoped>
.section {
    scroll-margin-top: 50vh;
}

.blur-wrapper {
    @apply relative overflow-hidden;
}

.blur-content {
    @apply relative blur-sm z-10
}

.blur-overlay {
    @apply absolute top-24 left-0 w-full h-full flex-col items-center z-10 flex 
}
</style>
