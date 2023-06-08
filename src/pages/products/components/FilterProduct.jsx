import { useId } from "react"
import styled from "styled-components"
import Acordeon from "./Acordeon"

const FilterProduct = () => {

  const idSearch = useId()

  return (
    <Main>
      <div>
        <label htmlFor={idSearch}>Buscar Nombre: </label>
        <Input type="text" id={idSearch}/>
      </div>
      <Acordeon />
    </Main>
  )
}

export default FilterProduct

const Main = styled.div`
  background-color: ${({theme}) => theme.color.bg200};
  padding: 1rem;
  /* position: fixed; */
  align-self: start;
  grid-area: filter;
  width: 100%;
  display: grid;
  gap: 2rem;
`
const Input = styled.input`
  width: 100%;
  /* background-color: ${({theme}) => theme.color.text100}; */
  border-bottom: 1px solid ${({theme}) => theme.color.text100};
  /* color: ${({theme}) => theme.color.bg100}; */
  outline: none;
  font-size: 1.2em;
  padding: .3em .1em;
`