import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDMsn2kXeNawZCjkV5HlApzP8RJyB2K0gA",
  authDomain: "repositoriofb-c65a6.firebaseapp.com",
  databaseURL: "https://repositoriofb-c65a6-default-rtdb.firebaseio.com/",
  projectId: "repositoriofb-c65a6",
  storageBucket: "repositoriofb-c65a6.appspot.com",
  messagingSenderId: "847420300008",
  appId: "1:847420300008:web:cdbde3f2ff278ed214ef97",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};