<template>

    <div class="py-8">
        <div class="form-group">
            <label for="projectTitle">Real estate project title
                <span class="block">Please type brief title - up to 10 words</span>
            </label>
            <textarea name="projectTitle" id="projectTitle" cols="30" rows="10" class="form-control"></textarea>
        </div>

        <div class="form-group items-center">
            <label for="projectAddress">Project address</label>
            <input class="form-control" type="text" id="projectAddress" name="projectAddress" value="">
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
            <label for="realPropertyAddress">Real property address</label>
            <input class="form-control" type="text" id="realPropertyAddress" name="realPropertyAddress" value="">
        </div>

        <div class="form-group">
            <label for="">Type of property</label>
            <div class="flex flex-col gap-y-4">
                <div class="control-group">
                    <input type="checkbox" id="residential" name="typeOfProperty" value="residential"
                        class="form-control" />
                    <label for="residential"> Residential </label>
                </div>
                <div class="control-group">
                    <input type="checkbox" id="commercial" name="typeOfProperty" value="commercial"
                        class="form-control" />
                    <label for="commercial"> Commercial </label>
                </div>
                <div class="control-group">
                    <input type="checkbox" id="office" name="typeOfProperty" value="office" class="form-control" />
                    <label for="office"> Office </label>
                </div>
                <div class="control-group">
                    <input type="checkbox" id="industrial" name="typeOfProperty" value="industrial"
                        class="form-control" />
                    <label for="industrial"> Industrial </label>
                </div>
                <div class="control-group">
                    <input type="checkbox" id="plotOfLand" name="typeOfProperty" value="plotOfLand"
                        class="form-control" />
                    <label for="plotOfLand"> Plot of land </label>
                </div>
                <div class="control-group">
                    <input type="checkbox" id="other" name="typeOfProperty" value="other" class="form-control" />
                    <label for="other"> Other </label>
                </div>
            </div>
        </div>

        <div class="form-group items-center">
            <label for="propertyMarketValue">
                Real estate property market value
                <span> At least preliminary </span>
            </label>
            <div class="w-full">
                <input class="form-control w-full" type="number" id="propertyMarketValue" name="propertyMarketValue"
                    value="">
                <div class="flex gap-x-8 mt-6 w-full">
                    <div class="control-group">
                        <input type="radio" id="EUR" name="propertyMarketValueCurrency" value="EUR"
                            class="form-control" />
                        <label for="EUR"> EUR </label>
                    </div>
                    <div class="control-group">
                        <input type="radio" id="GEL" name="propertyMarketValueCurrency" value="GEL"
                            class="form-control" />
                        <label for="GEL"> GEL </label>
                    </div>
                    <div class="control-group">
                        <input type="radio" id="PLN" name="propertyMarketValueCurrency" value="PLN"
                            class="form-control" />
                        <label for="PLN"> PLN </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="form-group items-center">
            <label for="valuation">
                If you have a valuation (performed by a
                reputable firm) of the property, please
                upload it here
            </label>
            <Fileuploader :id="`valuation`" />
        </div>

        <div class="form-group">
            <label for="">Does this real estate property belong to your company?</label>
            <div class="flex flex-col gap-y-4">
                <div class="control-group">
                    <input type="radio" id="yes" name="propertyBelongCompany" value="yes" class="form-control" />
                    <label for="yes"> Yes </label>
                </div>
                <div class="control-group">
                    <input type="radio" id="no" name="propertyBelongCompany" value="no" class="form-control" />
                    <label for="no"> No </label>
                </div>
            </div>
        </div>


        <div class="form-group">
            <label for="projectTitle">
                If the property does not belong to the loan applicant, explain who is the owners
                and specify the type of arrangement or permission you have with the owner of the property for these
                purposes
            </label>
            <textarea name="projectTitle" id="projectTitle" cols="30" rows="10" class="form-control"></textarea>
        </div>

    </div>

</template>