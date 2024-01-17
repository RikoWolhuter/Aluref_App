import * as firebase from "firebase";
const firebaseConfig={
    apiKey: "AIzaSyCHYWmBRYzorm6hEJVTQVxNpqOx8DQPOCE",
    authDomain: "aluref-6d192.firebaseapp.com",
    databaseURL: "https://aluref-6d192-default-rtdb.firebaseio.com",
    projectId: "aluref-6d192",
    storageBucket: "aluref-6d192.appspot.com",
    messagingSenderId: "496282009544",
    appId: "1:496282009544:web:c69c916be12e06ee9e4afd",
    measurementId: "G-T7WX2SC9ZN"
}

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export {firebase}