import React from 'react'
import Moment from 'react-moment';

const Post = ({delatePost, el}) => {
  console.log('Post');


  return (
    <div style={{dispalay: 'flex', flexDirection: 'column' ,textAlign:'start', width: '600px', marginTop:'12px' ,border:  '1px solid #1a843f' ,borderRadius: '2px' }}>
      <div style={{margin: '12px'}}>{el.title}</div>
      <div style={{margin: '12px'}}>{el.conntent}</div>
      <div style={{backgroundColor: '#197038', display: 'flex', justifyContent:'space-between ' ,height: '20px', padding: '15px'}}>
        <div style={{display: 'flex', fontSize: '15px'}}>
            <img style={{width: '15px', height: '15px'}} src="https://vignette.wikia.nocookie.net/shadowfight/images/9/9a/Exclusive_star.png/revision/latest?cb=20141228081928" alt=""/>
            <p style={{margin: '0 25px 0 5px' }}>{el.star}</p>
            <img style={{width: '15px', height: '16px'}} src="https://www.pngrepo.com/download/191420/lemur.png" alt=""/>
            <p style={{margin: '0 25px 0 5px' }}>{el.comments}</p>
            <p style={{margin: '0 25px 0 5px' }}>Posted by {el.users.displayName}</p>
            <p style={{margin: '0 25px 0 5px' }}>Tooday is <Moment format='hh:mm' /> am</p>

        </div>
        <div>
          <button style={{backgroundColor: '#3ba6ed', border: '0', borderRadius: '5px', marginRight: '15px'}}>Star</button>
          <button style={{backgroundColor: '#c4091f', border: '0', borderRadius: '5px'}} onClick={() => {delatePost(el.id)}}>Delate</button>
        </div>
        </div>
    </div>
  )
}

export default Post
