import styled from "styled-components"
import { useFetchProduct } from "../hooks/usePruebaProduct"
import { Paragraph } from "../styled-components/components/Text"

const CardProduct = ({ productId }) => {

  const { data: product, isLoading } = useFetchProduct(productId)

  return (
    <Main>
      {!isLoading && (
        <Container>
          <picture>
            <Image src={product.imagen}/>
          </picture>
          <div>
            <Name>{product.nombre}</Name>
            <button>Delete</button>
          </div>
        </Container>
      )}
    </Main>
  )
}

export default CardProduct

const Main = styled.div`
  border-radius: .2rem;
  box-shadow: 0px 0px 18px -5px rgba(0,0,0,0.2);
  /* justify-self: start; */
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