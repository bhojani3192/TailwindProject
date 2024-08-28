<script setup lang="ts">
const summaryImages = [
    {
        'path': 'https://s3-alpha-sig.figma.com/img/dc85/a326/b6e0823677a8e7f94d2ec6dd285fa715?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJwyltaRt6fEQehwa845XMVIgUweE-bQiWMKaaQBrGbhLRb3UpeqJlYJ9jj6sGvPA43JM3r8xvvt0bgMlrd3VlVlM4GaddXpt9xYgp5VjzGdP2YvPOpmsDg3a7nzdZWTNDqwcomsflaXjrTgedAd9CKgo9wFW9LV6r0j4w3Q9LwwVn4d~obHwasrprhoFon2lTLQY7GV9F2JPn16c5~6ZZLz1IpGcGEYPoKj5b38mq095CPKG1TxlDQcForMISwjNERHgVaLm7~mdNFVQp5v9t4UeTCm9m-NlO2kzbWIB-9r-Wi-Q30XJwwKij-lIscjxtybtN2hg2esKGBL2Y8p~g__'
    },
    {
        'path': 'https://s3-alpha-sig.figma.com/img/dc85/a326/b6e0823677a8e7f94d2ec6dd285fa715?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJwyltaRt6fEQehwa845XMVIgUweE-bQiWMKaaQBrGbhLRb3UpeqJlYJ9jj6sGvPA43JM3r8xvvt0bgMlrd3VlVlM4GaddXpt9xYgp5VjzGdP2YvPOpmsDg3a7nzdZWTNDqwcomsflaXjrTgedAd9CKgo9wFW9LV6r0j4w3Q9LwwVn4d~obHwasrprhoFon2lTLQY7GV9F2JPn16c5~6ZZLz1IpGcGEYPoKj5b38mq095CPKG1TxlDQcForMISwjNERHgVaLm7~mdNFVQp5v9t4UeTCm9m-NlO2kzbWIB-9r-Wi-Q30XJwwKij-lIscjxtybtN2hg2esKGBL2Y8p~g__'
    },
    {
        'path': 'https://s3-alpha-sig.figma.com/img/dc85/a326/b6e0823677a8e7f94d2ec6dd285fa715?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJwyltaRt6fEQehwa845XMVIgUweE-bQiWMKaaQBrGbhLRb3UpeqJlYJ9jj6sGvPA43JM3r8xvvt0bgMlrd3VlVlM4GaddXpt9xYgp5VjzGdP2YvPOpmsDg3a7nzdZWTNDqwcomsflaXjrTgedAd9CKgo9wFW9LV6r0j4w3Q9LwwVn4d~obHwasrprhoFon2lTLQY7GV9F2JPn16c5~6ZZLz1IpGcGEYPoKj5b38mq095CPKG1TxlDQcForMISwjNERHgVaLm7~mdNFVQp5v9t4UeTCm9m-NlO2kzbWIB-9r-Wi-Q30XJwwKij-lIscjxtybtN2hg2esKGBL2Y8p~g__'
    },
    {
        'path': 'https://s3-alpha-sig.figma.com/img/dc85/a326/b6e0823677a8e7f94d2ec6dd285fa715?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJwyltaRt6fEQehwa845XMVIgUweE-bQiWMKaaQBrGbhLRb3UpeqJlYJ9jj6sGvPA43JM3r8xvvt0bgMlrd3VlVlM4GaddXpt9xYgp5VjzGdP2YvPOpmsDg3a7nzdZWTNDqwcomsflaXjrTgedAd9CKgo9wFW9LV6r0j4w3Q9LwwVn4d~obHwasrprhoFon2lTLQY7GV9F2JPn16c5~6ZZLz1IpGcGEYPoKj5b38mq095CPKG1TxlDQcForMISwjNERHgVaLm7~mdNFVQp5v9t4UeTCm9m-NlO2kzbWIB-9r-Wi-Q30XJwwKij-lIscjxtybtN2hg2esKGBL2Y8p~g__'
    },
    {
        'path': 'https://s3-alpha-sig.figma.com/img/dc85/a326/b6e0823677a8e7f94d2ec6dd285fa715?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJwyltaRt6fEQehwa845XMVIgUweE-bQiWMKaaQBrGbhLRb3UpeqJlYJ9jj6sGvPA43JM3r8xvvt0bgMlrd3VlVlM4GaddXpt9xYgp5VjzGdP2YvPOpmsDg3a7nzdZWTNDqwcomsflaXjrTgedAd9CKgo9wFW9LV6r0j4w3Q9LwwVn4d~obHwasrprhoFon2lTLQY7GV9F2JPn16c5~6ZZLz1IpGcGEYPoKj5b38mq095CPKG1TxlDQcForMISwjNERHgVaLm7~mdNFVQp5v9t4UeTCm9m-NlO2kzbWIB-9r-Wi-Q30XJwwKij-lIscjxtybtN2hg2esKGBL2Y8p~g__'
    },
    {
        'path': 'https://s3-alpha-sig.figma.com/img/dc85/a326/b6e0823677a8e7f94d2ec6dd285fa715?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJwyltaRt6fEQehwa845XMVIgUweE-bQiWMKaaQBrGbhLRb3UpeqJlYJ9jj6sGvPA43JM3r8xvvt0bgMlrd3VlVlM4GaddXpt9xYgp5VjzGdP2YvPOpmsDg3a7nzdZWTNDqwcomsflaXjrTgedAd9CKgo9wFW9LV6r0j4w3Q9LwwVn4d~obHwasrprhoFon2lTLQY7GV9F2JPn16c5~6ZZLz1IpGcGEYPoKj5b38mq095CPKG1TxlDQcForMISwjNERHgVaLm7~mdNFVQp5v9t4UeTCm9m-NlO2kzbWIB-9r-Wi-Q30XJwwKij-lIscjxtybtN2hg2esKGBL2Y8p~g__'
    },
    {
        'path': 'https://s3-alpha-sig.figma.com/img/dc85/a326/b6e0823677a8e7f94d2ec6dd285fa715?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJwyltaRt6fEQehwa845XMVIgUweE-bQiWMKaaQBrGbhLRb3UpeqJlYJ9jj6sGvPA43JM3r8xvvt0bgMlrd3VlVlM4GaddXpt9xYgp5VjzGdP2YvPOpmsDg3a7nzdZWTNDqwcomsflaXjrTgedAd9CKgo9wFW9LV6r0j4w3Q9LwwVn4d~obHwasrprhoFon2lTLQY7GV9F2JPn16c5~6ZZLz1IpGcGEYPoKj5b38mq095CPKG1TxlDQcForMISwjNERHgVaLm7~mdNFVQp5v9t4UeTCm9m-NlO2kzbWIB-9r-Wi-Q30XJwwKij-lIscjxtybtN2hg2esKGBL2Y8p~g__'
    },
]
const summaryEle = ref<Element | null>(null)
const widthToScroll = 448
const scrollWidth = ref<number>(0)

