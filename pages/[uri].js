import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import { getPostByUri } from '../lib/test-data';
import { client } from '../lib/apollo';
import { gql } from '@apollo/client';
import Image from 'next/image';

const gumletLoader = ({ src, width, quality }) => {
  return `https://w-dmr.gumlet.io${src}?w=${width}&q=${quality || 75}`
  
}
export default function SlugPage({ post }) {

  return (
    <div>
      <Head>
        <title>Dinamalar News Detail</title>
        <link rel="icon" href="favicon.ico"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <main>
      <nav>
      
      <Link href="/"><a className="backbtn">&larr; Back </a></Link>
      
      
      
    </nav>

          <div className="siteHeader">
            <h1 className="title">
                {post.title}
              
            </h1>
            <p className='datetime'>🗓️  &nbsp; {new Date(post.date).toLocaleDateString()} | &nbsp; 🕜 &nbsp;{new Date(post.date).toLocaleTimeString()}</p>
          </div>
          
          <figure>
          <Image
      loader={gumletLoader}
      src={post.featuredImage.node.sourceUrl}
      alt="Dinamalar Tamil News"
      width={600}
      height={413}
      layout="responsive"
    />
              </figure>
            
            <article dangerouslySetInnerHTML={{__html: post.content}}>   
            </article>
            <p> <Link href="/"><a className="backbtnbtm">&larr; Back </a></Link> </p>

            
      </main>

      <Footer></Footer>

    </div>
  )
}


export async function getStaticProps({ params }){
  const GET_POSTS_BY_URI = gql`
  query GetPostByURI($id: ID!) {
    post(id: $id, idType: URI) {
      title
      content
      date
      uri
      featuredImage {
        node {
          id
          sourceUrl
        }
      }
      author {
        node {
          firstName
        }
      }
      
    }
  
  }
  `
  const response = await client.query({
    query: GET_POSTS_BY_URI,
    variables: {
      id: params.uri
    }
  })
  const post = response?.data?.post
  return {
    props: {
      post
    }
  }
}



export async function getStaticPaths(){
    const paths = []
    return {
        paths,
        fallback: 'blocking'
    }
}
