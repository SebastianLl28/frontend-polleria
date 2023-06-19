import styled from "styled-components"

const CardTestimony = ({testimony}) => {
  return (
    <Card>
      <p>{testimony.text}</p>
      <div>
        <Image src={testimony.img} alt="" />
        <p>{testimony.name}</p>
        <p>{testimony.date}</p> 
      </div>
    </Card>
  )
}

export default CardTestimony

const Card = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.2);
  background-color: ${({theme}) => theme.color.bg200};
  gap: .8em;
  padding: 1em;
  font-family: ${({theme}) => theme.fonts.font1};
  font-weight: 400;

  & > div{
    display: grid;
    grid-template-columns: 2.5rem 1fr;
    grid-template-rows: 1fr .8fr;
    grid-template-areas: 'img name' 'img date';
    column-gap: 0.4rem;
    align-items: center;

    & p{
      font-size: 0.8em;
      font-style: italic;
      line-height: 0;
    }

    & p:nth-child(2){
      transform: translateY(4px);
      font-weight: 600;
    }

    & p:nth-child(3){
      font-size: .6em;
      transform: translateY(-2px);
    }
  }
`

const Image = styled.img`
  width: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  grid-area: img;
`