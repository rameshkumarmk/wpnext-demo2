import Link from "next/link";
import Image from 'next/image';

const gumletLoader = ({ src, width, quality }) => {
    return `https://w-dmr.gumlet.io/${src}?w=${width}&q=${quality || 75}`
    
  }

export default function PostCard ({ post }){


    
    return (
        <Link href={post.uri} className={"card"}>
            <a className="card">
<<<<<<< HEAD
            <Image
      loader={gumletLoader}
      src={post.featuredImage.node.sourceUrl}
      alt="Dinamalar Tamil News"
      width={600}
      height={413}
      layout="responsive"
    />
            {/* <Image src={`https://w-dmr.gumlet.io/${post.featuredImage.node.sourceUrl}?q=75`}
=======
            <img src={`https://w-dmr.gumlet.io${post.featuredImage.node.sourceUrl}`}
>>>>>>> 424cdb6a13f50601960e7af4d1e9b8cec9becb5e
                
                alt="Dinamalar Tamil News" width={500} height={413} layout="responsive"
                /> */}
                <h3>{post.title} &rarr;</h3>
            </a>
        </Link>
        
    )
}
