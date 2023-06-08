import styled from "styled-components"
import { Icon } from "../styled-components/components"
import { useState } from "react";

const  AsideApp = () => {

  const [active, setactive] = useState(false);

  // [inicio ]

  const toggleStateAside = () => {
    setactive(!active);
  }

  return (
    <Main active={active}>
    <Icon src="./icons/icon-home.svg" size="3rem"/>
    <Icon src="./icons/icon-pedidos.svg" size="3rem"/>
    <Icon src="./icons/icon-product.svg" size="3rem"/>
    <Icon src="./icons/icon-locals.svg" size="3rem"/>
    <Icon src="./icons/icon-users.svg" size="3rem"/>
    <Icon src="./icons/icon-logout.svg" size="3rem"/>
    <Icon src="./icons/icon-user.svg" size="3rem"/>

      <Toggle onClick={toggleStateAside}>
        <Icon src="./icons/icon-arrow-dark.svg" rotate={active ? '-90deg' : '90deg'} size="1.5rem"/>
      </Toggle>
    </Main>
  )
}

export default AsideApp

const Main = styled.aside`
  background-color: ${({theme}) => theme.color.primary100};
  height: 100vh;
  border-radius: 0 5px 5px 0;
  transition: width .5s ease;
  width: ${(prop) => prop.active ? '16rem' : '4.2rem'};
  position: absolute;
  animation: aparecer 1s ease;
  @keyframes aparecer {
    0% {
      transform: translateX(-100%);
    }
    100%{
      transform: translateX(0);
    }
  }
`

const Toggle = styled.div`
  background-color: ${({theme}) => theme.color.primary200};
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  right: -1rem;
  top: 1rem;
  cursor: pointer;
`