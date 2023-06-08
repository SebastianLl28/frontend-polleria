import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.h2`
  font-size: ${(prop) => prop.size ?? '3em'};
  font-family: ${({theme}) => theme.fonts.font2};
  font-weight: 400;
  color: ${({color ,theme}) => color ?? theme.color.text100};
  text-align: ${(prop) => prop.align ?? 'start'};
`

export const LinkText = styled(Link)`
  font-family: ${({theme}) => theme.fonts.font1};
  font-weight: 600;
  color: ${({theme}) => theme.color.text200};
  transition: color .4s ease;
  
  &:hover {
    color: ${({theme}) => theme.color.text100};
    filter: drop-shadow( 0px 0px 5px #cfcfcf );
  }
`

export const Paragraph = styled.p`
  font-family: ${({theme}) => theme.fonts.font1};
  font-weight: 400;
`