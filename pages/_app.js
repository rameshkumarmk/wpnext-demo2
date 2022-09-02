import '../styles/index.css'
import { ApolloProvider } from "@apollo/client/react"
import { client } from "../lib/apollo"
import NextNProgress from "nextjs-progressbar";


function MyApp({ Component, pageProps }) {
  

  return (
    

    <ApolloProvider client={client}>
      <NextNProgress />
        <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default MyApp