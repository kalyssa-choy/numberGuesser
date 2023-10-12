//takes html elements and assigns them to const variables
const indicator = document.getElementById("indicator");
const userNum = document.getElementById("userNum");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");

//returns a random integeer between 1 and 10
function getRandomInt(){
    return Math.floor(Math.random() * 10 + 1);
}

//compares the input integer with the value the user is trying to guess and returns a message to indicate right, lower, higher
function compareNum(){
    let actualGuess = userNum.value;

    //for if the guess is too high
    if(actualGuess > goalNum){
        indicator.innerText = "Incorrect. Guess Lower!";
        indicator.classList.add("incorrect");
    }

    //for if the guess is too low
    else if(actualGuess< goalNum){
        indicator.innerText = "Incorrect. Guess Higher!";
        indicator.classList.add("incorrect");
    }

    //for if the guess is correct
    else{
        indicator.innerText = "Correct! The number is " + goalNum + "!";
        indicator.classList.remove("incorrect");
        indicator.classList.add("correct");
    }
}

//the number the user is trying to guess
var goalNum = getRandomInt();
console.log(goalNum);

//compares the user input and the goal number when the user clicks the submit button
submit.addEventListener("click", compareNum);

//creates a new number guessing game for the user
function newGame(){
    indicator.innerText = "Guess a number between 1 and 10 to see if it's correct";
    indicator.classList.remove("correct", "incorrect");
    goalNum = getRandomInt();
    console.log(goalNum);
    submit.addEventListener("click", compareNum);
}

//resets the game to have a new goal number when the new game button is clicked
reset.addEventListener("click", newGame);