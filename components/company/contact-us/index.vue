
<template>
    <section id="company-contact-us">
        <div class="container py-10 md:py-16">
            <div class="flex flex-wrap md:flex-nowrap justify-between md:gap-6 lg:gap-0 items-center">
                <div class="md:w-1/2 w-full">
                    <h1 class="section-title">
                        Contact Us
                    </h1>

                    <p>We'd love to hear from you.</p>
                    <p>We are here to answer any questions you may have.
                        Whether you are a farmer interested in getting a loan or
                        an investor wanting to know more about our product.</p>

                    <div class="address">
                        <h2>
                            Bitguana LLC
                        </h2>
                        <p>
                            Paseo de la Castellana 18 <br />
                            28046 Madrid <br />
                            Spain <br />
                        </p>
                    </div>

                    <div class="call">
                        <h2>
                            Call Us
                        </h2>
                        <span class="mt-4">+34 000 000 00 00</span>
                        <p class="my-0"> or </p>
                        <span>Request a Callback</span>
                    </div>
                </div>
                <div class="md:w-1/2 w-full mt-10 md:mt-0">
                    <CompanyContactUsForm />
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    p {
        @apply text-sm sm:text-base font-normal max-w-[427px] mt-4;
    }

    .address,
    .call {
        @apply mt-10;

        h2 {
            @apply text-base font-bold;
        }

        span {
            @apply block text-brand-solid-500 text-base font-extrabold underline;
        }
    }

    .call>p {
        @apply my-2;
    }
}
</style>