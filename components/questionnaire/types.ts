export type QuestionnaireType = {
    'question': string,
    'options': {
        'value': string,
        'label': string,
    }[],
    'multiple'?: boolean,
    'id': string
}