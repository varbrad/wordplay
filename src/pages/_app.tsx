import '../styles/global.scss'
import React from 'react'
import { AppPropsType } from 'next/dist/next-server/lib/utils'

const App = ({ Component, pageProps }: AppPropsType): JSX.Element => (
  <Component {...pageProps} />
)

export default App
