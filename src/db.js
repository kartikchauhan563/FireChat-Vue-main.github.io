import firebase from "firebase/app";
import "firebase/database";

const config = {
	apiKey: "AIzaSyAhjBNTN8TA3m-wIudFIc7SkjYHZc_Ll48",
    authDomain: "groupchat-36ae6.firebaseapp.com",
    projectId: "groupchat-36ae6",
    storageBucket: "groupchat-36ae6.appspot.com",
    messagingSenderId: "1050862611101",
    appId: "1:1050862611101:web:d8a1ceb2a32636d3028274"
}

const db = firebase.initializeApp(config);
export default db;