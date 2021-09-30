import {useState, useEffect} from 'react';
import {useRouter} from "next/dist/client/router";
import MainLayout from "../../layouts/MainLayout";
import Link from "next/link";

const Post = ({ post: serverPost }) => {
    const router = useRouter()
    console.log(router)

    const [post, setPost] = useState(serverPost);

    useEffect(() => {
        const load = async () => {
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
            const data = await response.json()
            setPost(data)
        }
        if (!serverPost) {
            load()
        }

    }, [])

    if (!post) {
        return <MainLayout>
            <p>Loading ...</p>
        </MainLayout>
    }

    return (
        <MainLayout title={`Post ${router.query.id}`}>
            <h1>Post id {router.query.id}</h1>
            <h1>{post.title}</h1>
            <hr />
            <p>{post.body}</p>
            <Link href={'/posts'}><a>Back to all posts</a></Link>
        </MainLayout>
    )
}

export default Post;

Post.getInitialProps = async (ctx, req) => {
    if (!req) {
        return {post: null}
    }
    const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`)
    const post = await response.json()

    return {
        post
    }
}
