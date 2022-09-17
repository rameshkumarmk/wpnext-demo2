import '../styles/index.css'
import { ApolloProvider } from "@apollo/client/react"
import { client } from "../lib/apollo"
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import Script from "next/script";



function MyApp({ Component, pageProps }) {
  

  return (
    <>
    <Head>
// Responsive meta tag
<meta name="viewport" content="width=device-width, initial-scale=1" />
//  bootstrap CDN
<link
href="https://img.dinamalar.com/js/bootstrap5.min.css" rel="stylesheet"
/>
</Head>
  
<Script
src="https://img.dinamalar.com/js/bootstrap5.bundle.min.js"/>

    <ApolloProvider client={client}>
      <NextNProgress />
        <Component {...pageProps} />
        </ApolloProvider>
        </>
    )
}

export default MyApp