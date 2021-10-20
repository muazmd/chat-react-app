import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCJpNGcjyO0tiFnDJLMWHdPveNcbMgjxqI",
    authDomain: "chatapp-e6b4d.firebaseapp.com",
    databaseURL: "https://chatapp-e6b4d.firebaseio.com",
    projectId: "chatapp-e6b4d",
    storageBucket: "chatapp-e6b4d.appspot.com",
    messagingSenderId: "826728436216",
    appId: "1:826728436216:web:e11b3857cd2ad20f50460d",
    measurementId: "G-NG372LPKX8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;
