<template>
    <section class="bg-white xs:p-10 sm:p-10 lg:w-[416px] sm:w-[292px] md:w-full h-[200px] card lg:p-10">
        <div class="pb-5 lg:w-96">
            <h1 class="font-bold text-xl mb-2">Delete Account</h1>
            <p class="font-normal text-xs text-error-solid-500">This operation can not be undone</p>
        </div>
        <span>
            <div class="form-group">
                <input class="form-control" type="email" placeholder="Confirm by entering your email address" id="email" name="email" value="" />
            </div>
        </span>
    
    </section>
    </template>
    <style lang="scss" scoped>
        .form-group {
            @apply items-center;
            .form-control {
                @apply lg:w-[335px] text-sm xs:bg-white lg:bg-black-solid-50;
            }
        }
    </style>