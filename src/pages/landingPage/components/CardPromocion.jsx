import styled from "styled-components"

const CardPromocion = () => {
  return (
    <Main>
      <Image src="./ofertas/oferta2.jpg"/>
      Card Promoción
    </Main>
  )
}

export default CardPromocion

const Main = styled.div`
  background-color: blue;
  overflow: hidden;
  border-radius: .5rem;
  border: unset;
  outline: none;
`

const Image = styled.img`
  width: 100%;

`