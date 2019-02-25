/* eslint-disable */

import React, { Component } from 'react'
import {Link} from 'gatsby'
import {faAlignRight, FaAlignRight} from 'react-icons/fa'
import styled from 'styled-components'
import {styles} from '../../../utils'

export default class NavbarHeader extends Component {
  render() {
    const {handleNavbar} = this.props
    return (
      <HeaderWrapper>
        <StyledLink to="/">
          <h1>DJ-Variasi X Nallyzer</h1>
        </StyledLink>
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

const StyledLink = styled(Link)`
  color: black;

  &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
`;

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
  
  
  .toggle-icon{
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`