import { getSurveyQuestions } from '../../lib/surveys'
import Link from 'next/link'
import { useRouter } from 'next/router'




export default function CustomSurvey({ id }) {

  const {query} = useRouter()
  const surveyData = getSurveyQuestions(query.id)
    return (
      <>
        { id }
        <h1>Sandbox survey</h1>
        <ul>
        {surveyData.questions.map((object, i) => (
            <li key={i}>
              {object.prompt}
              <br />
              {object.type}
            </li>
          ))}
        </ul>
        <Link href='/surveys/thank-you'>
          <a>submit</a>
        </Link>
      </>
    ) 
  }