import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        
      </Head>
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    </div>
  )
}

export default MyApp
