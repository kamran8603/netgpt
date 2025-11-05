// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { auth } from '../utils/firebase';
// import { signOut } from 'firebase/auth';
// import { useSelector } from 'react-redux';


// function Header() {
//   const [logout, setLogout]= useState(false)
//   const user = useSelector(store=>(store.auth))
//   console.log(auth.photoURL)
//   const navigate = useNavigate()

//  function handleSignOut(){
//   signOut(auth).then(() => {
//    navigate("/")
  

//   }).catch((error) => {
//     // An error happened.
     
//     navigate("/error")
    
//   });
//  }
//   return (
//     <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
//       <img
//       className='w-44'
//       src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
//       alt='logo'
//       />
//       {/* { user && ( */}

//         <div className='flex p-2'>
//         <img alt='usericon' 
//         src={auth?.photoURL}
//         className='w-[3rem] h-[3rem] rounded '
//         />
//         <button onClick={handleSignOut} className='font-bold text-white'>(SignOut)</button>
//       </div>
//       {/* ) */}

//       {/* } */}
      
//     </div>
//   )
// }


// export default Header






import React from 'react'
import  { useNavigate} from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR } from '../utils/constants';

function Header() {
  const dispatch = useDispatch()
  const user = useSelector((store)=> store.user);
  const navigate = useNavigate();

  function handleSignOut(){
    signOut(auth)
      .then(() => { })
      .catch(() => navigate("/error"))
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // sign in 
        const { uid, email, displayName, photoURL } = user
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: USER_AVATAR
        }))
       navigate("/browse")
      } else {
        //logout 
        dispatch(removeUser())
       navigate("/")
      }
    })
    //this is called component will be unmount
    return ()=> unsubscribe()
  }, [])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-44'
        src={LOGO}
        alt='logo'
      />

      { user && (
        <div className='flex p-2'>
          <img 
            src={user.photoURL} 
            className='w-[3rem] h-[3rem] rounded' 
            alt='usericon'
          />
          <button onClick={handleSignOut} className='font-bold text-white'>
            (SignOut)
          </button>
        </div>
      )}
    </div>
  )
}

export default Header;
