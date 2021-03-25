export function getSurveyQuestions() {
    //Dummy data for now
    return {
        "survey_id": "1",
        "survey_name": "Dummy Data",
        "customer_name": ' ', 
        "company_name": '', 
        "survey_type": '',
        "user_name": ' ',
        "questions": [
            {
                "question_id": "1",
                "question_name": "Friendly",
                "question_type": "star",
                "question": "Friendly",
                "page": "1",
                "sort": "1",
                "answer": ""
            },
            {
                "question_id": "4",
                "question_name": "Overall Service",
                "question_type": "star",
                "question": "Overall Service",
                "page": "1",
                "sort": "1",
                "answer": ""
            },
            {
                "question_id": "5",
                "question_name": "Comments",
                "question_type": "text",
                "question": "Any additional comments?",
                "page": "1",
                "sort": "1",
                "answer": ""
            },
            {
                "question_id": "3",
                "question_name": "Knowledgeable",
                "question_type": "star",
                "question": "Knowledgeable",
                "page": "2",
                "sort": "1",
                "answer": ""
            },
            {
                "question_id": "2",
                "question_name": "Attentive",
                "question_type": "star",
                "question": "Attentive",
                "page": "2",
                "sort": "2",
                "answer": ""
            }
        ]
    }
}

export function getCompanySurveyQuestions(param) {

    switch (param) {
        case "1":
            return {
                "survey_id": "1",
                "survey_name": "Default Calendar Events",
                "questions": [
                    {
                        "question_id": "1",
                        "question_name": "Friendly",
                        "question_type": "star",
                        "question": "Friendly",
                        "page": "1",
                        "sort": "1",
                        "answer": ""
                    }
                ]
            }
        case "2":
            return {
                "survey_id": "2",
                "survey_name": "Default Calendar Events",
                "questions": [
                    {
                        "question_id": "2",
                        "question_name": "Attentive",
                        "question_type": "star",
                        "question": "Attentive",
                        "page": "2",
                        "sort": "2",
                        "answer": ""
                    }
                ]
            }
        case "3":
            return {
                "survey_id": "3",
                "survey_name": "Default Calendar Events",
                "questions": [
                    {
                        "question_id": "4",
                        "question_name": "Overall Service",
                        "question_type": "star",
                        "question": "Overall Service",
                        "page": "1",
                        "sort": "1",
                        "answer": ""
                    }
                ]
            }
        default:
            return {
            "survey_id": "3",
            "survey_name": "Default Calendar Events",
            "questions": [
            ]
        }
    }
}

export function sendData(surveyData, surveyHash) {
    fetch(`https://survey-hackathon-api.review.securitytrax.com/sandbox/user/v1/surveys/${surveyData.survey_id}/actions/save_survey_data/${surveyHash}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=urf-8'
        },
        body: JSON.stringify(surveyData)
    })
}

export function updateOverallScore(surveyData, surveyHash) {
    //TODO: add POST to update Overall Rating score for User
}