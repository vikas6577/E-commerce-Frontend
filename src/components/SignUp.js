import React, { useState,useEffect } from "react";
import {useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [password, SetPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
  },[])
  // the above use effect checks if the data is ther ein local storage then from signup page go to home page and if someone forcefully try to go to signup page he can't go (by writing the url in the search bar)
  const collectData = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user",JSON.stringify(result));  //store the data in local storage in browser 
    if (result) {
      navigate("/");
    }

  };
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        className="inputBox"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <input
        className="inputBox"
        type="password"
        value={password}
        onChange={(e) => SetPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={collectData} type="button" className="appButton">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;

