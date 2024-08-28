<template>
    <section id="careers-join-bitguana">
        <div class="container">
            <div class="flex justify-between items-center flex-col lg:flex-row">
                <div class="w-full md:w-1/2">
                    <div class="img-wrap">
                        <img src="~/assets/images/home/register_iguana.png" alt="" />
                        <div class="title">
                            <h1>Join Bitguana</h1>
                            <h2>Send us your CV</h2>
                        </div>
                    </div>
                    
                </div>
                <CareersJoinBitguanaForm />
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    @apply bg-brand-gradient pt-6 pb-10 md:py-20;

    .img-wrap {
        @apply bg-white-transparent-100 rounded-full flex justify-center items-center h-[136px] w-[136px] lg:w-[416px] lg:h-[416px] relative;

        .title {
            @apply absolute text-white-500 md:-right-32 lg:bottom-16 left-[125px] lg:left-[unset] w-[200px] sm:w-[300px] lg:w-[unset];

            h1 {
                @apply text-xl md:text-[40px] md:leading-[60px] font-bold;
            }

            h2 {
                @apply text-sm sm:text-xl font-normal;
            }
        }

        img {
            @apply h-[90px] w-[90px] lg:h-[276px] lg:w-[276px];
        }
    }
}
</style>