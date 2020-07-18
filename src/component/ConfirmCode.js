import React from "react";
import Auth from "@aws-amplify/auth";
import { useForm } from "react-hook-form";

function ConfirmCode() {
  const { register, handleSubmit } = useForm();

  const confirmSubmit = async (event) => {
    try {
      await Auth.confirmSignUp(event.email, event.confirmCode);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(confirmSubmit)}>
      <input type="email" name="email" ref={register}></input>
      <input type="text" name="confirmCode" ref={register}></input>
      <input type="submit"></input>
    </form>
  );
}

export default ConfirmCode;
