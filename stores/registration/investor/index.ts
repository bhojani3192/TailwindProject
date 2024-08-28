import { defineStore } from "pinia"
import type { USERDATA, POLICYANDTERMS } from "./types"

type RootState = {
    userData: USERDATA;
    policyAndTerms: POLICYANDTERMS
};


export const useInvestorStore = defineStore('investor', {
    state: () => ({
        userData: {
            currency: [],
            emailAddress: '',
            investmentAmount: '',
            typeOfInvestor: '',
            phone: 0
        },
        policyAndTerms: {
            privacyPolicy: false,
            termsAndConditions: false
        }
    } as RootState),
    getters: {
        getTypeOfInvestor(state) { return state.userData.typeOfInvestor }
    },
    actions: {
        setUser(userData: USERDATA) {
            this.userData = userData
        },
        onAgreePolicyAndTerms(data: POLICYANDTERMS) {
            this.policyAndTerms = data
        }
    },
})