<script lang="ts" setup>
import RightarrowIcon from '~/assets/icons/rightarrow_icon.vue';
</script>
<template>
    <section id="invest-projects">
        <div class="container md:py-16 py-10">
            <div class="flex flex-wrap lg:flex-nowrap justify-between items-center gap-4 lg:gap-0">
                <h1 class="section-title">Projects Waiting For Investments</h1>

                <div class="btn-tabs">
                    <Button class="btn effects primary">Real Estate Loans</Button>
                    <Button class="btn effects">Crypto Loans</Button>
                </div>
            </div>

            <div class="project-grid">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>

            <div class="flex justify-center mt-6 md:mt-10">
                <NuxtLink to="/invest/projects">See more projects
                    <RightarrowIcon />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    @apply bg-black-solid-50;

    .btn-tabs {
        @apply mx-auto lg:mx-[unset]
    }

    a {
        @apply text-brand-solid-500 underline text-base font-extrabold;
    }
}
</style>