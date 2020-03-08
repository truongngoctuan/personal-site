import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to TRUONG Ngoc Tuan's site.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <p>Now go build something great.</p>
    <div style={{ marginTop: 10, marginBottom: 10 }}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary" style={{ marginLeft: 10 }}>Default</Button>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
