var random, maxNum, user, maxTries, msg, attempt, win;


function newTry() {
    win = false;
    msg = "enter the maximum number";
    setMaxNum();
    msg = "how many tries?";
    setMaxTries();
    random = Math.floor(Math.random() * maxNum);
    msg = "guess a number between 0 and " + maxNum + "!";
    for(attempt = 1; attempt <= maxTries; attempt++){
        guess();
        if(win){
            alert("you win!");
            return;
        }
        else{
            msg = "" + user + " was wrong. guess a number between 0 and " + maxNum + "!";
        }
    }
    
    alert("" + user + " was wrong. you lose!");
    return;


}


function setMaxNum() {
    maxNum = prompt(msg, 10);
    if (!(maxNum > 0)) {
        msg = "this is not a valid number. enter the maximum number";
        setMaxNum();
        return;
    }
    else{
        return;
    }
}

function setMaxTries() {
    maxTries = prompt(msg, 10);
    if (!(maxTries > 0)) {
        msg = "this is not a valid number. How many tries?";
        setMaxTries();
        return;
    }
    else{
        return;
    }
}

function guess(){
    user = prompt(msg, 7);
    if(user == random){
        win = true;
    }
}