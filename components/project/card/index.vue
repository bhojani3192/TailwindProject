<script setup lang="ts">
import projectDummyImage_1 from '~/assets/images/project-dummy-image-1.png'
import checkmarkIcon from '~/assets/icons/checkmark_icon.svg'
const { loggedIn } = useUserSession()

const onNavigateToDetails = (id: number) => {
    if (loggedIn.value) {
        navigateTo('/dashboard/invest/project/details/1');
    } else {
        navigateTo('/invest/project/details/1');
    }
}
</script>

<template>
    <div class="card cursor-pointer" @click="onNavigateToDetails(1)">
        <div class="img-wrap">
            <img :src="projectDummyImage_1" alt="projectDummyImage">
        </div>
        <h1 class="card-title">Luxury Residential Complex In The
            Centre Of Tbilisi</h1>

        <div class="interest-amount">
            <div>
                <span>Interest per annum</span>
                <h2>0%</h2>
            </div>
            <div>
                <span>Loan amount</span>
                <h2>100,000.00 EUR</h2>
            </div>
        </div>

        <div class="progress-status">
            <div class="progress-bar-wraper">
                <div class="bar empty"></div>
                <div class="bar progress w-[12%]"></div>
            </div>
            <div class="status">
                <span> <b> 5% </b> (1 investors)</span>
                <div class="text-right">
                    <span><b> 95,000.00 EUR </b> left</span>
                    <span><b> 5 days left </b></span>
                </div>
            </div>
        </div>

        <div class="bullet">
            <div class="box">
                <span>Term</span>
                <h2>120 <span>Days</span></h2>
            </div>
            <div class="box">
                <span>Repayment type</span>
                <h2>Bullet</h2>
                <!-- <h2 class="text-black-transparent-400"></h2> -->
            </div>
            <div class="box">
                <span>LTV</span>
                <h2>5%</h2>
            </div>
        </div>

        <div class="ribbon">
            <img :src="checkmarkIcon" alt="">
            Fully Invested
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url("./style.scss");
</style>