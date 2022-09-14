import Link from "next/link"

export default function PostCard ({ post }){
    return (
        <Link href={post.uri} className={"card"}>
            <a className="card">
            <img
                 src={`https://w.dinamalar.com/wp-content/uploads/2022/09/Tamil_News_large_3122565.jpg}`}
                
                  alt="Dinamalar Tamil News"
                />
                <h3>{post.title} &rarr;</h3>
            </a>
        </Link>
    )
}
