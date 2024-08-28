<template>
    <div class="pt-8 pb-2">
        
            <div class="form-group items-center">
                <label for="companyName">Company name</label>
                <input class="form-control" type="text" id="companyName" name="companyName" value="">
            </div>
            <div class="form-group items-center">
                <label for="countryOfIncorporation">Country of incorporation</label>
                <input class="form-control" type="text" id="countryOfIncorporation" name="countryOfIncorporation" value="">
            </div>
            <div class="form-group items-center">
                <label for="legalEntitySCode">Legal entity's code</label>
                <input class="form-control" type="text" id="legalEntitySCode" name="legalEntitySCode" value="">
            </div>
            <div class="form-group items-center">
                <label for="dateOfFoundation">Date of foundation</label>
                <input class="form-control" type="date" id="dateOfFoundation" name="dateOfFoundation" value="">
            </div>
            <div class="form-group items-center">
                <label for="sector">Sector</label>
                <input class="form-control" type="text" id="sector" name="sector" value="">
            </div>
            <div class="form-group items-center">
                <label for="registeredAddress">Registered address</label>
                <input class="form-control" type="date" id="registeredAddress" name="registeredAddress" value="">
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

            <hr class="my-10" />

            <div class="form-group items-center">
                <label for="tradingName">Trading name</label>
                <input class="form-control" type="text" id="tradingName" name="tradingName" value="">
            </div>
            <div class="form-group items-center">
                <label for="website">Website</label>
                <input class="form-control" type="url" id="website" name="website" value="">
            </div>
            <div class="form-group items-center">
                <label for="mainBusinessAddress">Main business address
                    <span>(if different from registered address)</span>
                </label>
                <input class="form-control" type="text" id="mainBusinessAddress" name="mainBusinessAddress" value="">
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

            <hr class="my-10" />
            <div class="form-group items-center">
                <label for="registerOfIncorporation">
                    Please upload extract from the commercial register or certificate of incorporation
                </label>
                <Fileuploader :id="`registerIncorporation`" />
            </div>
            <div class="form-group items-center">
                <label for="memorandumOfIncorporation">
                    Please upload Articles of Association or
                    Memorandum of Incorporation
                </label>
                <Fileuploader :id="`memorandumOfIncorporation`" />
            </div>
        
    </div>
</template>