import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDirCI0kQYJ1RKSclZeaGg8fQ-EelAor5s',
  authDomain: 'wordplay-ad1d0.firebaseapp.com',
  databaseURL: 'https://wordplay-ad1d0.firebaseio.com',
  projectId: 'wordplay-ad1d0',
  storageBucket: 'wordplay-ad1d0.appspot.com',
  messagingSenderId: '547312554106',
  appId: '1:547312554106:web:551c9427165196b07aebc3',
  measurementId: 'G-DZPSCCR6DC',
}

const app =
  firebase.apps.length > 0
    ? firebase.apps[0]
    : firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)
