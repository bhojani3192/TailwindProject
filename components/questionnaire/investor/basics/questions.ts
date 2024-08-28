import type { QuestionnaireType } from "../../types";

export default <QuestionnaireType[]>[
    {
        'id': 'age',
        'question': 'Your age',
        'options': [
            {
                'value': '18-24',
                'label': 'From 18 to 24',
            },
            {
                'value': '25-39',
                'label': 'From 25 to 39',
            },
            {
                'value': '40-64',
                'label': 'From 40 to 64',
            },
            {
                'value': '65+',
                'label': 'Over 65',
            }
        ]
    }, {
        'id': 'education',
        'question': 'Your education',
        'options': [
            {
                'value': 'highschool',
                'label': 'Up to high school',
            },
            {
                'value': 'ug',
                'label': 'Undergraduate university degree',
            },
            {
                'value': 'masters',
                'label': 'Masters degree',
            },
            {
                'value': 'phd',
                'label': 'PhD',
            }
        ]
    }, {
        'id': 'employment',
        'question': 'Your employment status',
        'options': [
            {
                'value': 'student',
                'label': 'I am a student',
            },
            {
                'value': 'unemployed',
                'label': 'I am unemployed',
            },
            {
                'value': 'parttime',
                'label': 'I am employed part-time',
            },
            {
                'value': 'fulltime',
                'label': 'I am employed full time',
            },
            {
                'value': 'self-employed',
                'label': 'I am self-employed',
            },
            {
                'value': 'investments',
                'label': 'I make a living out of my investments and / or savings',
            },
            {
                'value': 'retired',
                'label': 'I am retired',
            }
        ]
    },

]