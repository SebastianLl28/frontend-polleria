import styled from "styled-components"
import { ContainerSection, Sections, Title } from "../../../styled-components/components"
import CardPromocion from "./CardPromocion"

const Promociones = () => {
  return (
    <Main>
      <Container>
        <Title>¿Que hay de nuevo?</Title>
        <Wrapper>
          <CardPromocion />
          <CardPromocion />
          <CardPromocion />
        </Wrapper>
      </Container>
    </Main>
  )
}

export default Promociones

const Main = styled(Sections)`
`

const Container = styled(ContainerSection)`
  display: grid;
  gap: 2rem;
`

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 1rem;
  grid-auto-flow: auto;
`