/* eslint-disable */
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner, BannerButton } from '../utils'
import img from '../images/home-bg.jpg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="Front End Developer" subtitle="HTML - CSS - JAVASCRIPT">
        <BannerButton style={{margin: '2rem auto'}}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
  </Layout>
)

export default IndexPage
