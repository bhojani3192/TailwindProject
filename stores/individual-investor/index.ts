import { defineStore } from "pinia"
import type { PERSONALINFORMATION } from "./types"

type RootState = {
    personalInformation: PERSONALINFORMATION;
};


export const useIndividualInvestorStore = defineStore('individualInvestor', {
    state: () => ({
        personalInformation: {
            'firstName': '',
            'middleName': '',
            'lastName': '',
            'nationality': '',
            'gender': '',
            'dateOfBirth': '',
            'idOrPassportNumber': 0,
            'address': '',
            'city': '',
            'postalCode': '',
            'country': ''
        }
    } as RootState),
    getters: {

    },
    actions: {

    },
})