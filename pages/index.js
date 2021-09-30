import Link from 'next/link'

import MainLayout from '../layouts/MainLayout'

const Index = () => {
    return (
        <MainLayout title={'Home page'}>
            <h1>Index page</h1>
            <p><Link href={"/about"}><a>About</a></Link></p>
            <p><Link href={"/posts"}><a>Posts</a></Link></p>
            <p>ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
        </MainLayout>
    )
}

export default Index;