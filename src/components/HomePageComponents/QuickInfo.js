import React, { Component } from 'react'
import {Section, Title, SectionButton} from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {styles} from '../../utils'

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="بِسْـــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ" title="otomotive" />
          <QuickInfoWrapper>
            <p className="text">solusi segala macam variasi mobil, kami menerima pesanan pasang di rumah. cek barang terlebih dahulu dan nego sampai jadi.<br/>karawang - cikampek - purwakarta</p>
            <Link to="/about/" style={{textDecoration:'none'}}>
              <SectionButton style={{margin: '2rem auto'}}>About</SectionButton>
            </Link>
          </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;

  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: 60%;
  }
`

