
//number for the guess
var guessNumber = document.querySelector("#number");
var guess = document.querySelector('.guess');
var guessButton = document.querySelector("#guess-button");
var yourGuess = document.querySelector('.your-guess');
var clearButton = document.querySelector('#clear-button');
var inputCheck = document.querySelector('#number');
var resetButton = document.querySelector('#reset')



// Why doesn't this work????????????
// var answer = parseInt(guessNumber.value);
var randomNumber = Math.round((Math.random() * 100) + 1);



//Function to grab the number entered in the input on click of guess button
function getGuess () {
 event.preventDefault()
 // NaNTest()
 var answer = parseInt(guessNumber.value);
 guess.innerText = answer
 checkGuessWithRandom()
}

//Function to Create a Random Number between 1 and 100
function randomNumberGenerator() {
 var randomNumber = Math.round((Math.random() * 100) + 1);
}
//Function to test for NaN
function NaNTest() {
  console.log("testing the NaNTest Function")
  console.log("enableButtons is working")
};



//Compare User Guess with the Random Number
function checkGuessWithRandom() {
  randomNumberGenerator();
  var  answer = parseInt(guessNumber.value);
    if (answer < randomNumber) {
    yourGuess.innerText = "that is to Low"
  } else if (answer > randomNumber) {
    yourGuess.innerText = "that is to High 4:20"
  } else if (answer === randomNumber) {
    yourGuess.innerText = "Boom"
    window.alert("Winner Winner Chicken Dinner")
  } else {
    yourGuess.innerText = "Boom Chicka Boom"
  }
}

//Reset input
 function resetInputField() {
   
 }


//Clear Buttons
function clearButtonFunction (){
  event.preventDefault()
  console.log("clearButton Function is working")
  document.getElementById("number").value = "";
}

//Activate buttons


// Buttons
function enableButtons () {
 console.log("enableButtons is working")
}

//Reset Buttons
function resetButtonFunction () {
 console.log('testing the resetButtonFunction is working')
 yourGuess.innerText = "";
 guessNumber.innerText = "";
 guess.innerText = "##";
 document.getElementById("number").value = "";
 randomNumberGenerator() 

}
//CLEAR THE DOM
//SET NEW RANDOM NUMBER
//DISABLE THE RESET BUTTON

//Button Listener
guessButton.addEventListener("click", getGuess)
clearButton.addEventListener("click", clearButtonFunction)
inputCheck.addEventListener('keyup', NaNTest)
resetButton.addEventListener('click', resetButtonFunction)








