import React from 'react'
import { firestore, auth } from './firebase'
import { signInWithGoogle, createUserProfileDocument } from './firebase'

class SignInAndSignUp extends React.Component {

  state = {
    signUp: {
      displayName: '',
      email: '',
      password: ''
    },
    signIn: {
      email: '',
      password: ''
    }
  }
  handleSignUp = async event => {

    const { displayName , email, password} = this.state

    try{
        const { user } = await auth.createUserWithEmailAndPassword(
            this.state.signUp.email,
            this.state.signUp.password
        )
    } catch (error) {
        console.error(error);
    }

    this.setState({signUp: {displayName: '',email: '',password: ''}})

  }

  render(){

      return (
        <div>
            <div className='SignIn' style={{textAlign:'start' ,display: 'flex', flexDirection: 'column'}}>
              <h3 style={{margin: '15px 0 0 0',  alignSelf: 'flex-start', padding: '10px', borderLeft: '5px solid',  borderColor: '#c6efbc' }}>Sign In</h3>
              <input placeholder='Email' value={this.state.signIn.email} onChange={(ev) => {this.setState({signIn:{...this.state.signIn,email: ev.target.value}})}} style={{margin: '15px 0 15px 0', width: '700px', height:'30px', border: '0', borderBottom: '2px solid #C1DFD5'}} type="text"/>
              <input placeholder='Password' value={this.state.signIn.password} onChange={(ev) => {this.setState({signIn:{...this.state.signIn,password: ev.target.value}})}} style={{marginBottom: '15px', width: '700px', height:'30px', border: '0', borderBottom: '2px solid #C1DFD5'}} type="text"/>
              <button onClick={this.addNewPost} style={{marginBottom: '5px', height: '28px' , border: '0' ,backgroundColor: '#FFA7A3'}} onClick={() => auth.signInWithEmailAndPassword(this.state.signIn.email, this.state.signIn.password)}>Sign in</button>
              <button onClick={this.addNewPost} style={{height: '28px' , border: '0' ,backgroundColor: '#FFA7A3'}} onClick={signInWithGoogle}>Sign in With Google</button>
            </div>

            <div className='SignUp' style={{marginTop: '25px' ,textAlign:'start' ,display: 'flex', flexDirection: 'column'}}>
              <h3 style={{margin: '15px 0 0 0',  alignSelf: 'flex-start', padding: '10px', borderLeft: '5px solid',  borderColor: '#c6efbc' }}>Sign Up</h3>
              <input placeholder='Display Name' value={this.state.signUp.displayName} onChange={(ev) => {this.setState({signUp:{...this.state.signUp,displayName: ev.target.value}})}} style={{margin: '15px 0 15px 0', width: '600px', height:'30px', border: '0', borderBottom: '2px solid #C1DFD5'}} type="text"/>
              <input placeholder='Email' value={this.state.signUp.email} onChange={(ev) => {this.setState({signUp:{...this.state.signUp,email: ev.target.value}})}} style={{margin: '0 0 15px 0', width: '600px', height:'30px', border: '0', borderBottom: '2px solid #C1DFD5'}} type="text"/>
              <input placeholder='Password' value={this.state.signUp.password} onChange={(ev) => {this.setState({signUp:{...this.state.signUp,password: ev.target.value}})}} style={{marginBottom: '15px', width: '600px', height:'30px', border: '0', borderBottom: '2px solid #C1DFD5'}} type="password"/>
              <button onClick={this.handleSignUp} style={{marginBottom: '5px', height: '28px' , border: '0' ,backgroundColor: '#FFA7A3'}}>Sign Up</button>
            </div>
        </div>
      )
    }
}

export default SignInAndSignUp
