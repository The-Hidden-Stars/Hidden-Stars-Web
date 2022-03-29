import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head key="root"> 
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo.png" />
      </Head>
      <NextSeo
          title="Hidden Stars"
          additionalMetaTags={[
            {
              name: "keywords",
              content: "hidden, stars, mental health, depression"
            }
          ]}
          description='The Hidden Stars Movement helps each other when we are feeling extreme emotions or major issues in life. We relate and inspire each other. We take the negatives in life, 666, and turn it into positive vibes, 999.'
          openGraph={{
            url: "https://hiddenstars.vercel.app/",
            title: "Join The Hidden Stars",
            description: `The Hidden Stars Movement helps each other when we are feeling extreme emotions or major issues in life. We relate and inspire each other. We take the negatives in life, 666, and turn it into positive vibes, 999.`,
            images: [
              {
                url: "/logo.png",
                width: 128,
                height: 128,
                alt: 'Hidden Stars Logo',
                type: 'image/png',
              }
            ],
            site_name: "Hidden Stars",
          }}
          twitter={{
            site: 'https://hiddenstars.vercel.app/',
            cardType: 'summary_large_image',
          }}
      />
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    </div>
  )
}

export default MyApp
