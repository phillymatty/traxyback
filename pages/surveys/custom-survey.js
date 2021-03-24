import { getCompanySurveyQuestions } from '../../lib/surveys'
import Link from 'next/link'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  const query = context.query
  console.warn(query)
  // const res = await fetch('https://.../data')
  // const surveyData = await res.json()
  const surveyData = getCompanySurveyQuestions(query.survey_id)
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