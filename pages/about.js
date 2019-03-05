
import Link from 'next/link'
import Layout from '../components/Layout'
import { Component } from 'react'
import fetch from 'isomorphic-unfetch'

export default class About extends Component {

    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/nuenook')
        const data = await res.json()

        return { user: data}
    }

    componentDidMount() {
        
    }

    render () {
        return (
            <Layout title="About">
            {/* {JSON.stringify(this.state)} */}
    <p>A Javascript programmer</p>
    <img src="/static/javascript-logo.png" alt="javaScript" height="200px"/>
</Layout>
        )
    }
}
