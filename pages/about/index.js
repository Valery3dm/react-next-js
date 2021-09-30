import Router from 'next/router'
import MainLayout from '../../layouts/MainLayout'

const About = () => {

    const linkClickHandler = () => {
        Router.push('/')
    }
 
    return (
        <MainLayout title={'About page'}>
            <h1>About page</h1>
            <button onClick={linkClickHandler}>Go back to home</button>
            <button onClick={() => Router.push('/posts')}>Go back to posts</button>
        </MainLayout>
    )
}

export default About;