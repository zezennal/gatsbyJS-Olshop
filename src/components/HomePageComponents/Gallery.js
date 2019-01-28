import React from 'react'
import styled from 'styled-components'
import {StaticQuery, graphql} from 'gatsby'
import {styles, Section} from '../../utils'
import Img from 'gatsby-image'

export default function Gallery() {
  return (
    <StaticQuery query={graphql`{
          img1: file(relativePath:{eq:"HomeGalery/img1.jpg"}){
            childImageSharp{
              fluid(maxWidth:500){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `} render={data => <Img fluid={data.img1.childImageSharp.fluid} />}
    />
  )
}
