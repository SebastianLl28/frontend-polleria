import styled from "styled-components"
import { useCarritoStore } from "../../../store/carrito"
import { Paragraph } from "../../../styled-components/components/Text"

const CardProduct = ({ product }) => {

  const addCarrito = useCarritoStore(state => state.addCarrito)
  // const clearCarrito = useCarritoStore(state => state.clearCarrito)


  const handleAdd = (id) => {
    // clearCarrito()
    addCarrito(id)
  }


  return (
    <Main onClick={() => handleAdd(product.id)}>
      <picture>
        <Image src={`${product.imagen}`}/>
      </picture>
      <Container>
        <Name>{product.nombre}</Name>
        <Price>$/{product.precio}</Price>
      </Container>
    </Main>
  )
}

export default CardProduct

/*
  "id"
  "category"
  "imagen"
  "nombre"
  "precio"
  "stock"
  "estado"
*/

const Main = styled.li`
  max-width: 600px;
  display: grid;
  grid-template-rows: 1fr .2fr;
  height: 15rem;
  border-radius: .2rem;
  overflow: hidden;
  position: relative;
  transition: transform 0.4s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  & picture {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

    &::after{
      width: 100%;
      height: 100%;
      content: 'Agregar al carrito';
      display: block;
      background-color: rgba(0, 0, 0, 0.4);
      position: absolute;
      border-radius: .2rem;
      transform: translateX(100%);
      transition: transform 0.4s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5em;
    }

    &:hover::after{
      transform: translateX(0);
    }
  }
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: .2rem;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr .5fr;
  text-overflow: ellipsis;
  align-items: center;
  gap: 1em;
  padding: 0 2px;
`

const Name = styled(Paragraph)`
  font-size: 1.3em;
  /* white-space: nowrap; */
  /* overflow: hidden; */
`
const Price = styled(Paragraph)`
  justify-self: end;
  font-size: 1.8em;
  align-self: center;
  font-family: ${({theme}) => theme.fonts.font2};
  /* outline: 1px solid white; */
`