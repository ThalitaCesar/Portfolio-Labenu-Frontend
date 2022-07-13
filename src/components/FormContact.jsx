import React from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Label, Submit, TextArea } from "./styles";

export function FormContact() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example")); 

    return (
        <Form>
            <Label>Name:</Label>
        <Input {...register("example")} />
            <Label>Email:</Label>
        <Input  {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
            <Label>Mensagem:</Label>
        <TextArea />
        <Submit type="submit" value="enviar_mensagem" onSubmit={handleSubmit(onSubmit)}/>
        </Form>
    )
}