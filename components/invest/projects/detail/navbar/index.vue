<template>
    <div ref="navbar" class="bg-white h-[80px] flex items-center">
        <div class="btn-group container">
            <Button :class="{ active: activeButton === 'summary' }" @click="emitValue('summary')">Summary</Button>
            <Button :class="{ active: activeButton === 'loan' }" @click="emitValue('loan')" :disabled="!loggedIn">Loan</Button>
            <Button :class="{ active: activeButton === 'borrower' }" @click="emitValue('borrower')" :disabled="!loggedIn">Borrower</Button>
            <Button :class="{ active: activeButton === 'additional_info' }" @click="emitValue('additional_info')" :disabled="!loggedIn">Additional Info</Button>
            <Button :class="{ active: activeButton === 'documents' }" @click="emitValue('documents')" :disabled="!loggedIn">Documents</Button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const { loggedIn } = useUserSession()

const activeButton = ref('summary');
const navbar = ref(null);
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
    if (window.scrollY >= navbar.value.offsetTop) {
        navbar.value.classList.add('sticky');
    } else {
        navbar.value.classList.remove('sticky');
    }
};

const emit = defineEmits('clicked');

const emitValue = (value) => {
    activeButton.value = value;
    emit('clicked', value);
    // Scroll to the corresponding section
    scrollIntoView(value);
}

const scrollIntoView = (value) => {
    const element = document.querySelector(`#${value}Section`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}
</script>

<style lang="scss" scoped>
.btn-group {
    @apply md:gap-6 lg:gap-6 flex xs:overflow-auto;
    .btn {
        @apply lg:bg-black-transparent-50 lg:text-black-solid-600 lg:text-black-transparent-400 md:bg-black-transparent-50 md:text-black-solid-600 md:text-black-transparent-400 md:font-medium lg:font-medium xs:font-bold xs:whitespace-nowrap;
        @apply xs:pl-0 lg:pl-[14px] md:pl-[14px] xs:w-auto rounded-[40px] border-none outline-none lg:max-w-[160px] lg:w-[160px] md:max-w-[160px] md:w-[160px] max-h-[48px];
    }
    .btn.active {
        @apply lg:bg-brand-gradient lg:text-white-500 lg:shadow-fill-btn-focused md:bg-brand-gradient md:text-white-500 md:shadow-fill-btn-focused xs:text-brand-solid-500;
    }
}
.sticky {
    @apply fixed lg:top-20 xs:top-16 z-30 w-full bg-black-solid-50
}
</style>
