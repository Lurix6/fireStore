import React from 'react'
import SignInAndSignUp from './SignInAndSignUp'
import CurrentUser from './CurrentUser'

const Authentication = ({ user, loading}) => {


  if (loading) return null

   return (
     <div>
       {user ? <CurrentUser user={user} /> : <SignInAndSignUp />}
     </div>
   )

}

export default Authentication
