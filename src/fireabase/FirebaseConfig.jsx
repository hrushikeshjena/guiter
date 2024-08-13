// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCuSpWBgcPNorHUQzV9EVHx84Ch8XsmuOg",
  authDomain: "zoundsmusik-aad99.firebaseapp.com",
  projectId: "zoundsmusik-aad99",
  storageBucket: "zoundsmusik-aad99.appspot.com",
  messagingSenderId: "959249727637",
  appId: "1:959249727637:web:21f60ea4e9954e3ec65b9c"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}