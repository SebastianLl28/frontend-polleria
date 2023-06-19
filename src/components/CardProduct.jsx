import styled from "styled-components"
import { darken } from "polished";
import { useFetchProduct } from "../hooks/usePruebaProduct"
import { Paragraph } from "../styled-components/components/Text"
import { useCarritoStore } from "../store/carrito"

const CardProduct = ({ productId }) => {

  const { data: product, isLoading } = useFetchProduct(productId.id)
  const addCarrito = useCarritoStore(state => state.addCarrito)
  const removeCarrito = useCarritoStore(state => state.restarCarrito)
  
  const handleAdd = (id) => {
    addCarrito(id);
  }

  const handleRemove = (id) => {
    removeCarrito(id);
  }
  return (
    <Main>
      {!isLoading && (
        <Container>
          <picture>
            <Image src={product.imagen}/>
          </picture>
          <Wrapp>
            <Name>{product.nombre}</Name>
            <div>
              <Count>
                <ButtonAdd onClick={ () => handleAdd(product.id)}>+</ButtonAdd>
                <p>{productId.count}</p>
                <ButtonDelete onClick={ () => handleRemove(product.id)}>-</ButtonDelete>
              </Count>
              <Price>S/.{product.precio * productId.count}</Price>
            </div>
          </Wrapp>
        </Container>
      )}
    </Main>
  )
}

export default CardProduct

const Main = styled.div`
  border-radius: .2rem;
  box-shadow: 0px 0px 18px -5px rgba(0,0,0,0.2);
  position: relative;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: .7fr 1fr;
  gap: .3em;
`

const Image = styled.img`
  border-radius: 0.2rem;
`

const Name = styled(Paragraph)`
  font-size: 1.2em;
`

const ButtonAdd = styled.button`
  background-color: #d5e8d4;
  font-size: 1.5em;
  width: 1.3em;
  height: 1.3em;
  cursor: pointer;
  &:hover {
    background-color: ${darken(0.08, '#d5e8d4')};
  }
`

const ButtonDelete = styled(ButtonAdd)`
  font-weight: bold;
  background-color: #f8cecc;
  &:hover {
    background-color: ${darken(0.08, '#f8cecc')};
  }
`

const Count = styled.div`
  display: flex;
  align-items: center;
  gap: .8em;
`

const Wrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: .3em 0;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Price = styled.p`
  font-family: ${({theme}) => theme.fonts.font2};
  font-size: 2em;
`