import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { createUser } from "../../../hooks/usePruebaUsers"

const Register = () => {

  const  {register, handleSubmit, reset} = useForm()


  const addUser = useMutation({
    mutationFn: createUser,
    onSuccess: () => 
      console.log('Usuario creado')
  })

  const onSubmit = (data) => {
    addUser.mutate({
      ...data,
      rol: "cliente"
    })

    reset()
  }

  return (
    <Main onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">Nombre</label>
        <input type="text" {...register('nombre')}/>
      </div>
      <div>
        <label htmlFor="">Correo</label>
        <input type="text" {...register('email')}/>
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="text" {...register('password')}/>
      </div>
      <input type="submit" value="Registrar"/>
    </Main>
  )
}

export default Register

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