<script setup lang="ts">
import ExportIcon from "~/assets/icons/dashboard/export_icon.vue";
</script>

<template>
    <section id="user_transactions">
        <div class="container py-10">
            <div class="card transactions-card">
                <UserTransactionsTable />
            </div>

            <div class="transaction-card-mobile md:hidden">
                <div class="flex items-center  justify-between">
                      <h2 class="section-title">Transactions</h2>
                       <Button class="secondary">
                <ExportIcon />
                Export
            </Button>
                </div>

            <div class="options">
                    <select name="" id="">                              
                    </select>
             </div>

                <div class="card transaction-detail-card mt-6">
                       <div class="flex py-4 px-6  justify-between items-end">
                        <div class="">
                            <span class="text-[10px]">01.09.202 </span>
                            <h5 class="text-sm text-black-solid-500 font-medium">REP-F35DF292-959</h5>
                            <span class="text-[10px]">01.09.202 </span>
                        </div>
                         <div class="text-right">
                            <h5 class="text-sm font-bold">138.89 EUR</h5>
                            <span class="text-[10px] font-bold text-warning-solid-500">Pending</span>
                        </div>
                       </div>
                </div>
                <div class="card transaction-detail-card mt-6">
                       <div class="flex py-4 px-6  justify-between items-end">
                        <div class="">
                            <span class="text-[10px]">01.09.202 </span>
                            <h5 class="text-sm  text-black-solid-500 font-medium">REP-F35DF292-959</h5>
                            <span class="text-[10px]">01.09.202 </span>
                        </div>
                         <div class="text-right">
                            <h5 class="text-sm  font-bold">138.89 EUR</h5>
                            <span class="text-[10px] font-bold text-warning-solid-500">Pending</span>
                        </div>
                       </div>
                </div>
                <div class="card transaction-detail-card mt-6">
                       <div class="flex py-4 px-6  justify-between items-end">
                        <div class="">
                            <span class="text-[10px]">01.09.202 </span>
                            <h5 class="text-sm text-black-solid-500 font-medium">REP-F35DF292-959</h5>
                            <span class="text-[10px]">01.09.202 </span>
                        </div>
                         <div class="text-right">
                            <h5 class="text-sm font-bold">138.89 EUR</h5>
                            <span class="text-[10px] font-bold text-warning-solid-500">Pending</span>
                        </div>
                       </div>
                </div>
                
                   <Pagination />
             </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.transactions-card {
    @apply w-full py-6 px-8 hidden md:block;
}

.transaction-card-mobile{
@apply md:hidden;
.transaction-detail-card{
    @apply rounded-xl;
}
.btn.secondary {
        svg {
            @apply mr-3 w-10;
        }

        @apply bg-brand-transparent-100 w-[116px] h-[48px] px-5  ;
    }

     select {
        @apply h-[48px] w-full border border-black-transparent-200 rounded-lg mt-4;
    }

}
 
</style>