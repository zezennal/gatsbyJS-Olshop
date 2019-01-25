/* eslint-disable */
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner } from '../utils'
import img from '../images/home-bg.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="55 main street - santa monica, CA"/>
    </HomeHeader>
  </Layout>
)

export default IndexPage
