import styled from "styled-components";
import { Icon } from "../styled-components/components";
import { useState } from "react";

const AsideApp = () => {
  const [active, setactive] = useState(false);

  // [inicio ]

  const toggleStateAside = () => {
    setactive(!active);
  };

  return (
    <Main active={active}>
      <Headers>
        <Card>
          <Icon src="./icons/icon-home.svg" size="2.5rem" />
          <p>Home</p>
        </Card>
        <Card>
          <Icon src="./icons/icon-pedidos.svg" size="2.5rem" />
          <p>Notificaciones</p>
        </Card>
        <Card>
          <Icon src="./icons/icon-product.svg" size="2.5rem" />
          <p>Product</p>
        </Card>
      </Headers>
      <Probando>
        <Card>
          <Icon src="./icons/icon-product.svg" size="2.5rem" />
          <p>Product</p>
        </Card>
      </Probando>
      {/* <Icon src="./icons/icon-product.svg" size="3rem"/> */}
      {/* <Icon src="./icons/icon-locals.svg" size="3rem"/> */}
      {/* <Icon src="./icons/icon-users.svg" size="3rem"/> */}
      {/* <Icon src="./icons/icon-logout.svg" size="3rem"/> */}
      {/* <Icon src="./icons/icon-user.svg" size="3rem"/> */}

      <Toggle onClick={toggleStateAside}>
        <Icon
          src="./icons/icon-arrow-dark.svg"
          rotate={active ? "-90deg" : "90deg"}
          size="1.5rem"
        />
      </Toggle>
    </Main>
  );
};

export default AsideApp;

const Main = styled.aside`
  background-color: ${({ theme }) => theme.color.primary100};
  height: 100vh;
  border-radius: 0 5px 5px 0;
  transition: width 0.5s ease;
  width: ${(prop) => (prop.active ? "15rem" : "5rem")};
  position: absolute;
  animation: aparecer 1s ease;
  display: grid;
  /* grid-auto-rows: 4rem; */
  padding-top: 8rem;
  grid-template-columns: 1fr;
  /* align-items: ${(prop) => (prop.active ? "start" : "center")}; */
  gap: 0.3rem;
  /* overflow: hidden; */

  @keyframes aparecer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  p {
    transition: opacity 0.5s ease;
    opacity: ${(prop) => (prop.active ? "1" : "0")};
    font-size: 1.2em;
    font-weight: 600;
    font-family: ${({ theme }) => theme.fonts.font1};
  }
`;

const Card = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Toggle = styled.div`
  background-color: ${({ theme }) => theme.color.primary200};
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
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.2);
`;

const Probando = styled.div`
  position: absolute;
  width: 100%;
  bottom: 1rem;
  overflow: hidden;
`;

const Headers = styled.div`
  display: grid;
  grid-auto-rows: 4rem;
  gap: 0.3em;
`;
