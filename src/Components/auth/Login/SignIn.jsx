import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import AuthDetails from "./AuthDetails";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log(userCredential).catch((error) => {
        console.log(error);
      });
    });
  };
  return (
    <div className="sign-in-container">
      <form onSubmit={SignIn}>
        <h1>Please Log in</h1>
        <input
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name=""
          id=""
        />
        <input
          type="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name=""
          id=""
        />
        <button type="submit">Log In</button>
      </form>
      <AuthDetails />
    </div>
  );
};

export default SignIn;
