// import React, { Component } from "react"

// import Layout from "../components/layout"

// import styles from '../components/products.module.css'

// // console.log(styles)

// export default class products extends Component {
//   render() {
//     return (
//       <Layout>
//         <div className={styles.page}>
//           <h1>This is our products</h1>
//           <p className={styles.text}>
//             Cupidatat excepteur tempor veniam est sit est adipisicing consectetur.
//             Sunt aute nostrud nostrud adipisicing consequat amet non enim aliqua
//             nostrud cillum. Irure laboris commodo qui esse. Sint ex mollit
//             incididunt pariatur. Est nostrud dolor dolor nulla magna sint amet ut.
//             Elit officia do deserunt cillum.
//         </p>
//         </div>
//       </Layout>
//     )
//   }
// }

import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import styles from '../components/products.module.css'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

const Products = ({ data }) => {
  const { allContentfulProduct: { nodes: products } } = data

  // console.log(products);
  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          return <article key={product.id}>
            <Image fluid={product.image.fluid} alt={product.title} />
            <h3>{product.title} <span>${product.price}</span></h3>
            <Link to={`/products/${product.slug}`}>More details</Link>
          </article>
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
      }
    }
  }
`

export default Products

