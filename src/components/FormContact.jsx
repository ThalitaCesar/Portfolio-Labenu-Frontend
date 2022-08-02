import React from "react";
import { useState } from "react";
import { Form, Input, Label, Submit, TextArea } from "./styles";

export function FormContact() {

    const [form,setForm] = useState([])
    const data = form

    const handleInputChange=(e)=>{
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }
    const handleSubmit=(e)=> {
    e.preventDefault();
    alert('Sua mensagem foi enviada com sucesso.');
  }

  console.log(data)
    
    return (
        <Form>
            <Label>Name:</Label>
        <Input type="text" name="name" onChange={handleInputChange}/>
            <Label>Email:</Label>
        <Input  type="text" name="email" onChange={handleInputChange}/>
            <Label>Mensagem:</Label>
        <TextArea type="text" name="msg" onChange={handleInputChange}/>
        <Submit type="submit" value="enviar_mensagem" onSubmit={handleSubmit}/>
        </Form>
    )
}