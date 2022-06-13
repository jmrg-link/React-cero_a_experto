import React, { useEffect } from "react";
import { useForm } from '../../hooks/useForm'
import "../01-useState/counter.css";

export const FormWithCustomHook = () => {
  const { formState , handleInputChange, name , email , password } = useForm({
        name: "",
        email: "",
        password: ''
  })

  // const { name , password , email } = formState

  useEffect(() => {
    return () => {
    }
  }, [])

  useEffect(() => {
    return () => {
    }
  }, [formState])

  useEffect(() => {
    return () => {
    }
  }, [email])
  

  return (
    <>
      <h1>Formulario con custom hook</h1>
      <hr />
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Introducir Nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          className="form-control mt-2"
          placeholder="Correo Electronico"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          className="form-control mt-2"
          placeholder="password"
          value={password}
          onChange={handleInputChange}
        />
    </>
  );
};
