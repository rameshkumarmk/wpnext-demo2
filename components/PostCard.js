import Link from "next/link"

export default function PostCard ({ post }){
    return (
        <Link href={post.uri} className={"card"}>
            <a className="card">
            <img src={`https://w.dinamalar.com/${post.featuredImage.node.sourceUrl}`}
                
                  alt="Dinamalar Tamil News"
                />
                <h3>{post.title} &rarr;</h3>
            </a>
        </Link>
    )
}
