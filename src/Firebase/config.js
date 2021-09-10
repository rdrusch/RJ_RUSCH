import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCm0URxwrjGrL9MY98f03GG-f2DxETo1QY",
    authDomain: "react-coder-app.firebaseapp.com",
    projectId: "react-coder-app",
    storageBucket: "react-coder-app.appspot.com",
    messagingSenderId: "839762780496",
    appId: "1:839762780496:web:5d63337de012d6c7330c55"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app
}

export const getFirestore = () => {
    return firebase.firestore(app)
}