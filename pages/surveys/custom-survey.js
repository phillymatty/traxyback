import { getCompanySurveyQuestions, getSurveyQuestions } from '../../lib/surveys'
import Link from 'next/link'
import Layout from '../../components/layout'
import Head from 'next/head'
import Card from '../../components/cards/card'
import Input from '../../components/inputs/input'

export async function getServerSideProps(context) {
  const query = context.query
  let surveyData
  if (query.survey_id) {
    const res = await fetch(`https://survey-hackathon-api.review.securitytrax.com/sandbox/user/v1/surveys/${query.survey_id}/actions/get_survey_data?survey_hash=${query.survey_hash}`)
    surveyData = await res.json()
    if (!surveyData.questions) {
      surveyData = getSurveyQuestions()
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
    <Layout>
      <Head>
        <title>Company Survey</title>
      </Head>

      <Card>
        <h1>Sandbox survey</h1>
        {surveyData.questions.map((object, i) => (
            <Input key={i} question={object}/>
        ))}
        <Link href='/surveys/thank-you'>
          <a className='button button-primary'>submit</a>
        </Link>
      </Card>
    </Layout>
  )
}