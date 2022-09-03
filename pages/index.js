import Head from 'next/head';

import Footer from '../components/Footer';
import PostCard from '../components/PostCard';
import { getAllPosts } from '../lib/test-data';
import { client } from "../lib/apollo";
import { gql } from "@apollo/client"



export default function Home({ posts }) {
  
  return (
    <div className="container">
        
      <Head>
        <title>தினமலர்</title>
        <link rel="icon" href="favicon.ico"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      
      
      <main>
      <img
        style={{ cursor: "pointer" }}
        src="https://img.dinamalar.com/images/dmrenglishlogonew.png"
        height="70%"
        alt="logo"
      />
        
        <p className="description">
        No.1 Tamil news website in the world.
        </p>
        
        
        
      
  

        <div className="grid">
          {
            posts.map((post) => {
              return (
                <PostCard key={post.uri} post={post}></PostCard>
              )
            })
          }
        </div>
      </main>
      
      <Footer></Footer>
    </div>
  )
}

export async function getStaticProps(){
  const GET_POSTS =gql
  `
  query GetAllPosts {
    posts(first: 100, where: { orderby: { field: DATE, order: DESC } }) {      nodes {
        title
        content
        uri
        date
      }
    }
  }
  `
  
  const response = await client.query(
  {
    query : GET_POSTS
    
  })
 
 
  const posts = response?.data?.posts?.nodes

  
  return {
    props: {
      posts
    }
  }
}
