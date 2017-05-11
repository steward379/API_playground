"use strict";

var config = {
    apiKey: "AIzaSyCSUN6iiPIThHGe4GwNvFERBoGhaIGRxwA",
    authDomain: "resume-669a4.firebaseapp.com",
    databaseURL: "https://resume-669a4.firebaseio.com",
    projectId: "resume-669a4",
    storageBucket: "resume-669a4.appspot.com",
    messagingSenderId: "459172865572"
};

firebase.initializeApp(config);

var storageRef = firebase.storage().ref();

var submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    var name = document.getElementById("name");
    var posts = document.getElementById("posts");
    var user = name.value;
    var words = posts.value;
    var fileName = "";
    for (var i = 0; i < 10; i++) {
        if (words[i]) {
            fileName += words[i];
        }
    }
    console.log(storageRef);
    var uploadTask = storageRef.child("posts/" + user + storageRef.a.h.b + ".txt");
    uploadTask.putString(words).then(function() {
        console.log("留言已送出!");
        console.log(uploadTask);
        // uploadTask.getDownloadURL().then(function(url) {
        //     console.log('網址在： ', url);
        //     document.getElementById('demo').innerHTML = "網址在： " + url;
        // });
    }, function(err) {
        var errCode = err.code;
        var errMessage = err.message;
        console.log(errCode + errMessage);
    });
}, false);

// var provider = new firebase.auth.GithubAuthProvider();

// firebase.auth().signInWithRedirect(provider);

// firebase.auth().getRedirectResult().then(function(result) {
//     if (result.credential) {
//         // This gives you a GitHub Access Token. You can use it to access the GitHub API.
//         var token = result.credential.accessToken;
//         // ...
//     }
//     // The signed-in user info.
//     var user = result.user;
// }).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
// });