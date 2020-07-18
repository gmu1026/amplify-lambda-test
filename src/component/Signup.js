import React from "react";
import Auth from "@aws-amplify/auth";
import { useForm } from "react-hook-form";

function Signup() {
  const { register, handleSubmit } = useForm();

  const send = async (data) => {
    try {
      const newUser = await Auth.signUp({
        username: data.email,
        password: data.password,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(send)}>
      <input type="email" name="email" ref={register}></input>
      <input type="password" name="password" ref={register}></input>
      <input type="submit"></input>
    </form>
  );
}

export default Signup;
