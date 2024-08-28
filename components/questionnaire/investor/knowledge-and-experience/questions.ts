export default [
    {
        'id':'expertiseOrOccupation',
        'question': 'Your current and /or previous sector of expertise and / or occupation (several options are allowed)',
        'multiple': true,
        'options': [
            {
                'value': 'administration',
                'label': 'Business management / administration',
            },
            {
                'value': 'realEstateSector',
                'label': 'Real estate sector',
            },
            {
                'value': 'bankingIndustry',
                'label': 'Financial services sector / banking industry',
            },
            {
                'value': 'auditing',
                'label': 'Accounting / auditing',
            },
            {
                'value': 'Law',
                'label': 'Law',
            },
            {
                'value': 'Engineering',
                'label': 'Engineering',
            },
            {
                'value': 'Technology sector',
                'label': 'Technology sector',
            },
            {
                'value': 'Others',
                'label': 'Others',
            }
        ]
    }, {
        'id':'workingExperienceinYears',
        'question': 'How long have you been working in your current job/self-employment/business?',
        'options': [
            {
                'value': '0-1',
                'label': 'Up to 1 year',
            },
            {
                'value': '1-5',
                'label': '1 year to 5 years',
            },
            {
                'value': '5+',
                'label': 'Over 5 years',
            },
            {
                'value': 'not currently working',
                'label': 'I am not currently working',
            }
        ]
    }, {
        'id':'familiarFundingInstruments',
        'multiple': true,
        'question': 'Which funding instruments are you familiar with? (more than one option is allowed)',
        'options': [
            {
                'value': 'Loans',
                'label': 'Loans of any kind to other persons (loan agreements, letters of credit, etc.)',
            },
            {
                'value': 'Crowdfunding',
                'label': 'Crowdfunding',
            },
            {
                'value': 'P2P',
                'label': 'P2P lending platforms',
            },
            {
                'value': 'Bonds',
                'label': 'Bonds',
            },
            {
                'value': 'Refinancing',
                'label': 'Refinancing',
            },
            {
                'value': 'none',
                'label': 'I am not familiar with any of the funding tools listed above',
            }
        ]
    }, {
        'id':'numberOfTimesProvidedFunding',
        'multiple': false,
        'question': 'Indicate the number of times that you have provided funding to others (through any instruments) in total',
        'options': [
            {
                'value': 'Never',
                'label': 'Never',
            },
            {
                'value': '1-5',
                'label': '1-5',
            },
            {
                'value': '5-10',
                'label': '5-10',
            },
            {
                'value': '10+',
                'label': 'Over 10 times',
            }
        ]
    }, {
        'id':'averageAmountOfProvidedFunding',
        'multiple': false,
        'question': 'Indicate the average amount of funding that you have provided in the past',
        'options': [
            {
                'value': 'Never',
                'label': 'Never',
            },
            {
                'value': '1000',
                'label': 'Up to EUR 1,000 (or equivalent in any other currency)',
            },
            {
                'value': '1000-10000',
                'label': 'Between EUR 1,000 and EUR 10,000 (or equivalent in any other currency)',
            },
            {
                'value': '100000-1000000',
                'label': 'Between EUR 100,000 and EUR 1 million (or equivalent in any other currency)',
            },
            {
                'value': '1000000+',
                'label': 'Over EUR 1 million (or equivalent in any other currency)',
            }
        ]
    }, {
        'id':'timeHasElapsed',
        'multiple': false,
        'question': 'Indicate how much time has elapsed since the last time you provided financing to someone',
        'options': [
            {
                'value': 'Never',
                'label': 'I have never done so',
            },
            {
                'value': '-1',
                'label': 'Less than 1 year',
            },
            {
                'value': '1-3',
                'label': 'From 1 to 3 years',
            },
            {
                'value': '3+',
                'label': 'Over 3 years',
            }
        ]
    }, {
        'id':'familiarWithCrowdfundingRisks',
        'multiple': false,
        'question': 'Are you familiar with the description of crowdfunding risks?',
        'options': [
            {
                'value': 'Yes',
                'label': 'Yes',
            },
            {
                'value': 'No',
                'label': 'No',
            },
        ]
    },    {
        'id':'referencePerson',
        'question': 'To which person listed below you can lend funds using the Bitguana platform? (several options are allowed)',
        'multiple': true,
        'options': [
            {
                'value': 'owner',
                'label': 'To the owner of a project that can be funded by the crowdfunding platform',
            },
            {
                'value': 'ownerOfCryptoAssets',
                'label': 'To the owner of crypto assets deposited in a safe wallet at the Bitguana platform as guarantee',
            },
            {
                'value': 'funds',
                'label': 'To an investment fund / hedge fund / pension fund',
            },
            {
                'value': 'operator',
                'label': 'To Bitguana, the operator of the platform',
            },
            {
                'value': 'government',
                'label': 'To government institutions',
            },
            {
                'value': 'charities',
                'label': 'To charities and non-government institutions',
            },
            {
                'value': 'anyone',
                'label': 'To anyone',
            },
            {
                'value': 'Others',
                'label': 'To others',
            }
        ]
    }, {
        'id':'environmentImpact',
        'multiple': false,
        'question': 'Do you agree that the macroeconomic environment (like an economic crisis or boom) can have an impact on the success of a real estate development project?',
        'options': [
            {
                'value': 'Yes',
                'label': 'Yes',
            },
            {
                'value': 'No',
                'label': 'No',
            },
        ]
    }, {
        'id':'mortgagesOrCryptoAssets',
        'multiple': false,
        'question': 'Do you understand that you may lose the amounts that can you lend to other users at the platform completely, as well as not receive any investment return, and that a complete loss of funds is possible even when financing projects that are classified as low risk projects, as well as even in projects that are guaranteed by various collateral such as mortgages or crypto assets?',
        'options': [
            {
                'value': 'Yes',
                'label': 'Yes',
            },
            {
                'value': 'No',
                'label': 'No',
            },
        ]
    }, {
        'id':'notResponsibleForAnyLoss',
        'multiple': false,
        'question': 'Do you understand that Bitguana is not responsible for any loss that you may suffer by using the Bitguana platform?',
        'options': [
            {
                'value': 'Yes',
                'label': 'Yes',
            },
            {
                'value': 'No',
                'label': 'No',
            },
        ]
    }, {
        'id':'consequences',
        'multiple': false,
        'question': 'Do you understand that before you start using the Bitguana platform, you must critically assess your knowledge, and experience in crowdfunding and in peer-to-peer lending, and take into account your financial situation and capacity, as well as any potential negative consequences if the loans are not recovered in full or in part at the scheduled time, or if the loan is never repaid?',
        'options': [
            {
                'value': 'Yes',
                'label': 'Yes',
            },
            {
                'value': 'No',
                'label': 'No',
            },
        ]
    },
]