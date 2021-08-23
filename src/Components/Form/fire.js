import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCKIBMhtSYaJrZp94ELBS6ohm5RK-eRnPM",
    authDomain: "login-509cd.firebaseapp.com",
    projectId: "login-509cd",
    storageBucket: "login-509cd.appspot.com",
    messagingSenderId: "776208570810",
    appId: "1:776208570810:web:ed3c50b25483e63630a583"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;