import styled from "styled-components"

const CardPromocion = () => {
  return (
    <Main>
      <Container>
        <Image src="./ofertas/oferta2.jpg"/>
      </Container>
    </Main>
  )
}

export default CardPromocion

const Main = styled.div`
  /* overflow: hidden; */
  border-radius: .5rem;
  border: unset;
  outline: none;
  position: relative;

  /* & > div::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: red; 
  } */
`

const Image = styled.img`
  width: 100%; 
`

const Container = styled.div`
  background-color: #8a5c5c;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: red; 
    display: block;
  }

  &:hover {
    
  }
`