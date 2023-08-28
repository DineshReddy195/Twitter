import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_YVLA1tFcfRoJpxJChRnOA-6HLXUW2GY",
  authDomain: "twitter-clone-a6fb7.firebaseapp.com",
  projectId: "twitter-clone-a6fb7",
  storageBucket: "twitter-clone-a6fb7.appspot.com",
  messagingSenderId: "107948782737",
  appId: "1:107948782737:web:4dce4ebd259f59c041fb30"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)

 const auth=firebase.auth()

const db=firebaseApp.firestore();

export  {db,auth};