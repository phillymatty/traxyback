import { useRouter } from 'next/router'

import Link from 'next/link'
import Layout from '../../components/layout'
import { getSurveyQuestions } from '../../lib/surveys'

export async function getStaticProps() {
  // const res = await fetch('https://.../surveys')
  // const surveyData = await res.json()
  const surveyData = getSurveyQuestions()
  return {
    props: {
      surveyData,
    }
  }
}

export default function CustomerSurvey({ surveyData }) {
  const {query} = useRouter()
    return (
      <Layout>
        <h1>This is a survey</h1>
        <ul>
          {surveyData.questions.map((object1, i) => (
            <li key={i}>
              {object1.question_name}
              <br />
              {object1.question_type}
            </li>
          ))}
        </ul>
        <Link href={{
          pathname: '/surveys/custom-survey',
          query,
        }}>
          <a>next</a>
        </Link>
      </Layout>
    ) 
  }