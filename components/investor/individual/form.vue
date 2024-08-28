<script setup lang="ts">
const { personalInformation: data } = useIndividualInvestorStore()
</script>
<template>
    <div class="pt-8 pb-2">
        <div class="form-group items-center">
            <label for="firstName">First name</label>
            <input class="form-control" type="text" id="firstName" name="firstName" v-model="data.firstName">
        </div>
        <div class="form-group items-center">
            <label for="middleName">Middle name</label>
            <input class="form-control" type="text" id="middleName" name="middleName" v-model="data.middleName">
        </div>
        <div class="form-group items-center">
            <label for="lastName">Last name</label>
            <input class="form-control" type="text" id="lastName" name="lastName" v-model="data.lastName">
        </div>
        <div class="form-group items-center">
            <label for="nationality">Nationality</label>
            <input class="form-control" type="text" id="nationality" name="nationality" v-model="data.nationality">
        </div>
        <div class="form-group items-center">
            <label for="gender">Gender</label>
            <input class="form-control" type="text" id="gender" name="gender" v-model="data.gender">
        </div>
        <div class="form-group items-center">
            <label for="dateOfBirth">Date of birth</label>
            <input class="form-control" type="date" id="dateOfBirth" name="dateOfBirth" v-model="data.dateOfBirth">
        </div>
        <div class="form-group items-center">
            <label for="idOrPassportNumber">ID or Passport number</label>
            <input class="form-control" type="number" id="idOrPassportNumber" name="idOrPassportNumber"
                v-model="data.idOrPassportNumber">
        </div>
        <div class="form-group items-center">
            <label for="address">Address</label>
            <input class="form-control" type="text" id="address" name="address" v-model="data.address">
        </div>
        <div class="form-group items-center">
            <label for="city">City</label>
            <input class="form-control" type="text" id="city" name="city" v-model="data.city">
        </div>
        <div class="form-group items-center">
            <label for="postalCode">Postal code</label>
            <input class="form-control" type="number" id="postalCode" name="postalCode" v-model="data.postalCode">
        </div>
        <div class="form-group items-center">
            <label for="country">Country</label>
            <input class="form-control" type="text" id="country" name="country" v-model="data.country">
        </div>
    </div>
</template>