

var newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is soooooo cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preeeety cool!"
    }
];

function isUserValid(username, password){
    for (var i=0; i<database.length; i++) {
        if(database[i].username ===username && 
            database[i].password === password){
                return true;
            } 
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)){
        console.log(newsfeed)
    }else {
        alert("Sorry, wrong username and password");
    }
    
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);
