import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import { getPostByUri } from '../lib/test-data';
import { client } from '../lib/apollo';
import { gql } from '@apollo/client';

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
      <div className="page__section">
        <ul className="breadcrumbs">
          <li className="breadcrumbs__item breadcrumbs_type3"><Link href="/"><a className="breadcrumbs__element">Home</a></Link></li>
        
          <li className="breadcrumbs__item breadcrumbs__item_active">Latest Post</li>
        </ul>
      </div>
    </nav>

          <div className="siteHeader">
            <h1 className="title">
                {post.title}
              
            </h1>
            <p>✍️  &nbsp;&nbsp;{`${post.author.node.firstName}`} | 🗓️ &nbsp;&nbsp;{ new Date(post.date).toLocaleDateString() }</p>
          </div>
          <figure>
            
                <img
                src={`https://w.dinamalar.com/${post.featuredImage.node.sourceUrl}`}
                
                  alt="Dinamalar Tamil News"
                />
              </figure>
            
            <article dangerouslySetInnerHTML={{__html: post.content}}>   
            </article>
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