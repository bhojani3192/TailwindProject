<template>
    <div class="">
        <form>
            <div class="form-group">
                <input class="form-control" type="password" placeholder="Your current Password" id="currentPassword" name="currentPassword" value="" />
            </div>
            <div class="form-group">
                <input class="form-control" type="password" placeholder="New password" id="newPassword" name="newPassword" value="" />
            </div>
            <div class="form-group">
                <input class="form-control" type="password" placeholder="New passowrd (repeat)" id="newPasswordRepeat" name="newPasswordRepeat" value="" />
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
                @apply lg:w-[335px] text-sm;
            }
        }
    }
</style>