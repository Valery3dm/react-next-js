import {useState, useEffect} from 'react';
import MainLayout from '../layouts/MainLayout';
import Link from "next/link";

const Posts = ({posts: serverPosts}) => {
    const [posts, setPosts] = useState(serverPosts)

    useEffect(() => {
        const loadMockData = async () => {
            const response = await fetch('http://localhost:4200/posts')
            const json = await response.json()
            setPosts(json)
        }
        if(!serverPosts) {
            loadMockData()
        }
    }, [])

    if(!posts) {
        return <MainLayout>
            <h1>Loading ...</h1>
        </MainLayout>
    }

    return (
        <MainLayout title={'Posts page'}>
            <h1>Posts page</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`post/${post.id}`}>
                            <a>
                                {post.title}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainLayout>

    )
}

export default Posts;

Posts.getInitialProps = async (ctx) => {
    if (!ctx.req) {
        return {posts: null}
    }
    const response = await fetch('http://localhost:4200/posts')
    const posts = await response.json()

    return {
        posts
    }
}