import type { QuestionnaireType } from "../../types";

export default <QuestionnaireType[]>[
    {
        'id': 'isPoliticallyExposed',
        'question': 'Are you a politically exposed person?',
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
    {
        'id': 'isFamilyPoliticallyExposed',
        'question': 'Are you a close family member of a politically exposed person?',
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
    {
        'id': 'isAssociatePoliticallyExposed',
        'question': 'Are you a close associate or a politically exposed person?',
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