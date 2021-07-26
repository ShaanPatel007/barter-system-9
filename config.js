import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyASJpunVFmAJIfxkDMfHBoFdHLflr_8haE",
  authDomain: "bartersystem-f6134.firebaseapp.com",
  projectId: "bartersystem-f6134",
  storageBucket: "bartersystem-f6134.appspot.com",
  messagingSenderId: "864466714699",
  appId: "1:864466714699:web:aebe6890bc2c31d1c80dce"
};

  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();