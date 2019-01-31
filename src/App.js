import React, { Component } from 'react';
import './App.css';
import Posts from './Posts'
import { firestore } from './firebase'
import { collectIdsAndDocs } from './utilities'

class App extends Component {

  state = {
    posts: []
  }
  unsubsribe = null

    componentDidMount = async () => {
      this.unsubsribe = firestore.collection('posts').onSnapshot(snapshot => {
          const posts = snapshot.docs.map(collectIdsAndDocs)
          this.setState({posts: posts})
      })

    }

    componentWillUnmount = () => {
      this.unsubsribe()
    }


      handleCreate = async post => {
       firestore.collection('posts').add(post)
      }


        handleDelatePost = async id => {
          await firestore.doc(`posts/${id}`).delete()
        }

  render() {
    console.log('render');


    return (
      <div className="App">
          <Posts posts={this.state.posts} onCreate={this.handleCreate} delatePost={this.handleDelatePost}/>
      </div>
    );
  }
}

export default App;
