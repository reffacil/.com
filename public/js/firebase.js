
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey:"AIzaSyCVQbChk6X12lNOrhAoL0fxuCPjU7ikuYA",
    authDomain:"reffacilcom.firebaseapp.com",
    projectId:"reffacilcom",
    storageBucket:"reffacilcom.appspot.com",
    messagingSenderId:"588760497407",
    appId:"1:588760497407:web:5593cc3cfe9dadf9cc20ca",
    measurementId:"G-BJF8KZY74W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);