import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/layout'
import Head from 'next/head'
import Card from '../../components/cards/card'
import Input from '../../components/inputs/input'

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
  const {query} = useRouter();
  const customerName = (surveyData.customer_name ? surveyData.customer_name : 'Valued Customer');
  const companyName = (surveyData.company_name != '' ? surveyData.company_name : 'Sandbox Security');
  const surveyType = (surveyData.survey_type != '' ? surveyData.survey_type : 'Security System Install');
  const userName = (surveyData.user_name != '' ? surveyData.user_name : 'Michel Scott');

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
            <Input key={i} question={object}/>
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