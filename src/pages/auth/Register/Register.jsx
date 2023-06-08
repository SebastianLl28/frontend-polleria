import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { createUser } from "../../../hooks/usePruebaUsers"
import { ButtonSubmit, InputText } from "../../../styled-components/components/FormsElements"
import { LinkText, Title } from "../../../styled-components/components/Text"
import { useId } from "react"

const Register = () => {

  const idNombreForm = useId()
  const idCorreoForm = useId()
  const idPasswordeForm = useId()

  const  {register, handleSubmit, reset} = useForm()

  const addUser = useMutation({
    mutationFn: createUser,
    onSuccess: () => 
      console.log('Usuario creado')
  })

  const onSubmit = (data) => {
    // addUser.mutate({
    //   ...data,
    //   rol: "cliente"
    // })

    console.log(data)
    reset()
  }

  return (
    <Main onSubmit={handleSubmit(onSubmit)}>
      <Title align="center">Registrarse</Title>
      <div>
        <Label htmlFor={idNombreForm}>Nombre</Label>
        <InputText type="text" id={idNombreForm} {...register('nombre', { required: true })}/>
      </div>
      <div>
        <Label htmlFor={idCorreoForm}>Correo</Label>
        <InputText type="text" id={idCorreoForm} {...register('email', { required: true })}/>
      </div>
      <div>
        <Label htmlFor={idPasswordeForm}>Password</Label>
        <InputText type="password" id={idPasswordeForm} {...register('password', { required: true, min: 6})}/>
      </div>
      <ButtonSubmit type="submit" value="Registrar" size="1.3em"/>
      <LinkText to="/login">Ya tienes cuenta? Inicia sesión</LinkText>
    </Main>
  )
}

export default Register

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
      transform: translateY(-120%);
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

