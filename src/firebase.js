import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "API_KEY here",
    authDomain: "AuhName.firebaseapp.com",
    databaseURL: "DB url here",
    projectId: "PEoject ID ",
    storageBucket: "Storage bucket here",
    messagingSenderId: "sender id",
    appId: "app ID ",
    measurementId: "measurment id here"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;
