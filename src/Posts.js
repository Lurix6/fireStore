import AddPost from './AddPost'
import React from 'react'
import Post from './Post'

const  Posts = ({onCreate, posts, delatePost, user}) =>  {
      return (
        <div style={{display: 'flex', alignItems: 'center' ,flexDirection: 'column'}}>
          <AddPost user={user} />
          {posts.map(el => <Post key={el.id} el={el}> </Post>)}
        </div>
      )

}

export default Posts
