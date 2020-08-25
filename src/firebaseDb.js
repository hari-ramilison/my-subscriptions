import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyD56lymV2-BH0Mw9TT32lB52AW4BhkqYbg',
  authDomain: 'my-subscriptions-963be.firebaseapp.com',
  databaseURL: 'https://my-subscriptions-963be.firebaseio.com',
  projectId: 'my-subscriptions-963be',
  storageBucket: 'my-subscriptions-963be.appspot.com',
  messagingSenderId: '260034052228',
  appId: '1:260034052228:web:077edb8191681c8c11c2d1'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
