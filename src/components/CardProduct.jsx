import styled from "styled-components"
import { useFetchProduct } from "../hooks/usePruebaProduct"

const CardProduct = ({ productId }) => {

  const { data, isLoading } = useFetchProduct(productId)

  if (!isLoading) {
    console.log(data)  }

  return (
    <Main>
      {!isLoading && (
        <>
          <p>{data.nombre}</p>
          <button>Delete</button>
        </>
      )}
    </Main>
  )
}

export default CardProduct

const Main = styled.div`
  border: 1px solid black;
`