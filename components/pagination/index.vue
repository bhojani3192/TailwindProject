<script setup lang="ts">
import NextIcon from '~/assets/icons/next_icon.vue';
import PreviousIcon from '~/assets/icons/previous_icon.vue';
</script>
<template>
    <section id="pagination">
        <div class="pagination">
            <div class="per-page">
                Rows per page: 15
            </div>

            <div class="entries">
                Showing <b> 15 </b> out of <b>37</b> entries
            </div>

            <div class="page-link">
                <Button>
                    <PreviousIcon />
                </Button>
                <Button class="active">1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>
                    <NextIcon />
                </Button>
            </div>

              

        </div>
         <div class="md:hidden load-more">
              <Button>Load More <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="#00AC99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Button>
            </div>
    </section>
</template>
<style lang="scss" scoped>
section {
   .load-more{
        @apply mt-3   w-full;
            .btn{
                @apply bg-brand-transparent-50 text-brand-solid-500 w-full rounded-xl font-bold text-xs h-10;
                svg{
                    @apply ml-2;
                }

            }
        }
    .pagination {
        @apply container mt-10 flex justify-center md:justify-between items-center;

       
        .per-page{
            @apply hidden md:inline-block
        }

        .entries {
            @apply text-sm text-black-transparent-400;
        }

        .page-link {
            @apply hidden md:flex items-center gap-2;

            .btn {
                @apply h-10 w-10 bg-white-500 rounded-full p-0 drop-shadow-lg;

                &:hover {
                    @apply shadow-fill-btn-hovered shadow-black-transparent-300;
                }
            }

            .btn.active {
                @apply bg-brand-transparent-50 text-brand-solid-500;
            }

            
        }
    }
}
</style>