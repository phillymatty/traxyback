export function getSurveyQuestions(param) {
    // here query BE for list of questions
    return {
        questions: 
        [ 
            {
                prompt: "Question 1",
                type: "input"
            },
            {
                prompt: "Question 2",
                type: "checkbox"
            },
            {
                prompt: param,
                type: "other"
            }
        ]
    }
}