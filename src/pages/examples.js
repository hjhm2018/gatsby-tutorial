import React from 'react'
import Header from '../examples/Header'
import HeaderStatic from '../examples/HeaderStatic'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

function examples({ data }) {
    // console.log(props)

    const { site: { info: { author } } } = data;

    return (
        <Layout>
            <div>
                <p>Hello from examples page</p>
                <Header />
                <HeaderStatic />
                <h5>Author: {author}</h5>
            </div>
        </Layout>
    )
}

export const data = graphql`
        query  {
        site {
            info: siteMetadata {
            author
            data
            description
            person {
                age
                name
            }
            title
            }
        }
        }
`

export default examples
