import { darken } from "polished";
import styled from "styled-components";

export const InputText = styled.input`
  width: 100%;
  padding: .2em 0;
  font-size: 1.2em;
  background-color: red;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.text100};
  border-bottom: 1px solid ${({ theme }) => theme.color.text200};
`

export const ButtonSubmit = styled.input`
  width: 100%;
  padding: .6em 0;
  color: ${({theme}) => theme.color.text100};
  font-size: ${(prop) => prop.size ?? '1.2em'};
  background-color: ${({theme}) => theme.color.primary100};
  border-radius: 0.4rem;
  cursor: pointer;
  transition: background-color .4s ease;

  &:hover {
    background-color: ${({theme}) => darken(0.06, theme.color.primary100)};
  }
`