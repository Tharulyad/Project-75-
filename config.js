import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBRzbomtwuMdOJ3KmwIfIGoa0PhLmNy33s",
  authDomain: "e-ride-app-ba0e3.firebaseapp.com",
  projectId: "e-ride-app-ba0e3",
  storageBucket: "e-ride-app-ba0e3.appspot.com",
  messagingSenderId: "252437743324",
  appId: "1:252437743324:web:68c035d41942a256665619"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
