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

      console.log('componentDidMount')
    }

    componentWillUnmount = () => {
      this.unsubsribe()
      console.log('componentWillUnmount');
    }


      handleCreate = async post => {
        console.log('handleCreate ', this.state);
        const docRef = await firestore.collection('posts').add(post)
        const doc = await docRef.get()
        const newPost = collectIdsAndDocs(doc)
        this.setState({
          posts: [newPost ,...this.state.posts]
        })
      }


        handleDelatePost = async id => {
          console.log('handleRemove ', this.state);
          const allPosts = this.state.posts
          await firestore.doc(`posts/${id}`).delete()
          const posts = allPosts.filter(el => (el.id !== id))

          this.setState({ posts})
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
