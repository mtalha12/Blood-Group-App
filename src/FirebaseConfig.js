import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyAMoGUj88aoxVnx0AfW8bm7tRfaksDseBQ",
    authDomain: "bloodbank3512.firebaseapp.com",
    databaseURL: "https://bloodbank3512.firebaseio.com",
    projectId: "bloodbank3512",
    storageBucket: "bloodbank3512.appspot.com",
    messagingSenderId: "972156399788"
  };
  const fire = firebase.initializeApp(config);


  export default fire;