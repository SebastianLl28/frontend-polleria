import styled from "styled-components"
import { ContainerSection, Sections } from "../../../styled-components/components/Sections"
import { Title } from "../../../styled-components/components/Text"
import CardTestimony from "./CardTestimony"

const Testimonios = () => {

  const listTestimony = [
    {
      id: 1,
      text: 'Es difícil que un pollo asado no sea bueno, pero lo que comimos acá estuvo delicioso y muy grande la porción. La amabilidad del mesero es destacable.',
      name: 'JoseNLB',
      date: 'agosto de 2017',
      img: '/person1.jpg'
    },
    {
      id: 2,
      text: 'Comida rápida, bastante buena, comimos pollo con arroz y chorizo, y tallarines saltados con pollo. Los precios son algo elevados, hay menús bastante mas baratos por la zona.',
      name: 'Jorge Atierra',
      date: 'abril de 2017',
      img: '/person2.jpg'
    },
    {
      id: 3,
      text: 'El lugar preferido para saborear uno de los platos emblemáticos del Perú. el pollo a la brasa o pollito con papas como dicen muchos ahhhh y su infaltable bebida de sabor nacional.',
      name: 'Jenni Velarde',
      date: 'febrero de 2017',
      img: '/person3.jpg'
    }
  ]

  return (
    <Main>
      <Container>
        <Title>Testimonios</Title>
        <Wrapper>
          {
            listTestimony.map( testimony => (
              <CardTestimony key={testimony.id} testimony={testimony} />
            ))
          }
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
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.2);
  background-color: ${({theme}) => theme.color.bg200};
  gap: .8em;
  padding: 1em;
`
const Image = styled.img`
  width: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
`
