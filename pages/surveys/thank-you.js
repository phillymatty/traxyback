import Layout from '../../components/layout'
import Head from 'next/head'
import Card from '../../components/cards/card'
import CardCell from '../../components/cards/card-cell'

export default function ThankYou() {
    return (
        <Layout>
        <Head>
            <title>Success!</title>
        </Head>
        <Card>
            <CardCell>
                <picture>
                    <source srcSet="/darkMode-sandbox.svg" media="(prefers-color-scheme: dark)" />
                    <source srcSet="/sandbox.svg" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" />
                    <img id="logo" src="/sandbox.svg" />
                </picture>
                <h1>Thank You</h1>
            </CardCell>
        </Card>
        </Layout>
    )
}