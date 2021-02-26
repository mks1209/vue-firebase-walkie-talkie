import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD1mEKwwv4FSBBqzkM4BSSKmzx2f5m94LQ",
    authDomain: "suhulah-4b253.firebaseapp.com",
    databaseURL: "https://suhulah-4b253.firebaseio.com",
    projectId: "suhulah-4b253",
    storageBucket: "suhulah-4b253.appspot.com",
    messagingSenderId: "533794448677",
    appId: "1:533794448677:web:92e3143dfc479de4e2a6cc",
    measurementId: "G-0LMV2YX8QC"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
