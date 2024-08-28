<script lang="ts" setup>
import { fakeData } from './data';
const project = Array(15).fill(fakeData[0])
const { loggedIn } = useUserSession()

const onNavigateToDetails = (id: number) => {
    if (loggedIn.value) {
        navigateTo(`/dashboard/invest/project/details/${id}`);
    } else {
        navigateTo(`/invest/project/details/${id}`);
    }
}
</script>
<template>
    <ProjectTable :data="project" :on-navigate="onNavigateToDetails" />
</template>
<style lang="scss" scoped></style>