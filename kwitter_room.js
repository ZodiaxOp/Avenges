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

user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}



function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}





getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}



function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}