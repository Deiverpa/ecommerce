import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        console.log(userCredential).catch((error) => {
          console.log(error);
        });
      }
    );
  };
  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Please Sign Up if you are of legal age in your location</h1>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
