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
  const {query} = useRouter()
    return (
      <Layout>
        <Head>
          <title>Customer Survey</title>
        </Head>
        <section>
        <Card>
          <h1>This is a survey</h1>
          {surveyData.questions.map((object, i) => (
            <Input key={i} prompt={object.question_name} type={object.question_type} number={i}>
              
            </Input>
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