import Link from "next/link";
import Image from 'next/image';

export default function PostCard ({ post }){

    
    return (
        <Link href={post.uri} className={"card"}>
            <a className="card">
            <Image src={`https://w-dmr.gumlet.io${post.featuredImage.node.sourceUrl}`}
                
                  alt="Dinamalar Tamil News" width={600} height={413}
                />
                <h3>{post.title} &rarr;</h3>
            </a>
        </Link>
        
    )
}
