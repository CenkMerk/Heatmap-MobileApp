// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY3UfFMCIt_iKyZQFbgt8SKYE1XFqgSXw",
  authDomain: "heatmap-9cea2.firebaseapp.com",
  projectId: "heatmap-9cea2",
  storageBucket: "heatmap-9cea2.appspot.com",
  messagingSenderId: "943297878542",
  appId: "1:943297878542:web:ab102a3a1771ccfc28fa5f",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { auth };
