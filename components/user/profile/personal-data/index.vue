

<template>
    <section class="bg-black-solid-50">
        <div class="container md:flex lg:flex-wrap 2xl:flex-nowrap">
            <UserProfilePersonalDataPersonalInfo />
            <div class="md:ml-10 lg:ml-0 2xl:ml-10">
                <div class="mb-4 md:mb-10">
                    <UserProfilePersonalDataPhoneValidation />
                </div>
                <div class="mb-4 md:mb-10">
                    <UserProfilePersonalDataPasswordChange />
                </div>
                <div>
                    <UserProfilePersonalDataDeleteAccount />
                </div>
            </div>
        </div>
    </section>
</template>