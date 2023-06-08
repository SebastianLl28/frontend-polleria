import styled from "styled-components";

export const ButtonPrimary = styled.button`
  width: 100%;
  padding: .6em 0;
  color: ${({theme}) => theme.color.text100};
  background-color: ${({theme}) => theme.color.primary100};
  border-radius: 0.4rem;
  cursor: pointer;
`