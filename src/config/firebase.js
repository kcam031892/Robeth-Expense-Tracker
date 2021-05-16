import firebase from 'firebase/app';
import 'firebase/firestore'
var firebaseConfig = {
  apiKey: 'AIzaSyDiah5sjegzcwUKSGp2r7opnOmylZScSkI',
  authDomain: 'robeth-expense-tracker.firebaseapp.com',
  projectId: 'robeth-expense-tracker',
  storageBucket: 'robeth-expense-tracker.appspot.com',
  messagingSenderId: '55814322096',
  appId: '1:55814322096:web:3adf6650928d01655f4875',
  measurementId: 'G-LXLMMTXCRJ'
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();