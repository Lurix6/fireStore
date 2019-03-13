import React from 'react'
import { firestore } from './firebase'
import Moment from 'react-moment'

const post = {
        title: null,
        conntent: null,
        users: {
          uid: '123',
          displayName: 'Bill Murray',
          email: 'billmurray@mail.com',
        },
        star: 0,
        comments: 0

  }

const AddPost = ({user}) => {

      const addNewPost = () => {
              if(!user)
              return null
              post.users.uid = user.uid
              post.users.displayName = user.displayName
              post.users.email = user.email
              const date = new Date()
              post.createdAt = date.toLocaleTimeString()
              firestore.collection('posts').add(post)

      }

      return (
        <div style={{textAlign:'start' ,display: 'flex', flexDirection: 'column'}} >
            <p style={{margin: '15px 0 0 0', }}>AddPost</p>
            <input placeholder='Type' onChange={(ev) => {post.title = ev.target.value }} style={{margin: '15px 0 15px 0', width: '700px'}} type="text"/>
            <input placeholder='Body' onChange={(ev) => {post.conntent = ev.target.value }} style={{marginBottom: '15px', width: '700px'}} type="text"/>
            <button onClick={addNewPost}>ADD</button>
        </div>
      )
}

export default AddPost
