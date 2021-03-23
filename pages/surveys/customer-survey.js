import { useRouter } from 'next/router'
import { getSurveyQuestions } from '../../lib/surveys'
import Link from 'next/link'
import Layout from '../../components/layout'

export async function getStaticProps() {
  const surveyData = getSurveyQuestions('base')
  return {
    props: {
      surveyData,
    }
  }
}

export default function CustomerSurvey({ surveyData }) {
  const {query} = useRouter()
  const nextRoute = `custom-survey?${query.test}`
    return (
      <Layout>
        <h1>This is a survey</h1>
        <ul>
          {surveyData.questions.map(({ prompt, type }) => (
            <li>
              {prompt}
              <br />
              {type}
            </li>
          ))}
        </ul>
        <Link href={{
          pathname: 'custom-survey',
          query,
        }}>
          <a>next</a>
        </Link>
      </Layout>
    ) 
  }