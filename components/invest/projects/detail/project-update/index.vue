<script setup lang="ts">
import { policies } from "./data"
</script>
<template>
    <section>
        <SliderWrapper :slides="policies.length" :width-to-scroll="448">
            <template #title>
                Projects Updates
            </template>
    
            <div class="testimony-box" v-for="(item, index) in policies" :key="index">
                <span class="date">
                    <span class="mr-2">
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.3 0H1.7C0.7624 0 0 0.697667 0 1.55556V12.4444C0 13.3023 0.7624 14 1.7 14H14.3C15.2376 14 16 13.3023 16 12.4444V1.55556C16 0.697667 15.2376 0 14.3 0ZM14.3 12.4444H1.7C1.6544 12.4444 1.6232 12.432 1.6096 12.432C1.604 12.432 1.6008 12.4336 1.6 12.4382L1.5904 1.59133C1.596 1.58356 1.632 1.55556 1.7 1.55556H14.3C14.3632 1.55633 14.3976 1.57733 14.4 1.56178L14.4096 12.4087C14.404 12.4164 14.368 12.4444 14.3 12.4444Z" fill="#00AC99"/>
                            <path d="M3.2 3.11111H8V7.77778H3.2V3.11111ZM3.2 9.33333V10.8889H12.8V9.33333H3.2ZM9.6 6.22222H12.8V7.77778H9.6V6.22222ZM9.6 3.11111H12.8V4.66667H9.6V3.11111Z" fill="#00AC99"/>
                        </svg>
                    </span>
                    {{ item.date }}
                </span>
                <h2>{{ item.title }}</h2>
                <p v-html="item.desc"></p>
            </div>
    
        </SliderWrapper>
    </section>
</template>
<style lang="scss" scoped>
@import url("./style.scss");
</style>