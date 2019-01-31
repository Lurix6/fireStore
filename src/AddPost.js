import React from 'react'


class AddPost extends React.Component {

  state = {
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

  addNewPost = () => {
      if(this.state.title && this.state.conntent){
          this.props.onCreate(this.state)

      }
  }


  render(){

      return (
        <div style={{textAlign:'start' ,display: 'flex', flexDirection: 'column'}} >
            <p style={{margin: '15px 0 0 0', }}>AddPost</p>
            <input placeholder='Type' onChange={(ev) => {this.setState({title : ev.target.value })}} style={{margin: '15px 0 15px 0', width: '600px'}} type="text"/>
            <input placeholder='Body' onChange={(ev) => {this.setState({conntent : ev.target.value })}} style={{marginBottom: '15px', width: '600px'}} type="text"/>
            <button onClick={this.addNewPost}>ADD</button>
        </div>
      )
    }
}

export default AddPost
