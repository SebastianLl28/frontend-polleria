import styled from "styled-components"
import { LinkText, Title } from "../../../styled-components/components/Text"
import { ButtonSubmit, InputText } from "../../../styled-components/components/FormsElements"
import { useId } from "react"
import { useForm } from "react-hook-form"

const Login = () => {

  const idCorreoForm = useId()
  const idPasswordeForm = useId()
  const  {register, handleSubmit, reset} = useForm()

  const onSubmit = () => {
    console.log('iniciando sesión')
  }

  return (
    <Main onSubmit={handleSubmit(onSubmit)}>
      <Title align="center">Login</Title>
      <div>
        <Label htmlFor={idCorreoForm}>Correo</Label>
        <InputText type="text" id={idCorreoForm} {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}/>
      </div>
      <div>
        <Label htmlFor={idPasswordeForm}>Password</Label>
        <InputText type="password" id={idPasswordeForm} {...register('password', { required: true })}/>
      </div>
      <ButtonSubmit type="submit" value="Ingresar"/>
      <LinkText to="/register">no tienes cuenta? Registrate</LinkText>
    </Main>
  )
}

export default Login

const Main = styled.form`
  color: #fff;
  display: grid;
  gap: 2em;
  background-color: ${({theme}) => theme.color.bg200};
  width: min-content;
  margin: auto;
  margin-top: 5rem;
  padding: 2rem;
  width: 80%;
  max-width: 30rem;
  border-radius: .3rem;
  position: relative;
  animation: init 0.4s ease-out;

  @keyframes init {
    0% {
      transform: translateY(-110%);
    }
    100% {
      transform: translateY(0);
    }
  }

  & input[type="submit"]{
    padding: .5em 1.5em;
    cursor: pointer;
  }
`

const Label = styled.label`
  font-family: ${({theme}) => theme.fonts.font1};
`