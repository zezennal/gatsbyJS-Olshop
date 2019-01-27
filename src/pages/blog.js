import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import menuImg from '../images/menu-bg.jpg'

const BlogPage = () => (
  <Layout>
    <SEO title="home" keywords= {[`gatsby`, `application`, `react`]}/>
    <PageHeader img={menuImg}>
      <Banner title="Blog" subtitle="a little blog" />
    </PageHeader>
  </Layout>
)

export default BlogPage