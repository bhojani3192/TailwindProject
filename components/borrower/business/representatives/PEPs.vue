<template>
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
        <label for="articlesOfAssociation">
            Please upload a document to demonstrate your representation rights over the legal entity
            <span class="block mt-2">
                e.g. Articles of Association, stamped register of directors, Power of Attorney, etc.
            </span>
        </label>
        <Fileuploader :id="`articlesOfAssociation`" />
    </div>
</template>