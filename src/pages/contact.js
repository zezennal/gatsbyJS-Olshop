import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils';
import contactImg from '../images/contact-bg.jpg'

const ContactPage = () => (
  <Layout>
    <SEO title="home" keywords= {[`gatsby`, `application`, `react`]}/>
    <PageHeader img={contactImg}>
      <Banner title="contact" subtitle="a little contact" />
    </PageHeader>
  </Layout>
)

export default ContactPage