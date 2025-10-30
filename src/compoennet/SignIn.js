import React from 'react'
import Header from './Header'

function SignIn() {
  return (
    <div>
     <Header/>
     <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/IN-en-20251020-TRIFECTA-perspective_d6da84e9-6145-4b1e-bb51-e402c966a045_medium.jpg" 
        alt="logo"
        />
     </div>
     <form className=' w-3/12 relative p-12 bg-black'>
      <input type="text" placeholder="Email Address" className='p-2 m-2'  />
      <input type="Password" placeholder="Password" className='p-2 m-2'  />
      <button className='p-4 m-4'>SignIn</button>

     </form>
    </div>
  )
}

export default SignIn
