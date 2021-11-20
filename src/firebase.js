import firebase from "firebase";

 

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDTdpCYfHr9E6_opstP0ePc3obAm_w7-Ug",
        authDomain: "confluence-infotech.firebaseapp.com",
        databaseURL: "https://console.firebase.google.com/u/0/project/confluence-infotech/firestore/data/~2F",
        projectId: "confluence-infotech",
        storageBucket: "confluence-infotech.appspot.com",
        messagingSenderId: "266535597656",
        appId: "1:266535597656:web:b2cee95f6cd32ad5793c2d",
        measurementId: "G-JHEQ6G87YL",
    
    
     
});

const db = firebaseApp.firestore();
export { db };
  