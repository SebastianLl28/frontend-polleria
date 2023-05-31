import { Link } from "react-router-dom"
import styled from "styled-components"

const Login = () => {
  return (
    <Main>
      <div>
        <label htmlFor="">Correo</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="text" />
      </div>
      <input type="submit" value="Ingresar"/>

      <Link to="/register">Register</Link>
    </Main>
  )
}

export default Login

const Main = styled.form`
  color: #fff;
  display: grid;
  gap: 2em;

  & input {
    background-color: #fff;
    color: #000;
    justify-self: start;
  }

  & input[type="submit"]{
    padding: .5em 1.5em;
    cursor: pointer;
  }
`