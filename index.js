
//number for the guess
var guessNumber = document.querySelector("#number");
var guess = document.querySelector('.guess');
var guessButton = document.querySelector("#guess-button");
var yourGuess = document.querySelector('.your-guess');
var clearButton = document.querySelector('#clear-button');
var inputCheck = document.querySelector('#number');
var resetButton = document.querySelector('#reset');
var error = document.querySelector('.err');
var randomNumber = 0;
var rangeSubmitButton = document.querySelector('#submit-range-button');
var lowNumber = document.querySelector('#low-number')
var highNumber = document.querySelector('#high-number')
var rangeError = document.querySelector('.range-error')
var low = 0
var high = 100

//Function to grab the number entered in the input on click of guess button
function getGuess () {
  event.preventDefault()
  var answer = parseInt(guessNumber.value);
  guess.innerText = answer
  checkGuessWithRandom()
  testForCorrectDataFromInput()
}

//Function to Create a Random Number between 1 and 100
function randomNumberGenerator(low, high) {
randomNumber = Math.round((Math.random() * (high - low+1) + low));
console.log(randomNumber + " is random number")
}
//Function to test for NaN
// function NaNTest() {
//   console.log("testing the NaNTest Function");
//   enableButtons();

// };

//event listener to run randomNumberGenerator on load
window.addEventListener("load", function load(){
    randomNumberGenerator(low, high)
});




// Function to test for input data 
function testForCorrectDataFromInput() {
  var answer = parseInt(guessNumber.value);
  if (isNaN(answer)) {
    error.innerText = "Thats Not a Number, please guess again with a number between 1 and 100 only"
  } else if (answer > high || answer < low) {
    error.innerText = "WARNING: you are out of range. Only guess a Number Between 1 and 100"
  } else {
    error.innerText = "your last guess was..."
  }
}


//Compare User Guess with the Random Number
function checkGuessWithRandom() {

  var  answer = parseInt(guessNumber.value);
  if (answer < randomNumber) {
    yourGuess.innerText = "that is too Low"
  } else if (answer > randomNumber) {
    yourGuess.innerText = "that is too High"
  } else if (answer === randomNumber) {
    yourGuess.innerText = "Boom"
    window.alert("Winner Winner Chicken Dinner")
//plusten ()
} else {
  yourGuess.innerText = "Boom Chicka Boom"

}
}



//Clear Buttons
function clearButtonFunction (){
  event.preventDefault()
  console.log("clearButton Function is working")
  document.getElementById("number").value = "";
}

//Disable buttons
function disableButtons () {
  console.log("disableButtons is working");
  document.getElementById('guess-button').disabled = true;
  document.getElementById('clear-button').disabled = true;
  document.getElementById('reset').disabled = true;
  document.getElementById('submit-range-button').disabled = true;
}

// Enable Buttons
function enableButtons () {
  console.log("enableButtons is working");
  document.querySelector('#guess-button').disabled = false;
  document.querySelector('#clear-button').disabled = false;
  document.querySelector('#reset').disabled = false;
  document.getElementById('submit-range-button').disabled = false;
}

//Reset Buttons
function resetButtonFunction () {

  yourGuess.innerText = "";
  guessNumber.innerText = "";
  guess.innerText = "##";
  error.innerText = "";
  document.getElementById("number").value = "";
  randomNumberGenerator(low, high) 
  disableButtons()

}

function rangeActivateSubmitButton() {
  document.getElementById('submit-range-button').disabled = false;
}

//get range from the input fields
function rangeSubmit () {
  event.preventDefault()
  low = parseInt(lowNumber.value);
  high = parseInt(highNumber.value)
  resetButtonFunction()
  randomNumberGenerator (low, high)
  if (isNaN(low) || isNaN(high)) {
    rangeError.innerText = "Thats Not a Number, please try again"
  } 

  console.log("rangeSubmitButton is working")
}


//Button Listener
guessButton.addEventListener("click", getGuess);
clearButton.addEventListener("click", clearButtonFunction);
// inputCheck.addEventListener('keyup', NaNTest);
resetButton.addEventListener('click', resetButtonFunction);
inputCheck.addEventListener('keyup', enableButtons);
rangeSubmitButton.addEventListener('click', rangeSubmit)
lowNumber.addEventListener('keyup', rangeActivateSubmitButton);
highNumber.addEventListener('keyup', rangeActivateSubmitButton);






