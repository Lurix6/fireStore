import AddPost from './AddPost'
import React from 'react'
import Post from './Post'

const  Posts = ({onCreate, posts, delatePost}) =>  {
  console.log('Posts');

      return (
        <div style={{display: 'flex', alignItems: 'center' ,flexDirection: 'column'}}>
          <AddPost onCreate={onCreate}/>
          {posts.map(el => <Post delatePost={delatePost} key={el.id} el={el}> </Post>)}
        </div>
      )

}

export default Posts
