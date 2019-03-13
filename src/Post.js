import React from 'react'
import Moment from 'react-moment';
import { firestore } from './firebase'

const Post = ({el}) => {
  const postRef = firestore.doc(`posts/${el.id}`)
  const remove = () => postRef.delete()
  const star  = () => postRef.update({star: el.star+1})

  return (
    <div style={{dispalay: 'flex', flexDirection: 'column' ,textAlign:'start', width: '700px', marginTop:'12px' ,border:  '1px solid #1a843f' ,borderRadius: '2px' }}>
      <div style={{margin: '12px'}}>{el.title}</div>
      <div style={{margin: '12px'}}>{el.conntent}</div>
      <div style={{backgroundColor: '#197038', display: 'flex', justifyContent:'space-between ' ,height: '20px', padding: '15px'}}>
        <div style={{display: 'flex', fontSize: '15px'}}>
            <img style={{width: '15px', height: '15px'}} src="https://vignette.wikia.nocookie.net/shadowfight/images/9/9a/Exclusive_star.png/revision/latest?cb=20141228081928" alt=""/>
            <p style={{margin: '0 25px 0 5px' }}>{el.star}</p>
            <img style={{width: '15px', height: '16px'}} src="https://www.pngrepo.com/download/191420/lemur.png" alt=""/>
            <p style={{margin: '0 25px 0 5px' }}>{el.comments}</p>
            <p style={{margin: '0 25px 0 5px' }}>Posted by {el.users.displayName}</p>
            <p style={{margin: '0 25px 0 5px' }}>Added in {el.createdAt}</p>

        </div>
        <div>
          <button style={{backgroundColor: '#3ba6ed', border: '0', borderRadius: '5px', marginRight: '15px'}} onClick={star} >Star</button>
          <button style={{backgroundColor: '#c4091f', border: '0', borderRadius: '5px'}} onClick={remove}>Delate</button>
        </div>
        </div>
    </div>
  )
}

export default Post
