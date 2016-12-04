//Make sure this is placed after firebase is created
//This file will contain methods which can be used to use the database
//You should already be authenticated


//Saves the object to the specified location in the database. This typically won't be used due to being extremely precise.
function saveObjectToLocation(object, location) {
    var db = firebase.database().ref(location);
    db.set(object);
}


//Reads the object from the specified location in the database. This typically won't be used due to being extremely precise.
function readObjectFromLocation(location) {
    var db = firebase.database().ref(location);
    var obj = null;
    db.once("value", function(data) {
        obj = data.val();
    });     
    return obj;
}

function createMemberObject(name, position) {
    var r = {name:name,position:position};
    return r;
}

function authenticate(email,pass) {
    firebase.auth().signInWithEmailAndPassword(email,pass).catch(function(err) {
        alert("Something went wrong when attempting authentication...(Most likely invalid credentials)");
    });
}