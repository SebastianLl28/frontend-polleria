import styled from "styled-components"
import { useCarritoStore } from "../store/carrito"
import { useEffect } from "react";
import CardProduct from "./CardProduct";
import { ButtonPrimary } from "../styled-components/components/Button";
import { Icon } from "../styled-components/components/Image";
import { Title } from "../styled-components/components/Text";

const CarProducts = () => {

  const carActive = useCarritoStore(state => state.isOpen)
  const setOpen = useCarritoStore(state => state.setOpen)
  const products = useCarritoStore(state => state.carrito)
  
  return (
    <Main open = {carActive}>
      <Header>
        {/* <p>Carrito de compra</p> */}
        <Title color="#000">Carrito de compra</Title>
        <Icon src="./icons/icon-x.svg" onClick={setOpen}/>
      </Header>
      <List>
        {products.map(productId => (
          <CardProduct productId={productId} key={productId}/>
        ))}
      </List>
      <Button>Comprar</Button>
    </Main>
  )
}

export default CarProducts


const Main = styled.div`
  height: 99vh;
  width: 30rem;
  background-color: #fff;
  z-index: 3;
  right: .2rem;
  top: .2rem;
  border-radius: .5rem;
  padding: 1rem;
  position: fixed;
  --position: ${(prop) => prop.open === true ? "0" : "105%"};
  transform: translateX(var(--position));
  transition: transform 0.4s ease;

  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem 1fr 5rem;
  grid-template-areas: 'header' 'body' 'footer';
`


const List = styled.div`
  display: grid;
  gap: 1rem;
  overflow-y: scroll;
  grid-area: body;
  align-content: start;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #a3a3a3;
    border-radius: 5px;
  } 
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.color.primary200};
    border-radius: 5px;
  }
`

const Button = styled(ButtonPrimary)`
  margin-top: auto;
  font-size: 1.3em;
`

const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
`