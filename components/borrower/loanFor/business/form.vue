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

            <div class="form-group">
                <label for="descriptionOfTheProject">
                    Brief description of the project, or the intended use of the funds
                </label>
                <textarea name="descriptionOfTheProject" id="descriptionOfTheProject" cols="30" rows="10"
                    class="form-control"></textarea>
            </div>

            <div class="form-group items-center">
                <label for="dateOfFoundation">Date of foundation</label>
                <input class="form-control" type="date" id="dateOfFoundation" name="dateOfFoundation" value="">
            </div>

        </div>
    
</template>