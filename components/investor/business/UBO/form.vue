<script setup>
import AddIcon from '~/assets/icons/add_icon.vue'
</script>

<template>
    <div class="pt-8 pb-2">

        <div class="form-group items-center">
            <label for="firstName">First name</label>
            <input class="form-control" type="text" id="firstName" name="firstName" value="">
        </div>
        <div class="form-group items-center">
            <label for="middleName">Middle name</label>
            <input class="form-control" type="text" id="middleName" name="middleName" value="">
        </div>
        <div class="form-group items-center">
            <label for="lastName">Last name</label>
            <input class="form-control" type="text" id="lastName" name="lastName" value="">
        </div>
        <div class="form-group items-center">
            <label for="nationality">Nationality</label>
            <input class="form-control" type="text" id="nationality" name="nationality" value="">
        </div>
        <div class="form-group items-center">
            <label for="percentageOfShares">Percentage of shares owned</label>
            <input class="form-control" type="number" id="percentageOfShares" name="percentageOfShares" value="">
        </div>
        <div class="form-group items-center">
            <label for="placeOfResidence">Place of residence</label>
            <input class="form-control" type="text" id="placeOfResidence" name="placeOfResidence" value="">
        </div>
        <div class="form-group items-center">
            <label for="gender">Gender</label>
            <input class="form-control" type="text" id="gender" name="gender" value="">
        </div>
        <div class="form-group items-center">
            <label for="dateOfBirth">Date of birth</label>
            <input class="form-control" type="date" id="dateOfBirth" name="dateOfBirth" value="">
        </div>
        <div class="form-group items-center">
            <label for="passportNumber">ID or Passport number</label>
            <input class="form-control" type="number" id="passportNumber" name="passportNumber" value="">
        </div>

        <div class="form-group items-center">
            <label for="address">Address </label>
            <input class="form-control" type="text" id="address" name="address" value="">
        </div>
        <div class="form-group items-center">
            <label for="city">City</label>
            <input class="form-control" type="text" id="city" name="city" value="">
        </div>
        <div class="form-group items-center">
            <label for="postalCode">Postal code</label>
            <input class="form-control" type="number" id="postalCode" name="postalCode" value="">
        </div>
        <div class="form-group items-center">
            <label for="country">Country</label>
            <input class="form-control" type="text" id="country" name="country" value="">
        </div>

        <div class="form-group items-center">
            <label for="phoneNumber">Phone</label>
            <div class="grid grid-flow-col">
                <input class="form-control max-w-[128px] w-[96px] sm:w-full" type="number" max="10" id="countryCode"
                    name="countryCode" value="">
                <input class="form-control w-[188px] sm:w-full" type="number" max="10" id="phoneNumber"
                    name="phoneNumber" value="">
            </div>
        </div>

        <div class="form-group items-center">
            <label for="emailAddress">Email</label>
            <input class="form-control" type="email" id="emailAddress" name="emailAddress" value="">
        </div>

        <hr class="my-10" />
        <h1 class="form-heading">Information about Politically Exposed Persons ("PEPs")</h1>
        <div class="form-group items-start">
            <label for="emailAddress">Is this manager, administrator, representative, or director, or any of its family
                members or close associates, a politically exposed person*?

                <span class="block mt-2">
                    *A “Politically Exposed Person” or “PEP” is an individual who is entrusted with prominent public
                    functions, other than as a middle-ranking or more junior official.
                </span>
            </label>
            <div class="flex flex-col gap-y-4">
                <div class="control-group">
                    <input type="radio" id="yes" name="PEPs" value="yes" class="form-control" />
                    <label for="yes"> Yes (If so, please name which ones): </label>
                </div>
                <div class="control-group">
                    <input type="radio" id="no" name="PEPs" value="no" class="form-control" />
                    <label for="no"> No </label>
                </div>
                <div class="control-group">
                    <input type="radio" id="notSure" name="PEPs" value="notSure" class="form-control" />
                    <label for="notSure"> Not sure / Don’t know. </label>
                </div>
                <input class="form-control" type="text" id="pepName" name="pepName" value="">
            </div>
        </div>


        <hr class="my-10" />
        <h1 class="form-heading">Information about individuals included in lists of Sanctioned Persons</h1>
        <div class="form-group items-start">
            <label for="emailAddress">Is this manager, administrator, representative, or director, or any of its family
                members or close associates included in a list of Sanctioned Persons?
            </label>
            <div class="flex flex-col gap-y-4">
                <div class="control-group">
                    <input type="radio" id="yes" name="PEPs" value="yes" class="form-control" />
                    <label for="yes"> Yes (If so, please name which ones): </label>
                </div>
                <div class="control-group">
                    <input type="radio" id="no" name="PEPs" value="no" class="form-control" />
                    <label for="no"> No </label>
                </div>
                <div class="control-group">
                    <input type="radio" id="notSure" name="PEPs" value="notSure" class="form-control" />
                    <label for="notSure"> Not sure / Don’t know. </label>
                </div>
                <input class="form-control" type="text" id="pepName" name="pepName" value="">
            </div>
        </div>

        <hr class="my-10" />

        <div class="form-group items-center">
            <label for="uboRegister">
                Please upload a document to demonstrate ownership
                <span class="block mt-2">
                    -e.g. shareholder register, UBO register, shares certificate, etc.
                </span>
            </label>
            <Fileuploader :id="`uboRegister`" />
        </div>

        <div class="form-group items-center">
            <label for="shareholderStructureChart">
                Please upload shareholder structure chart.
            </label>
            <Fileuploader :id="`shareholderStructureChart`" />
        </div>

        <hr class="my-10" />
        <label for="">
            <span class="text-black-transparent-400">*A UBO is the natural person/s who ultimately own/s or manage/s a
                company.</span>
        </label>
        <Button class="primary mt-8 w-[228px] mb-4">
            <AddIcon class="mr-4" />
            Add UBO
        </Button>

    </div>
</template>