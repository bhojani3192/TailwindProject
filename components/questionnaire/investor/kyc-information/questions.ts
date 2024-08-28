import type { QuestionnaireType } from "../../types";

export default <QuestionnaireType[]>[
    {
        'id': 'investDuringTheCalendarYear',
        'question': 'The amount you intend to invest through the Bitguana platform during the calendar year',
        'options': [
            {
                'value': '1000',
                'label': 'Up to EUR 1,000 (or equivalent in any other currency)',
            },
            {
                'value': '1000-10000',
                'label': 'Between EUR 1,000 and EUR 10,000 (or equivalent in any other currency)',
            },
            {
                'value': '100000 - 1000000',
                'label': 'Between EUR 100,000 and EUR 1 million (or equivalent in any other currency)',
            },
            {
                'value': '1000000+',
                'label': 'Over EUR 1 million (or equivalent in any other currency)',
            }
        ]
    }, {
        'id': 'purposesToUse',
        'question': 'For what purposes do you seek to use the Bitguana platform',
        'multiple': true,
        'options': [
            {
                'value': 'To invest',
                'label': 'To invest in projects/loans',
            },
            {
                'value': 'To get a loan',
                'label': 'To get a loan',
            },
            {
                'value': 'educational',
                'label': 'For educational purposes',
            },
            {
                'value': 'Others',
                'label': 'Others',
            }
        ]
    }, {
        'id': 'originOfTheFunds',
        'question': 'What is the origin of the funds you will use at the Bitguana platform',
        'multiple': true,
        'options': [
            {
                'value': 'salary',
                'label': 'From salary / savings derived from salary',
            },
            {
                'value': 'capital',
                'label': 'From capital gains / dividends/investment returns',
            },
            {
                'value': 'pension',
                'label': 'From pension / unemployment allowances / government subsidies',
            },
            {
                'value': 'inheritance',
                'label': 'From inheritance',
            },
            {
                'value': 'Others',
                'label': 'Others',
            }
        ]
    },

]