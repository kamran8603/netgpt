import React, { useState, useRef } from "react";
import Header from "./Header";

import { checkvaliddata } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth} from "../utils/firebase"

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG } from "../utils/constants";

function SignIn() {
 
  const [signup, setSignup]= useState(true)
  const [error, setError]= useState(null)
  const dispatch= useDispatch() 
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  
 //validate the user that is login or sign up


  const handleButtonClick =()=>{
    checkvaliddata()
    const message = checkvaliddata(email.current.value, password.current.value)
    setError(message)
   if(message) return;
   if(!signup){ 
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message ;
    setError(error.code)
  });  
   }else{ 
    
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value )
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      
      updateProfile(user,{
    displayName:name.current.value,
    photoURL:"https://avatars.githubusercontent.com/u/96436710?v=4"
  })
  .then(()=>{
    const {uid, email, displayName,photoURL} = auth.currentUser
    dispatch(
      addUser({
        uid:uid,
        email:email,  
        displayName:displayName, 
        photoURL:photoURL
      })
      
    )

  })
  .catch((error)=>{
    setError(error.message) 
  })
      
   
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorCode, errorMessage)
      // ..
    });

  }  

  }
  function signuptoggle(){
    setSignup(!signup) 
    console.log("true")
  }
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute inset-0 -z-10">
        <img
          src={BACKGROUND_IMG}
          alt="background"
          className="w-full h-full object-cover"
        />
      
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Centered, responsive form container */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <form
        onSubmit={(e)=>e.preventDefault()}
          className="relative z-10 w-[90vh]  max-w-md rounded-md p-8 sm:p-10 text-white bg-black/60 backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
        > 
          <h1 className="mb-6 text-2xl sm:text-3xl font-semibold">{signup ? "SignUp" : "Sign In"}
</h1>
            
                {signup && (
            <label className="block">
              <input
               ref={name}
                aria-label="Full Name"
                type="text"
                placeholder="Full Name"
                className="w-full h-12 sm:h-14 px-4 mb-4 rounded bg-white/5 placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-600"
              />
            </label>
          )}

          <label className="block">
            <input
            ref={email}
              aria-label="Email address"
  
              placeholder="Email address"
              className="w-full h-12 sm:h-14 px-4 mb-4 rounded bg-white/5 placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-600"
            />
          </label>

          <label className="block">
            <input
              ref={password}
              aria-label="Password"
              type="password"
              placeholder="Password"
              className="w-full h-12 sm:h-14 px-4 mb-4 rounded bg-white/5 placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-600"
            />
          </label>

          <button
          onClick={handleButtonClick}
            type="submit"
            className="w-full h-12 sm:h-14 mt-2 bg-red-600 hover:bg-red-700 transition rounded font-semibold"
          >
            {/* if the user is sign */}
           {signup ? "SignUp" : "Sign In"}
          </button>
          <p className="text-red-500 font-bold py-2 my-2">{error}</p>

          <p className="mt-6 text-sm text-gray-300" onClick={signuptoggle} >
            New to Netflix? <span className="text-white underline cursor-pointer" >Sign up now</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

