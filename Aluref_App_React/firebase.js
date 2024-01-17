/* eslint-disable babel/require-config-file, requireConfigFile: false */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHYWmBRYzorm6hEJVTQVxNpqOx8DQPOCE",
    authDomain: "aluref-6d192.firebaseapp.com",
    databaseURL: "https://aluref-6d192-default-rtdb.firebaseio.com",
    projectId: "aluref-6d192",
    storageBucket: "aluref-6d192.appspot.com",
    messagingSenderId: "496282009544",
    appId: "1:496282009544:web:c69c916be12e06ee9e4afd",
    measurementId: "G-T7WX2SC9ZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
