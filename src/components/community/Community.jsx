import React from 'react'
import Rightside from './Rightside'
import Leftside from './Leftside'
import Signin from './Signin'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import { useState , useEffect } from 'react'

const Community = () => {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const user = useAuthState(auth)
  
  if(loggedIn){
    return(

    <div className="w-full py-[40px]">
      
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="px-6">
            <Leftside setIsLoggedIn={setIsLoggedIn}  />
          </div>
          <div className="col-span-3 border-x-2 border-t-slate-800 px-6">
            <Rightside />
          </div>
        </div>
        
    </div>
    
    )
    
  }else{
  return (
    <div className="w-full py-[40px]">
      <Signin setIsLoggedIn={setIsLoggedIn} />
    </div>
  )}
}

export default Community