import { useRouter } from 'next/router'
import { getCompanySurveyQuestions, getSurveyQuestions, sendData } from '../../lib/surveys'

import Link from 'next/link'
import Layout from '../../components/layout'
import Head from 'next/head'
import Card from '../../components/cards/card'
import Input from '../../components/inputs/input'

export async function getServerSideProps(context) {
    const query = context.query
    let surveyData
    if (query.survey_id && query.survey_hash) {
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

export default function CustomerSurvey({ surveyData }) {
  const {query} = useRouter();
  const customerName = (surveyData.customer_name && surveyData.customer_name != ' ' ? surveyData.customer_name : 'Valued Customer');
  const companyName = (surveyData.company_name && surveyData.company_name != '' ? surveyData.company_name : 'Sandbox Security');
  const surveyType = (surveyData.survey_type && surveyData.survey_type != '' ? surveyData.survey_type.split('_').map(word => {return word.charAt(0).toUpperCase() + word.slice(1)}).join(' ') : 'Security System Install');
  const userName = (surveyData.user_name && surveyData.user_name != ' ' ? surveyData.user_name : 'Michel Scott');

    return (
      <Layout>
        <Head>
          <title>{surveyData.survey_name}</title>
        </Head>
        <section>
        <Card>
            <h1>{surveyData.survey_name}</h1>
            <p>Hi {customerName}</p>
            <p>Your input is very important to us here at {companyName}. Will you take a few mins of you time and let us know how your {surveyType} with {userName} went?</p>
          {surveyData.questions.map((object, i) => (
            <Input key={i} question={object} surveyID={query.survey_id} surveyHash={query.survey_hash} callback={sendData}/>
          ))}
          <Link href={{
            pathname: '/surveys/custom-survey',
            query,
          }}>
            <a className='button button-primary'>next</a>
          </Link>
        </Card>
        </section>
      </Layout>
    ) 
  }