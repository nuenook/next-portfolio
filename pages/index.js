import Link from 'next/link'
import Layout from '../components/Layout'

const Index = () => (
    <Layout title="Home">
            <Link  href="/about">
                <a> About </a>
            </Link>
            <h1>Welcome to the home page</h1>
    </Layout>
    )

export default Index