import { Outlet } from "react-router-dom"
import AsideApp from "../components/AsideApp"
import styled from "styled-components"

const PrivatePage = () => {

  // Logica | si es usuario o si es administrador
  // Verificar si tiene token y está el usuario | si el token todavía no expira
  // si no tiene aplicar un redirect a otra ventana al Login
  return (
    <>
      <AsideApp />
      <Container>
        <Outlet></Outlet>
      </Container>
    </>
  )
}

export default PrivatePage


const Container = styled.div`
  padding-left: 5rem;
  height: 100vh;
`