const disabledRight = ref<boolean>(false)
const disabledLeft = ref<boolean>(true)

const onScrollLeft = () => {
    if (summaryEle && summaryEle.value) {
        const currScroll = summaryEle.value.scrollLeft
        const toScroll = currScroll - widthToScroll
        if (toScroll === 0) {
            disabledLeft.value = true
        }
        if (-widthToScroll < toScroll) {
            summaryEle.value.scrollLeft = toScroll;
            disabledRight.value = false
        }
    }
}

const onScrollRight = () => {
    if (summaryEle && summaryEle.value) {
        const currScroll = summaryEle.value.scrollLeft
        const toScroll = currScroll + widthToScroll
        if (toScroll >= scrollWidth.value - widthToScroll) {
            disabledRight.value = true
        }
        if (scrollWidth.value > toScroll) {
            disabledLeft.value = false
            summaryEle.value.scrollLeft = toScroll;
        }
    }
}

onMounted(() => {
    scrollWidth.value = (summaryImages.length - 2) * widthToScroll
})
</script>
<template>
    <section class="">
        <div class="container py-10 xs:px-4 lg:px-0">
            <div class="title">
                <h2>Summary</h2>
                <div class="buttons">
                    <Button class="btn-rounded btn-sm secondary" @click="onScrollLeft" :disabled="disabledLeft">
                        <svg class="h-[19px]"  fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 13L1 7L7 1" stroke="#364140" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Button>
                    <Button class="btn btn-rounded btn-sm secondary" @click="onScrollRight" :disabled="disabledRight">
                        <svg class="h-[19px]"  fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L1 1" stroke="#364140" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Button>
                </div>
            </div>
            <div class="summary-wrap" ref="summaryEle">
                <div class="box" v-for="(item, index) in summaryImages" :key="index">
                    <img class="rounded-2xl" :src="item.path" alt="">
                </div>
            </div>
            <div>
                <p class="xs:text-sm lg:text-base text-justify text-black-solid-500">
                    Overview of Transaction. The global wine industry, aged more than 2’000 years and valued more than USD 300B has already significant challenges that Winessy is about to revolutionize. Winessy primarily introduces wine blockchain, offering to the consumers a full account of wine quality and its track record through real uneditable data collected during the winemaking process. Winessy tokenizes, using blockchain technology, both “wine futures”, and bottled wine, offering NFT for buyers and investors. The prime wine product is derived from high-quality Grand Cru wines, already pre-stocked by Winessy and affiliated wineries around the Bordeaux area of France. Winnesy will deliver a complete blockchain technology applied to the global wine industry by introducing a unique token named WINS. This globally traded NFT will be the funding vehicle for the global trade and investment of “wine futures” ( or synonym “en primeur” ) or bottled wine. The following slide depicts the company’s summary as extracted from Graypes engine along with the overall Rating of the initial business proposal as presented into the business Elevator Pitch Graypes template. Here goes update dated June 3, 2022. Hello, we wrote this update dated June 3, 2022.
                </p>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    @apply flex bg-brand-solid-100 h-full;
    .title {
            @apply max-w-[100%] flex justify-between;
        
            h1 {
                @apply text-black-solid-500 text-[25px] font-bold leading-10;
            }
            h2 {
                @apply text-black-solid-500 text-[20px] font-bold leading-10;
            }
        
            p {
                @apply mt-8 text-black-solid-400;
            }
        
            ul {
                @apply list-disc text-base font-semibold;
            }
        }
    .buttons {
        @apply lg:flex gap-2 xs:hidden;
        .btn.secondary {
            @apply h-[50px] w-[50px] px-[19px] pt-5 border border-black-transparent-100;

            svg path {
                @apply stroke-black-transparent-400;
            }

            &:disabled {
                @apply bg-black-transparent-50 border-none;

                svg path {
                    @apply opacity-40;
                }
            }

            &:disabled:hover,
            &:disabled:focus {
                @apply drop-shadow-none;
            }
        }
    }
    .summary-wrap {
        @apply flex py-8 gap-8 overflow-x-scroll w-full;
        .box {
            @apply max-h-[300px] xs:min-w-[216px] lg:min-w-[416px] rounded-3xl drop-shadow-lg;
        }
    }
}
</style>