// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ4VHvemzdLfsHBFsENjTogu24lPRIvJg",
  authDomain: "tf-native.firebaseapp.com",
  projectId: "tf-native",
  storageBucket: "tf-native.appspot.com",
  messagingSenderId: "30940677131",
  appId: "1:30940677131:web:00f1a37b41f9e71498b30e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};