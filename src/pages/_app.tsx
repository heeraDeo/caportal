import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Magnisysweb</title>
      <meta name="description" content="" />
       <meta property="og:title" content="Social Title for Cool Page" />
      <link rel="icon" href="/images/favicon.svg" />
      <link rel='apple-touch-icon' href='/images/favicon.svg' />
      <link rel='icon' type='image/png' href='/images/favicon.svg' />
      <link rel='manifest' href='/manifest.json' />
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp