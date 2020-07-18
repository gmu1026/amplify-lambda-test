import React from "react";
import Auth from "@aws-amplify/auth";
import { useForm } from "react-hook-form";

function Signin() {
  const { register, handleSubmit } = useForm();

  const signIn = async (data) => {
    try {
      const user = await Auth.signIn(data.username, data.password);

      // console.log(user.signInUserSession.idToken.jwtToken);
      // alert("logged in");
      localStorage.setItem("token", user.signInUserSession.idToken.jwtToken);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(signIn)}>
      <input type="text" name="username" ref={register}></input>
      <input type="password" name="password" ref={register}></input>
      <input type="submit"></input>
    </form>
  );
}

export default Signin;
