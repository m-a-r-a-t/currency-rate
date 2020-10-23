import React from 'react'
import styled from 'styled-components'

const titles = ['Код', 'Номинал', 'Валюта', 'Курс ЦБ', 'Изменения', '%']
const Title = () => (
  <TitleWrap>
    {titles.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={index} className={item !== 'Валюта' ? 'center' : null}>{item}</div>
    ))}
  </TitleWrap>
)

const TitleWrap = styled.div`
  display: grid;
  padding: 1rem 2rem;
  border-bottom: 0.5px solid #8d96b2;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr 0.5fr;
`

export default Title
