import { getSurveyQuestions, sendData } from '../../lib/surveys'
import Link from 'next/link'
import Layout from '../../components/layout'
import Head from 'next/head'
import Card from '../../components/cards/card'
import Input from '../../components/inputs/input'
import CardCell from '../../components/cards/card-cell'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  const query = context.query
  let surveyData
  if (query.survey_id) {
    const res = await fetch(`https://survey-hackathon-api.review.securitytrax.com/sandbox/user/v1/surveys/${query.survey_id}/actions/get_survey_data?survey_hash=${query.survey_hash}`)
    surveyData = await res.json()
    surveyData.questions = surveyData.questions ? surveyData.questions.filter(function(question) { return question.scope != 'system'; }) : [];

    if (surveyData.questions.length == 0) {
      return {
        redirect: {
          destination: '/surveys/thank-you',
          permanent: false,
        }
      }
    }
  } else {
    surveyData = getSurveyQuestions()
  }
  return {
    props: { surveyData }
  }
}

export default function CustomSurvey({ surveyData }) {
  const {query} = useRouter();
  const customerName = (surveyData.customer_name && surveyData.customer_name != ' ' ? surveyData.customer_name : 'Valued Customer');
  const companyName = (surveyData.company_name && surveyData.company_name != '' ? surveyData.company_name : 'Sandbox Security');
  const surveyType = (surveyData.survey_type && surveyData.survey_type != '' ? surveyData.survey_type.split('_').map(word => {return word.charAt(0).toUpperCase() + word.slice(1)}).join(' ') : 'Security System Install');
  const userName = (surveyData.user_name && surveyData.user_name != ' ' ? surveyData.user_name : 'Michel Scott');

  const handleClick = (event) => {
    surveyData.is_complete = true
    sendData(surveyData, query.survey_hash)
  }
  return (
    <Layout>
      <Head>
        <title>{surveyData.survey_name}</title>
      </Head>
      <Card>
        <CardCell>
        <picture>
            <source srcSet="/darkMode-sandbox.svg" media="(prefers-color-scheme: dark)" />
            <source srcSet="/sandbox.svg" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" />
            <img id="logo" src="/sandbox.svg" />
        </picture>
          <h1>{surveyData.survey_name}</h1>
          <p>Hi {customerName}</p>
          <p>Your input is very important to us here at {companyName}. Will you take a few mins of you time and let us know how your {surveyType} with {userName} went?</p>
        </CardCell>
        <CardCell>
          {surveyData.questions.map((object, i) => (
            <Input key={i} question={object} surveyData={surveyData} surveyHash={query.survey_hash} callback={sendData}/>
          ))}
        </CardCell>
        <CardCell>
          <Link href={{
            pathname: '/surveys/thank-you',
          }}>
            <a className='button button-primary' onClick={handleClick}>Finish</a>
          </Link>
        </CardCell>
      </Card>
    </Layout>
  )
}