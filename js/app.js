
'use strict'
// This section is the about me quiz from lab2, i've put in some multible choice with one 1 correct answer

//     var userName = prompt('Hello! im Natalie\s QuizBot! What is your name?')
//        //console.log('Hi' + userName '! I am so happy you visited my web page!')
//         alert('Hi ' + userName + '! I am so happy you visited my webpage!');

//     var playGame = prompt('Do you want to do a quiz?')
//         if (playGame.toLowerCase() === 'yes') {
//         // console.log('Wonderfull! This is a quiz to get to know Natalie better')
//         alert('Wonderfull! This is a quiz to get to know Natalie better')
//         } else {
//         alert('Aww, thats too bad. Goodbye ' + userName + ':[')
// }

//     var favColor = prompt('What is Natalie\s favorite color?   a)blue b)pink c)red')
//         if (favColor.toLowerCase() === 'blue') {
//         // console.log(favColor + 'is correct!')
//         alert(favColor + ' is correct!')
//         } else {
//         alert('Incorrect!')
// }

//     var favPlace = prompt('Where has she traveled to? (pick the letter!)    a)Tokyo b)Hongkong c)Paris d)All of the above')
//         if (favPlace.toLowerCase() === 'd') {
//         // console.log("よくやった (Well done)! She considers herself well traveled and loves discovering new places!")
//         alert('よくやった (Well done)! She considers herself well traveled and loves discovering new places!')
//         } else {
//         alert('Well you arent wrong, but she has traveled to all those places! Désolé (sorry)')

// }

//     var favFood = prompt('What is Natalie\s favorite food? (pick the letter)   a) Thai b)Italian c)Chinese')
//     if (favFood.toLowerCase() === 'a') {
//     // console.log('Thai is correct! Specifically, northern thai from WildRose in downtown Bend! She always gets the Kow Soi Curry ;)')
//     alert('Thai is correct! Specifically, northern thai from WildRose in downtown Bend! She always gets the Kow Soi Curry ;)')
//     } else {
//     alert('Although she is a lover of all foods, that is not her favorite!')
// }

//     var favShow = prompt('What is Natalies favorite tv show of all time? (pick the letter)  a)She doesnt watch TV b)The Office c)MTV Cribs')
//     if (favShow.toLowerCase() === 'b') {
//     // console.log('Good job Tuna!)
//     alert('Good job' + userName + '! Thank you for taking my quiz :]')
//     } else {
//     alert('WRONG. Its The Office you uncultured swine.' + userName + 'try again next time...')
// }

//This is the start of the "Guess a number" game, the user gets 4 tries before they get a message that breaks the loop

// var numAnswer = 9;
// var numOfGuesses = 0;
// console.log(numAnswer); 
// console.log(numOfGuesses);
//      while (numOfGuesses < 4) {
//          var numberGame = prompt('Guess a number between 1 and 50')

//     numberGame = numberGame * 1;
//     console.log(numberGame);
//         if (numberGame == numAnswer) {
//             alert ('Correct!' + numAnswer + ' is the correct answer!')
//             break;
// }   
//         if ( numOfGuesses === 3) {
//             alert('Youve guessed wrong too many times, the answer is ' + numAnswer + '!')
//             break;
//         } else if (numberGame > 9 ) {
//             alert ('Guess lower');
//                 numOfGuesses++;
//         } else if ( numberGame < 9 ) {
//             alert('Guess higher');
//                 numOfGuesses++; }

//      }

// this is the 7th question added with multible answers

var favSushiRolls = ['california', 'spider', 'rainbow']
console.log (favSushiRolls);

var sushiGuess = ['california', 'spider', 'rainbow']
var sushiGuessWrong = [ ]

    for (var i = 0;  i < 6; i++)
        var sushiGuess = prompt('Guess what Natalies 3 favorite types of sushi rolls are, (you have 6 tries)');
        if (sushiGuess.includes(favSushiRolls.toUpperCase())) {
            alert('Correct!')
       var sushiGuessCorrect = prompt('Correct! Natalie loves ' + favSushiRolls + '!!')
            sushiGuessCorrect++;
            alert('Correct! my favorite type of sushis are' + favSushiRolls)
     } else if (sushiGuessWrong); {
            alert('Sorry!')
            i = 6;
     } 
    
      
    

    console.log(sushiGuessCorrect)

//Playing around

// for(i=1; i<6;i++) {
//             if(isAnswer === false); {
//                      alert('Sorry, that is not one of the numbers I was thinking of');
//     }       else if(isAnswer === true); {
//                      alert('congradulations! That is one of the right answers!');
//                     break;
//     }
//     }
//     var colors = ['red', 'white', 'blue'];
// var comment;

// for (var tries = 6; tries >= 0; --tries) {
//         comment = prompt('what\'s you\'re fav color');
//         for (var i = 0; i < colors.length; ++i) {
//                 if (comment === colors[i]) {
//                         alert('congrats!');
//                         break;
//                 } else {
//                         alert('wrong!');
//                 }

//         }
// }

// while (tries > 0) {
//         for (var i = 0; i < colors.length; ++i) {
//                 if (comment === colors[i]) {
//                         alert('congrats!');
//                         break;
//                 } else {
//                         alert('wrong!');
//                         prompt('what\'s you\'re fav color');
//                         tries -= 1;
//                 }
//         }
        
// }


// for (var i = 0; i < colors.length; ++i) {
//         prompt('what\'s you\'re fav color');
//         if (comment !== colors[i]) {
//                         alert('wrong!');
//                         while (tries >6) {
//                         tries += 1;
//                         }  
//                 } else if (comment !== colors[i]) {
//                         alert('wrong! The answer was either Red, White, or blue!');
//                 } else {
//                 alert('congrats!');
//                 break;
//         }
// }

// var colors = ['red', 'white', 'blue'];
// var count = 0



// while(count < 6 ) {
//         var question = prompt('name that color');
//         var comment = false;        
//         for(var i=0; i<6; i++) {
//                 if(question === colors[i]) {
//                         comment = true;
//                 }

//         }
//         if( comment === true){
//         alert('congrats');
//         score++
//         break;
//         }
//         if(comment === false){
//                 alert('sorry, try again');
//                 count++;
//         if (count === 6) {
//                 alert('sorry, the right answers were red, white, or blue!');
//         }
//         }
// }
// alert('Hey you got '+ score + ' correct answers. great job!');





       