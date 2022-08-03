import React from 'react'
import styled from 'styled-components'


const StyledHeader = styled.header`
  background-color: White;
  box-shadow: 0 3px 3px rgba(0,0,0,.2);
  display:grid;
  grid-template-columns: 1fr 200px;
  grid-column-gap: 20px;
`;



function Navbar() {
  return (
    <StyledHeader>
      
      Hi

     
    </StyledHeader>
  )
}

export default Navbar
