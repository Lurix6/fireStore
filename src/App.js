import React, { Component } from 'react';
import './App.css';
import Posts from './Posts'
import { firestore, auth, createUserProfileDocument } from './firebase'
import { collectIdsAndDocs } from './utilities'
import Authentication from './Authentication'

class App extends Component {

  state = {
    posts: [],
    user: null
  }
  unsubsribeFromFireStote = null
  unsubsribeFromAuth = null

    componentDidMount = async () => {
      this.unsubsribeFromFireStote = firestore.collection('posts').onSnapshot(snapshot => {
          const posts = snapshot.docs.map(collectIdsAndDocs)
          console.log(posts)
          this.setState({posts: posts})
      })

      this.unsubsribeFromAuth = auth.onAuthStateChanged( userAuth => {
//        const user = await createUserProfileDocument(userAuth)
        this.setState({user: userAuth})
      })

    }

    componentWillUnmount = () => {
      this.unsubsribeFromFireStote()
    }



  render() {
    return (
      <div className="App" style={{display: 'flex', alignItems: 'center' ,flexDirection: 'column'}}>
          <Authentication user={this.state.user} />
          <Posts posts={this.state.posts} user={this.state.user}/>
      </div>
    );
  }
}

export default App;

//      <Posts posts={this.state.posts}/>
