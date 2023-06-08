import styled from "styled-components"
import { ContainerSection, Sections } from "../../../styled-components/components/Sections"
import { Title } from "../../../styled-components/components/Text"

const Testimonios = () => {
  return (
    <Main>
      <Container>
        <Title>Testimonios</Title>
        <Wrapper>
          <Card>
            <p>Es difícil que un pollo asado no sea bueno, pero lo que comimos acá estuvo delicioso y muy grande la porción. La amabilidad del mesero es destacable.</p>
            <div>
              <Image src="/person1.jpg" alt="" />
              <p></p>
            </div>
          </Card>
          <Card>
            <p>Comida rápida, bastante buena, comimos pollo con arroz y chorizo, y tallarines saltados con pollo. Los precios son algo elevados, hay menús bastante mas baratos por la zona, pero los platos son grandes y la comida esta bastante buena.</p>
            <div>
              <Image src="/person2.jpg" alt="" />
              <p></p>
            </div>
          </Card>
          <Card>
            <p>El lugar preferido para saborear uno de los platos emblemáticos del Perú. el pollo a la brasa o pollito con papas como dicen muchos ahhhh y su infaltable bebida de sabor nacional.</p>
            <div>
              <Image src="/person3.jpg" alt="" />
              <p></p>
            </div>
          </Card>
        </Wrapper>
      </Container>
    </Main>
  )
}

export default Testimonios

const Main = styled(Sections)`
  color: ${({theme}) => theme.color.text100};
`

const Container = styled(ContainerSection)`
  display: grid;
  gap: 2rem;
`

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: 3rem;
`
const Card = styled.div`
  background-color: red;
`
const Image = styled.img`
  width: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
`
