import styled from "styled-components"
import { ContainerSection } from "../styled-components/components/Sections"
import { Icon } from "../styled-components/components/Image"
import { Link } from "react-router-dom"
import { LinkText } from "../styled-components/components"

const Footer = () => {
  return (
    <Main>
      <Container>
        <div>
          <Logo src="https://static.vecteezy.com/system/resources/thumbnails/017/485/083/small/fried-chicken-restaurant-logo-template-free-vector.jpg"/>
        </div>
        <Contact>
          <Element>
            <Icon src="./icons/icon-phone.svg"/><span>Telefon: 995-732-543</span>
          </Element>
          <Element>
            <Icon src="./icons/icon-mail.svg"/><span>Correo: polleria@chicken.com</span>
          </Element>
          <Element>
            <Icon src="./icons/icon-locationpin.svg"/><span>GPS: Mz H Lt19 Ate-Lima-Ate</span>
          </Element>
        </Contact>

        <List>
          <li><LinkText to="/">Inicio</LinkText></li>
          <li><LinkText to="/products">Producto</LinkText></li>
          <li><LinkText to="/locales">Locales</LinkText></li>
        </List>

        <Info>
          <Text>Aceptamos</Text>
          {/* <Tiny src="./yape.png" alt="" /> */}
          {/* <Tiny src="./americaexpresscard.png" alt="" /> */}
          {/* <Tiny src="./mastercard.png" alt="" /> */}
        </Info>
      </Container>
    </Main>
  )
}

export default Footer

const Main = styled.footer`
  width: 100%;
  background-color: ${({theme}) => theme.color.primary100};
  padding: 2rem 0;
`

const Container = styled(ContainerSection)`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
  'logo logo logo'
  'contact links acept';

  & div:first-child {
    grid-area: logo;
    align-self: end;
    margin-bottom: 2rem;
  }
`

const Contact = styled.ul`
  grid-area: contact;
  color: ${({ theme }) => theme.color.text100};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
`

const Element = styled.li`
  display: flex;
  gap: .5em;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.font2};
  font-weight: 400;
  font-size: 1.3em;
`

const Logo = styled.img`
  width: 4rem;
  height: 4rem;
`

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: center;
`

const Tiny = styled.img`
  height: 3rem;
  width: auto;
  object-fit: cover;
  

  &:first-child {
    background-color: red;
    width: 2.5rem;
  }
`

const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.font1};
  width: 100%;
  align-self: start;
  text-align: center;
  color: ${({ theme }) => theme.color.text100};
  font-weight: 600;
`