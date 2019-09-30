
'use strict'
//This section is the about me quiz from lab2, i've put in some multible choice with one 1 correct answer
var correctScore=0

function gameOne(){


    var userName = prompt('Hello! im Natalie\s QuizBot! What is your name?')
       //console.log('Hi' + userName '! I am so happy you visited my web page!')
        alert('Hi ' + userName + '! I am so happy you visited my webpage!');

    var playGame = prompt('Do you want to do a quiz?')
        if (playGame.toLowerCase() === 'yes') {
        // console.log('Wonderfull! This is a quiz to get to know Natalie better')
        alert('Wonderfull! This is a quiz to get to know Natalie better')
        correctScore++
        } else {
        alert('Aww, thats too bad. Goodbye ' + userName + ':[')
}

    var favColor = prompt('Is Natalie\s favorite color blue?')
        if (favColor.toLowerCase() === 'yes') {
        // console.log(favColor + 'is correct!')
        alert(favColor + ' is correct! Her favorite color is blue!')
        correctScore++
        } else {
        alert('Incorrect! Her favorite color is blue.')
}

    var favPlace = prompt('Has Natalie traveled to Tokyo, Japan?')
        if (favPlace.toLowerCase() === 'yes') {
        // console.log("よくやった (Well done)! She considers herself well traveled and loves discovering new places!")
        alert('よくやった (Well done)! She has been to Tokyo, the ramen is amazing!')
        correctScore++
        } else {
        alert(' Incorrect, she has been to Tokyo!')

}

    var favFood = prompt('Is Natalie\s favorite food Italian?')
    if (favFood.toLowerCase() === 'no') {
    alert(' Correct, Her favorite food is Thai, Specifically, northern thai from WildRose in downtown Bend! She always gets the Kow Soi Curry ;)')
    correctScore++
    } else {
    alert('Incorrect, her favorite food is actually Thai!')
}

    var favShow = prompt('Is Natalie\s favorite TV show The Office?')
    if (favShow.toLowerCase() === 'yes') {
    // console.log('Good job Tuna!)
    alert('Good job ' + userName + '! Thank you for taking my quiz :]')
    correctScore++
    } else {
    alert('WRONG. It is The Office. ' + userName + ' try again next time...')
}
}

//This is the start of the "Guess a number" game, the user gets 4 tries before they get a message that breaks the loop

function gameTwo() {

var numAnswer = 9;
var numOfGuesses = 0;
console.log(numAnswer); 
console.log(numOfGuesses);
    while (numOfGuesses < 4) {
         var numberGame = prompt('Guess a number between 1 and 50')

    numberGame = numberGame * 1;
        if (numberGame == numAnswer) {
            alert ('Correct!' + numAnswer + ' is the correct answer!')
            correctScore++
            break;
}   
        if ( numOfGuesses === 3) {
            alert('Youve guessed wrong too many times, the answer is ' + numAnswer + '!')
            break;
        } else if (numberGame > 9 ) {
            alert ('Guess lower');
                numOfGuesses++;
        } else if ( numberGame < 9 ) {
            alert('Guess higher');
                numOfGuesses++; }

     }
    }

// this is the 7th question added with multible answers

function gameThree() {
    var myFavPlaces = ['Tokyo', 'Paris', 'HongKong', 'Lisbon', 'Madrid'];
    var placesGuess = (prompt('Guess what Natalie\s favorite places shes traveled to. Hint:They are all international cities. You have 6 tries!')).toLowerCase();
   var correctGuess = false;
   
    while (attempts < 7 && correctGuess === false) {
        placesGuess = (prompt('Try guessing my favorite places i\'ve been to! Hint: They\'re all international cities.')).toLowerCase();

        for (var i=0 ; i < myFavPlaces.length -1 ; i++){
            if (placesGuess === myFavPlaces[i])
            alert ('Good job!' + myFavPlaces[i] + ' is one of my favorite places!');
            correctGuess = true;
            correctScore++
            }
        }
        attempts += 1;
    }


    
    
gameOne();
gameTwo();
gameThree();

alert('Thanks for playing ' + userName + ' your final score is: ' + correctScore + ' out of 7')
