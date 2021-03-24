import { useRouter } from 'next/router'
import { getSurveyQuestions } from '../../lib/surveys'
import Link from 'next/link'
import Layout from '../../components/layout'
import Card from '../../components/cards/card'
import Input from '../../components/inputs/input'
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
          <Card>
        <h1>This is a survey</h1>
       
          {surveyData.questions.map((object, i) => (
            <Input key={i} prompt={object.prompt} type={object.type}>
              
            </Input>
          ))}
        <Link href={{
          pathname: '/surveys/custom-survey',
          query,
        }}>
          <a className='button button-primary'>next</a>
        </Link>
        </Card>
      </Layout>
    ) 
  }