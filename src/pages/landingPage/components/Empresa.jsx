import styled from "styled-components"
import { ContainerSection, Sections, Title } from "../../../styled-components/components"

const Empresa = () => {
  return (
    <Main>
      <Container>
        <picture>
          <img src="./local.jpg" alt="" />
        </picture>
        <Wrapp>
          <Title color="#000">Lorem, ipsum dolor.</Title>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex illum omnis beatae, saepe tempora voluptate consequuntur corporis quasi iusto impedit, molestiae ea, fugit laboriosam reiciendis eos aut sequi a! laboriosam reiciendis eos aut sequi a</p>
        </Wrapp>
      </Container>
    </Main>
  )
}

export default Empresa

const Main = styled(Sections)`

`

const Container = styled(ContainerSection)`
  height: 40rem;
  width: 100%;
  display: grid;
  /* grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 5rem); */
  /* grid-auto-rows: auto; */

  /* grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr); */
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;


  & picture {
    /* grid-area: 1 / 1 / 5 / 5;  */
    grid-area: 1 / 1 / 6 / 6;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

const Wrapp = styled.div`
  background-color: white;
  padding: 2.5rem;
  /* grid-area: 3 / 3 / 6 / 6; */
  grid-area: 4 / 4 / 7 / 7;

  align-self: center;
  display: grid;
  gap: 2rem;
  font-size: 1.3em;
`