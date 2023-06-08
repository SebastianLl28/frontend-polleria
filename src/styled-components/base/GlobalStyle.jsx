import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    vertical-align: baseline;
  }

  img, picture, video, iframe, figure {
    max-width: 100%;
    width: 100%;
    display: block;
    -o-object-fit: cover;
      object-fit: cover;
    -o-object-position: center center;
      object-position: center center;
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
    font-size: inherit;
  }

  p a {
    display: inline;
  }

  li {
    list-style-type: none;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6, p, span, a, strong, blockquote, i, b, u, em {
    font-size: 1em;
    font-weight: inherit;
    font-style: inherit;
    text-decoration: none;
    color: inherit;
  }

  blockquote:before, blockquote:after, q:before, q:after {
    content: "";
    content: none;
  }

  form, input, textarea, select, button, label {
    font-family: inherit;
    font-size: inherit;
    -webkit-hyphens: auto;
        -ms-hyphens: auto;
            hyphens: auto;
    background-color: transparent;
    color: inherit;
    display: block;
    -webkit-appearance: none;
      -moz-appearance: none;
            appearance: none;
  }

  table, tr, td {
    border-collapse: collapse;
    border-spacing: 0;
  }

  svg {
    width: 100%;
    display: block;
    fill: currentColor;
  }

  body {
    min-height: 100vh;
    font-size: 100%;
    font-family: Helvetica, Arial, sans-serif;
    line-height: 1.4em;
    background-color: #1E1E1E;
  }

  body::-webkit-scrollbar {
    width: 0px;
    background-color: #dadada46;
  } 

  body::-webkit-scrollbar-thumb {
    background-color: #585858;
  }
`

export default GlobalStyle