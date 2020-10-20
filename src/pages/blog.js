import React from "react"

import Layout from "../components/layout"

import styles from '../components/blog.module.css'


const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>
          Cupidatat excepteur tempor veniam est sit est adipisicing consectetur.
          Sunt aute nostrud nostrud adipisicing consequat amet non enim aliqua
          nostrud cillum. Irure laboris commodo qui esse. Sint ex mollit
          incididunt pariatur. Est nostrud dolor dolor nulla magna sint amet ut.
          Elit officia do deserunt cillum.
      </p>
      </div>
    </Layout>
  )
}

export default blog
