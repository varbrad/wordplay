import '../styles/global.scss'
import React, { Fragment } from 'react'
import { AppPropsType } from 'next/dist/next-server/lib/utils'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppPropsType): JSX.Element => (
  <Fragment>
    <Head>
      <title>WordPlay</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Component {...pageProps} />
  </Fragment>
)

export default App
