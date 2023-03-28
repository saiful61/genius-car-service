// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMepYtQDGBvFsGCr9Os8UveUJ4qCsxykQ",
    authDomain: "saiful-car-services.firebaseapp.com",
    projectId: "saiful-car-services",
    storageBucket: "saiful-car-services.appspot.com",
    messagingSenderId: "674960686021",
    appId: "1:674960686021:web:4dd574565ca0af82cea9ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;