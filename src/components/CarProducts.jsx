import styled from "styled-components"
import { useCarritoStore } from "../store/carrito"
import { useEffect } from "react";
import CardProduct from "./CardProduct";

const CarProducts = () => {

  const carActive = useCarritoStore(state => state.isOpen)
  const setOpen = useCarritoStore(state => state.setOpen)
  const products = useCarritoStore(state => state.carrito)
  
  useEffect(() => {
    console.log(products)
  }, []);

  return (
    <Main open = {carActive}>
      <Icon onClick={setOpen}>X</Icon>
      <List>
        {products.map(productId => (
          <CardProduct productId={productId}/>
        ))}
      </List>
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
`
const Icon = styled.div`
  position: absolute;
  right: 2rem;
  font-size: 2em;
  cursor: pointer;
`

const List = styled.div`
  display: grid;
  gap: 2rem;
  padding-top: 3rem;
`