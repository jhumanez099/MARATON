import React from 'react'
import Input from "../../components/InputField"
import List from "../../components/DropListField"



function Login() {
  return (
    <div>
      <Input label="Nombre" type="text" placeholder="Name" />
      <List label="Tipo usuario"  selectOption="Escoge usuario"  />
    </div>
  )
}

export default Login
