import React, { useEffect } from 'react'
import { Route, createBrowserRouter,useNavigate } from 'react-router-dom'
import Browse from './Browse'
import { RouterProvider } from 'react-router'
import SignIn from './SignIn'


function Body() {

 
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ])
  
  return (
    <div>
      <RouterProvider router={approuter} />

    </div>
  )
}

export default Body
