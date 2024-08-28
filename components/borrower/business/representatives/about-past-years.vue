<template>
    <hr class="my-10" />
    <h1 class="form-heading">Have you or any company that you have controlled or operated or managed for the last 5
        years</h1>

    <!-- charged -->
    <div class="form-group items-center">
        <label for="emailAddress">been convicted (charged) of a criminal offense and / or convicted of a criminal
            offense under the criminal law in any country?
        </label>
        <div class="flex flex-col gap-y-4">
            <div class="control-group">
                <input type="radio" id="charged-yes" name="charged" value="yes" class="form-control" />
                <label for="charged-yes"> Yes </label>
            </div>
            <div class="control-group">
                <input type="radio" id="charged-no" name="charged" value="no" class="form-control" />
                <label for="charged-no"> No </label>
            </div>
        </div>
    </div>

    <!-- sanctions -->
    <div class="form-group items-center mt-10">
        <label for="emailAddress">been subject to any administrative, disciplinary and / or any other statutory
            penalties (sanctions)?
        </label>
        <div class="flex flex-col gap-y-4">
            <div class="control-group">
                <input type="radio" id="sanctions-yes" name="sanctions" value="yes" class="form-control" />
                <label for="sanctions-yes"> Yes </label>
            </div>
            <div class="control-group">
                <input type="radio" id="sanctions-no" name="sanctions" value="no" class="form-control" />
                <label for="sanctions-no"> No </label>
            </div>
        </div>
    </div>

    <!-- bankruptcy -->
    <div class="form-group items-center mt-10">
        <label for="emailAddress">been subject to bankruptcy, restructuring proceedings and / or the corresponding
            proceedings in any jurisdiction or under any law?
        </label>
        <div class="flex flex-col gap-y-4">
            <div class="control-group">
                <input type="radio" id="bankruptcy-yes" name="bankruptcy" value="yes" class="form-control" />
                <label for="bankruptcy-yes"> Yes </label>
            </div>
            <div class="control-group">
                <input type="radio" id="bankruptcy-no" name="bankruptcy" value="no" class="form-control" />
                <label for="bankruptcy-no"> No </label>
            </div>
        </div>
    </div>

    <!-- for-pre-trial -->
    <div class="form-group items-center mt-10">
        <label for="emailAddress">been suspect in a trial or pre-trial investigation?
        </label>
        <div class="flex flex-col gap-y-4">
            <div class="control-group">
                <input type="radio" id="forpretrial-yes" name="forPreTrial" value="yes" class="form-control" />
                <label for="forpretrial-yes"> Yes </label>
            </div>
            <div class="control-group">
                <input type="radio" id="forpretrial-no" name="forPreTrial" value="no" class="form-control" />
                <label for="forpretrial-no"> No </label>
            </div>
        </div>
    </div>

    <!-- sanctions -->
    <div class="form-group items-center mt-10">
        <label for="circumstances">If you have answered positively (“Yes”) to one or more of the questions above, please
            describe the material circumstances, with dates for the relevant events and relevant decisions.
        </label>
        <textarea name="circumstances" id="circumstances" cols="30" rows="10" class="form-control"></textarea>
    </div>

</template>