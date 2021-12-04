// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6VfxWc4OVfu760wQMukYoo5xZjdky1Tc",
  authDomain: "linkedin-clone-c906b.firebaseapp.com",
  projectId: "linkedin-clone-c906b",
  storageBucket: "linkedin-clone-c906b.appspot.com",
  messagingSenderId: "544725339291",
  appId: "1:544725339291:web:c8959a62d465ee5be4ca3e"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth}
