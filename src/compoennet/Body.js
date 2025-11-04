import React, { useEffect } from 'react'
import { Route, createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
import { RouterProvider } from 'react-router'
import SignIn from './SignIn'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

function Body() {
  const dispatch= useDispatch()
    const approuter = createBrowserRouter([
        {
            path: "/",
            element:<SignIn/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
    useEffect(()=>{
   onAuthStateChanged(auth,(user)=>{
    if(user){
  // sign in 
  const {uid, email,displayName,photoURL }= user
 dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL  }))
    }else{
       //logout 
       dispatch(removeUser())

    }
   })
    },[])
  return (
    <div>
      <RouterProvider router={approuter}/>
      
    </div>
  )
}

export default Body
