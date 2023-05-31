import styled from "styled-components"
import { Link } from "react-router-dom"
import { ContainerSection, Icon, LinkText } from "../styled-components/components"
import { useCarritoStore } from "../store/carrito"



const Header = () => {

  const setOpen = useCarritoStore(state => state.setOpen)

  return (
    <Main>
      <Container>

        <List>
          <li><LinkText to='/'>Inicio</LinkText></li>
          <li><LinkText to='/products'>Productos</LinkText></li>
          <li><LinkText to='/locales'>Locales</LinkText></li>
        </List>

        <Link to='/'>
          <Logo src="./logo.svg"/>
        </Link>

        <List end = "true">
          <li>
            <CardLink to='/login'>
              <span>Ingresar</span>
              <Icon src="./icon-user.svg"/>
            </CardLink>
          </li>
          <Center>
            <button>
              <IconCar src="./icon-shopping-car.svg" onClick={setOpen}/>
            </button>
          </Center>
        </List>

      </Container>
    </Main>
  )
}

export default Header


const Main = styled.header`
  width: 100%;
  padding: 1rem 0;
  background-color: ${({theme})=> theme.color.primary100};
  position: sticky;
  top: 0;
  z-index: 2;
  box-shadow: 0px 10px 18px 10px rgba(0, 0, 0, 0.25);
`

const Container = styled(ContainerSection)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const List = styled.ul`
  align-items: center;
  display: flex;
  gap: 1.5em;
  justify-self: ${(prop) => prop.end ? 'end': 'start'};
`

const CardLink = styled(Link)`
  padding: .5em;
  background-color: ${({theme}) => theme.color.primary200};
  display: flex;
  align-items: center;
  gap: .5em;
  border-radius: .5rem;
`

const Center = styled.li`
  display: flex;
  align-items: center;
`
const Logo = styled.img`
  height: 3rem;
  width: auto;
  margin: auto;
  filter: drop-shadow( 0px 0px 5px #483f3f );
  transition: filter 0.4s ease;
  animation: locazo 5s forwards infinite linear;

  &:hover {
    animation-play-state: paused;
    filter: drop-shadow( 0px 0px 15px #483f3f );
  }

  @keyframes locazo {
    0% {
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }
`

const IconCar = styled(Icon)`
  cursor: pointer;
`