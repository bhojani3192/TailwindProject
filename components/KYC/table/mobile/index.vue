<template>
    <div class="sm:block md:hidden w-full pt-8">
        <div>
            <div class="box">
                <span>Other Representative</span>
                <h1>Name Surname</h1>
            </div>
            <div class="box">
                <span>Email</span>
                <h1>email@email.com</h1>
            </div>
            <div class="box">
                <span>Verification link</span>
                <h1 class="text-brand-solid-500">Email sent</h1>
            </div>
            <hr />
        </div>
        <div>
            <div class="box">
                <span>Other Representative</span>
                <h1>Name Surname</h1>
            </div>
            <div class="box">
                <span>Email</span>
                <h1>email@email.com</h1>
            </div>
            <div class="box">
                <span>Verification link</span>
                <h1 class="text-brand-solid-500">Email sent</h1>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
hr {
    @apply mb-8;
}

.box {
    @apply mb-6;

    span {
        @apply block text-black-transparent-400 text-sm;
    }

    h1 {
        @apply text-base font-semibold mt-2;
    }

    .btn.link {
        @apply text-brand-solid-500 p-0 underline max-w-[112px] w-full;
    }

    .btn.solid {
        @apply max-h-[32px] max-w-[112px] w-full;
    }
}
</style>