/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-debugger */
import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  const animateBtn = (e) => {
    e.target.classList.add('animate__bounceIn')
  }
  const remove = (e) => {
    e.target.classList.remove('animate__bounceIn')
  }
  return (
    <NavigationWrap onAnimationEnd={remove} onClick={animateBtn}>
      <NavLink to="/">
        <Button className="animate__animated" type="button">
          Все курсы
        </Button>
      </NavLink>
      <NavLink to="/chart">
        <Button className="animate__animated" type="button">
          График
        </Button>
      </NavLink>
      <NavLink to="/converter">
        <Button className="animate__animated" type="button">
          Конвертер
        </Button>
      </NavLink>
    </NavigationWrap>
  )
}

const NavigationWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;
`

const Button = styled.button`
  outline: none;
  color: #4285f4;
  padding: 1rem 5rem;
  border: none;
  background: white;
  transition: 0.2s all;
  :hover {
    background: #edeef0;
  }
`

export default Navigation
