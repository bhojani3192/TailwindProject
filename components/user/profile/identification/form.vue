<template>
    <div class="login-card">
        <form>
            <div class="form-group">
                <input class="form-control" type="text" placeholder="Name" id="Name" name="Name" value="" />
            </div>
            <div class="form-group">
                <input class="form-control" type="text" placeholder="Surname" id="Surname" name="Surname" value="" />
            </div>
            <div class="form-group">
                <input class="form-control" type="text" placeholder="Personal ID" id="personal-id" name="personal-id" value="" />
            </div>
            <div class="form-group">
                <input class="form-control text-[#27313167]" type="date" placeholder="Document Expiry Date" id="document-expire-date" name="document-expire-date" value="" />
            </div>
            <div class="form-group">
                <input class="form-control text-[#27313167]" type="date" placeholder="Birth Date" id="birth-date" name="birth-date" value="" />
            </div>
        </form>
    </div>
</template>
<style lang="scss" scoped>
    form {
        @apply w-full mt-5;
        .form-group {
            @apply grid-cols-1 mb-4;
            .form-control {
                @apply lg:w-[335px] sm:w-auto text-sm;
            }
        }
    }
</style>