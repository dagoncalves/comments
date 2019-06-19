import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyARPHfYj2vHfK15H99GIROn9JS8BcfPuvU',
  authDomain: 'comments-deivys.firebaseapp.com',
  databaseURL: 'https://comments-deivys.firebaseio.com',
  projectId: 'comments-deivys',
  storageBucket: 'comments-deivys.appspot.com',
  messagingSenderId: '188152380029',
  appId: '1:188152380029:web:e3bf1563748ddbb7'
};
// Initialize Firebase
firebase.initializeApp( firebaseConfig );

export const database = firebase.database();
