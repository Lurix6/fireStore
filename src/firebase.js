import firebase from '@firebase/app'
import '@firebase/firestore'
import '@firebase/auth'

const config = {
   apiKey: "AIzaSyCMNFjLajP5SvZquf9HKKAeV8-fh1rAQXE",
   authDomain: "my-site-85922.firebaseapp.com",
   databaseURL: "https://my-site-85922.firebaseio.com",
   projectId: "my-site-85922",
   storageBucket: "my-site-85922.appspot.com",
   messagingSenderId: "558568406979"
 };
 firebase.initializeApp(config)


 export const firestore = firebase.firestore()
 export const auth = firebase.auth()
 export const signOut = auth.signOut()

 export const provider = new firebase.auth.GoogleAuthProvider()
 export const signInWithGoogle = () => auth.signInWithPopup(provider)


  window.auth = auth
  window.firebase = firebase

  export const createUserProfileDocument = async (user , additionalData) => {
    if (!user) return;

    //get a reference to the place in the database where a user profile might be.
    const userRef = firestore.doc(`users/${user.uid}`)

    //Go and fetch the document from that location.
    const snapshot = await userRef.get();

    if(!snapshot.exists){
      const { displayName, email, photoURL } = user
        const createAt = new Date();
        try {
           await userRef.set({
              displayName,
              email,
              photoURL,
              createAt,
              ...additionalData,
           })
        } catch (error){
          console.error('Error creating user ' ,error.message);
        }
    }

    return getUserDocument(user.uid)
  }

  export const getUserDocument = async (uid) => {
    if(!uid) return null
    try {
      const userDocument = await firestore.collection('users').doc(uid).get()

      return {uid, ...userDocument.data()}
    }catch(error){
      console.error('Error fetching uses', error.message)
    }
  }

  export default firebase
