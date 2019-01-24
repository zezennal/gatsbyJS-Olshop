/* eslint-disable */

import React, { Component } from 'react'
import {Link} from 'gatsby'
import {faAlignRight, FaAlignRight} from 'react-icons/fa'
import styled from 'styled-components'

export default class NavbarHeader extends Component {
  render() {
    const {handleNavbar} = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <h1>myLogo</h1>
        </Link>
        <FaAlignRight 
          className="toggle-icon" 
            onClick={ () => {
              handleNavbar()
          }} 
        />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;

  .toggle-icon{
    font-size: 1.75rem;
    color: orange;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`