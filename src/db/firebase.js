import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSEFocv6UZIM0RxFMBIO8ws8_JZRa0TaA",
  authDomain: "db-tareas.firebaseapp.com",
  databaseURL: "https://db-tareas-default-rtdb.firebaseio.com",
  projectId: "db-tareas",
  storageBucket: "db-tareas.appspot.com",
  messagingSenderId: "198617831242",
  appId: "1:198617831242:web:da156503667634cb2593b3",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
