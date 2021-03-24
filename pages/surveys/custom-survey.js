import { getCompanySurveyQuestions, getSurveyQuestions } from '../../lib/surveys'
import Link from 'next/link'

export async function getServerSideProps(context) {
  const query = context.query
  let surveyData
  if (query.survey_id) {
    const res = await fetch(`https://survey-hackathon-api.review.securitytrax.com/sandbox/user/v1/surveys/${query.survey_id}/actions/get_survey_data?survey_hash=1a2dd-22ac29cecf5b6f2f86f7fa8c4443e534`)
    surveyData = await res.json()
    if (!surveyData.questions) {
      surveyData = getCompanySurveyQuestions(query.survey_id)
    }
  } else {
    surveyData = getSurveyQuestions()
  }
  return {
    props: { surveyData }
  }
}

export default function CustomSurvey({ surveyData }) {

  return (
    <>
      <h1>Sandbox survey</h1>
      <ul>
        {surveyData.questions.map((object2, i) => (
          <li key={i}>
            {object2.question_name}
            <br />
            {object2.question_type}
          </li>
        ))}
      </ul>
      <Link href='/surveys/thank-you'>
        <a>submit</a>
      </Link>
    </>
  ) 
}