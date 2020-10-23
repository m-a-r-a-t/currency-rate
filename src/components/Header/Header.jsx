import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.h1`
  margin: 0;
  color: #e7e6dd;
  background: #4285f4;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
`
const header = React.createRef()

const animateHeader = () => {
  header.current.classList.remove('animate__jello')
  setTimeout(() => header.current.classList.add('animate__jello'), 1000)
}

setInterval(animateHeader, 30000)

const Header = () => (
  <HeaderContainer>
    <div ref={header} className="animate__animated animate__jello">
      Курс Валют
    </div>
  </HeaderContainer>
)

export default Header
