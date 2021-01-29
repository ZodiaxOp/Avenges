var firebaseConfig = {
    apiKey: "AIzaSyA9EibOQ29Cuu2ySi5gS4BY1DliocPsB7Y",
    authDomain: "m-e-s-s-a-n-g-e-r.firebaseapp.com",
    databaseURL: "https://m-e-s-s-a-n-g-e-r.firebaseio.com",
    projectId: "m-e-s-s-a-n-g-e-r",
    storageBucket: "m-e-s-s-a-n-g-e-r.appspot.com",
    messagingSenderId: "1027918378199",
    appId: "1:1027918378199:web:50ef9e2b2f065cb389ac92",
    measurementId: "G-SGXFVB490Y"
};
firebase.initializeApp(firebaseConfig);

function adduser() {
    user_name = document.getElementById("user_name").value
    firebase.database().ref("/").child(user_name).update({
        porpose: "adding user"

    })
}