<script lang="ts" setup>
import RightarrowIcon from '~/assets/icons/rightarrow_icon.vue';
import ProjectIcon from '~/assets/icons/home/project_icon.vue';
</script>
<template>
    <section id="home_Projects">
        <div class="container py-10 md:py-16">
            <div class="flex flex-wrap lg:flex-nowrap  lg:justify-between">
                <div class="section-title flex items-center">
                    <ProjectIcon />
                    <h2 class="common-subtitle"><span>Projects</span> waiting for investment</h2>
                </div>
                <div class="btn-tabs mt-4 md:mt-0">
                    <Button class="btn effects primary">Real Estate Loans</Button>
                    <Button class="btn effects">Crypto Loans</Button>
                </div>
            </div>

            <div class="project-grid">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>

            <div class="flex justify-center mt-6 md:mt-10">
                <NuxtLink to="/invest/projects" class="link">
                    See more projects
                    <RightarrowIcon />
                </NuxtLink>
            </div>

        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    @apply bg-black-solid-50;

    .work-card {
        @apply bg-black-transparent-200 h-[275px] w-full;
    }

    .btn-tabs {
        @apply mx-auto lg:mx-[unset]
    }

    .info {
        @apply mt-8;
    }
}
</style>