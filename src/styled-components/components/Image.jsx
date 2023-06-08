import styled from "styled-components";

export const Icon = styled.img`
  --size: ${(prop) => prop.size ?? '2rem'};
  height: var(--size);
  width: var(--size);
  cursor: pointer;
  --rotate: ${(prop) => prop.rotate ?? '0'};
  transform: rotate(var(--rotate));
  transition: all .5s ease;
`