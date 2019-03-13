import React from 'react'
import Moment from 'react-moment'
import { auth } from './firebase'


const CurrentUser = ({ user }) => {
  return (
    <div>
        <div className='CurrentUser' style={{textAlign:'start', border: '1px solid #C1DFD5', marginTop: '15px' ,padding: '20px' ,display: 'flex', flexDirection: 'column', width: '668px'}}>
            <h3 style={{margin: '0 0 15px 0',  alignSelf: 'flex-start'}}>User</h3>
          <div style={{display: 'flex'}}>
            <img src={user.photoURL} style={{with: '200px', height: '200px'}} />
            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '25px'}}>
              <h3 style={{margin: '15px 0 15px 0',  alignSelf: 'flex-start', padding: '10px', borderLeft: '5px solid',  borderColor: '#c6efbc' }}>{user.displayName}</h3>
              <p><span style={{color:'red'}}>Email: </span>{user.email}</p>
              <p><span style={{color:'red'}}>Joined: </span>{user.metadata.lastSignInTime}</p>
            </div>
          </div>
          <button style={{height: '28px' , border: '0' ,backgroundColor: '#FFA7A3', marginTop: '15px'}} onClick={() => auth.signOut()} >Sign out</button>
        </div>
    </div>
  )
}

export default CurrentUser
