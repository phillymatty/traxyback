import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/layout'

export async function getStaticProps() {
  const res = await fetch(`https://survey-hackathon-api.review.securitytrax.com/sandbox/user/v1/surveys/1/actions/get_survey_data?survey_hash=1a2dd-22ac29cecf5b6f2f86f7fa8c4443e534`)
  const surveyData = await res.json()
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