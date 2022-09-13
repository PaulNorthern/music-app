import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTWLpLflWMw5sGBtv_uaD5u51vMSK_A9M",
    authDomain: "music-a7b98.firebaseapp.com",
    projectId: "music-a7b98",
    storageBucket: "music-a7b98.appspot.com",
    // messagingSenderId: "1007026683388",
    appId: "1:1007026683388:web:58cd4283ad1080d4c3c679"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const userCollection = db.collection("users");

export {
    auth,
    db,
    userCollection,
    storage
};