import { useId } from "react"
import styled from "styled-components"

const Acordeon = () => {

  const nameRadioButton = useId();

  return (
    <Main>
      <Header>
        <p>Categoria</p>
        <Arrow src="./icon-arrow.svg" alt="" />
      </Header>
      <Body>
        <Element>
          <Check type="radio" name={nameRadioButton} id="1" /><label htmlFor="1">Promoción</label>
        </Element>
        <Element>
          <Check type="radio" name={nameRadioButton} id="2" /><label htmlFor="2">FamiElementar</label>
        </Element>
        <Element>
          <Check type="radio" name={nameRadioButton} id="3" /><label htmlFor="3">Personal</label>
        </Element>
        <Element>
          <Check type="radio" name={nameRadioButton} id="4" /><label htmlFor="4">Individual</label>
        </Element>
      </Body>
    </Main>
  )
}

export default Acordeon

const Main = styled.div`
  width: 100%;
  background-color: ${({theme})=> theme.color.bg300};
`

const Arrow = styled.img`
  width: 1.2em;
`

const Header = styled.div`
  height: 2em;
  display: flex;
  justify-content: space-between;
  background-color: ${({theme}) => theme.color.primary100};
  padding: 1.5em .3em;
  align-items: center;
  border-radius: .3rem;
  `

const Body = styled.div`
  width: 100%;
  padding: .8em .3em;
`

const Check = styled.input`
  appearance: auto;
`

const Element = styled.li`
  display: flex;
  gap: .3em;
`