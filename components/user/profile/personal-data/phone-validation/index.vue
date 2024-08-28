<template>
    <section class="bg-white lg:w-[416px] xs:mt-4 sm:mt-10 md:mt-0 lg:mt-10 xl:mt-0 sm:w-[292px] md:w-full  h-[225px] card">
        <div class="lg:p-10 xs:p-10 sm:p-10 lg:w-96">
            <h1 class="font-bold text-xl mb-2">Phone Validation</h1>
            <p class="font-normal text-xs text-black-solid-500">This is your personal information section. Please keep this data up to date for KYC compliance</p>
            <div class="form-group">
            <div class="grid grid-flow-col auto-cols-max gap-4 mt-5">
                <input class="form-control max-w-24 !text-xs" placeholder="Country" type="number" max="10" id="countryCode" name="countryCode"
                    value="">
                <input class="form-control lg:max-w-56 xs:max-w-40 !text-sm" placeholder="Phone Number" type="number" max="10" id="phoneNumber" name="phoneNumber" value="">
            </div>
        </div>
        </div>
    
    </section>
</template>