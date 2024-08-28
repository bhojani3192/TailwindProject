import { defineStore } from 'pinia'

export const useInvestorQuestionnaireStore = defineStore({
    id: 'investorQuestionnaireStore',
    state: () => ({
        basicsInfo: {
            'age': '',
            'education': '',
            'employment': '',
        },
        kycInfo: {
            'investDuringTheCalendarYear': '',
            'purposesToUse': [],
            'originOfTheFunds': [],
        },
        contactsWithPolitics: {

        },
        knowledgeAndExperience: {
            'expertiseOrOccupation': [],
            'workingExperienceinYears': '',
            'familiarFundingInstruments': [],
            'numberOfTimesProvidedFunding': '',
            'averageAmountOfProvidedFunding': '',
            'timeHasElapsed': '',
            'familiarWithCrowdfundingRisks': '',
            'referencePerson': [],
            'environmentImpact': '',
            'mortgagesOrCryptoAssets': '',
            'notResponsibleForAnyLoss': '',
            'consequences': '',
        }
    }),
    actions: {}
})
