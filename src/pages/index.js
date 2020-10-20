import React from "react"

import Layout from "../components/layout"
import { ExampleButton } from "../components/button"


export default function Home() {
  return (
    <Layout>
      <h1>Hello from Gatsby</h1>
      <h1>Hello world</h1>
      <h1>Hello people</h1>
      <ExampleButton>Click Me</ExampleButton>
    </Layout>
  )
}
