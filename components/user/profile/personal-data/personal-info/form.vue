<template>
    <div class="">
        <form>
            <div class="form-group">
                <input class="form-control" placeholder="Name" type="text" id="name" name="name" value="">
            </div>
            <div class="form-group">
                <input class="form-control" placeholder="Surname" type="text" id="surname" name="surname" value="">
            </div>
            <div class="form-group">
                <input class="form-control" placeholder="Citizenship" type="citizenship" id="citizenship" name="citizenship" value="">
            </div>
            <div class="form-group">
                <input class="form-control" placeholder="Country of tax residency" type="text" id="countryTax" name="countryTax" value="">
            </div>
            <div class="form-group">
                <input class="form-control" placeholder="Tax identification number (in the country of residence)" type="number" id="taxIdentification" name="taxIdentification" value="">
            </div>
            <div class="form-group">
                <input class="form-control" placeholder="Email address" type="email" id="email" name="email" value="">
            </div>
            <h2 class="">Residence address</h2>
            <div class="form-group">
                <input class="form-control" placeholder="Address" type="text" id="address" name="address" value="">
            </div>
            <div class="form-group">
                <input class="form-control" placeholder="Country" type="number" id="country" name="country" value="">
            </div>
            <div class="form-group">
                <input class="form-control" placeholder="City" type="text" id="city" name="city" value="">
            </div>
            <div class="form-group">
                <input class="form-control" placeholder="Region" type="text" id="region" name="region" value="">
            </div>
            <div class="form-group">
                <input class="form-control" placeholder="Postal code" type="text" id="postalCode" name="postalCode" value="">
            </div>
        </form>
    </div>
</template>
<style lang="scss" scoped>
    form {
        @apply w-full mt-5;
        h2 {
            @apply text-base font-bold my-5;
        }
        .form-group {
            @apply grid-cols-1 mb-4;
            .form-control {
                @apply lg:w-[335px] sm:w-auto text-sm;
            }
        }
    }
</style>