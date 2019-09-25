
'use strict'

    var userName = prompt('Hello! im Natalie\s QuizBot! What is your name?')
       //console.log('Hi' + userName '! I am so happy you visited my web page!')
        alert('Hi ' + userName + '! I am so happy you visited my webpage!');

    var playGame = prompt('Do you want to do a quiz?')
        if (playGame.toLowerCase() === 'yes') {
        // console.log('Wonderfull! This is a quiz to get to know Natalie better')
        alert('Wonderfull! This is a quiz to get to know Natalie better')
        } else {
        alert('Aww, thats too bad. Goodbye ' + userName + ':[')
}

    var favColor = prompt('What is Natalie\s favorite color?   a)blue b)pink c)red')
        if (favColor.toLowerCase() === 'blue') {
        // console.log(favColor + 'is correct!')
        alert(favColor + ' is correct!')
        } else {
        alert('Incorrect!')
}

    var favPlace = prompt('Where has she traveled to? (pick the letter!)    a)Tokyo b)Hongkong c)Paris d)All of the above')
        if (favPlace.toLowerCase() === 'd') {
        // console.log("よくやった (Well done)! She considers herself well traveled and loves discovering new places!")
        alert('よくやった (Well done)! She considers herself well traveled and loves discovering new places!')
        } else {
        alert('Well you arent wrong, but she has traveled to all those places! Désolé (sorry)')

}

    var favFood = prompt('What is Natalie\s favorite food? (pick the letter)   a) Thai b)Italian c)Chinese')
    if (favFood.toLowerCase() === 'a') {
    // console.log('Thai is correct! Specifically, northern thai from WildRose in downtown Bend! She always gets the Kow Soi Curry ;)')
    alert('Thai is correct! Specifically, northern thai from WildRose in downtown Bend! She always gets the Kow Soi Curry ;)')
    } else {
    alert('Although she is a lover of all foods, that is not her favorite!')
}

    var favShow = prompt('What is Natalies favorite tv show of all time? (pick the letter)  a)She doesnt watch TV b)The Office c)MTV Cribs')
    if (favShow.toLowerCase() === 'b') {
    // console.log('Good job Tuna!)
    alert('Good job' + userName + '! Thank you for taking my quiz :]')
    } else {
    alert('WRONG. Its The Office you uncultured swine.' + userName + 'try again next time...')
}


    /* var favColor = prompt('What is Natalies favorite color?')
    alert(userName + 'I see your favorite color is' + favColor)

    var favSport = prompt('What is your favorite sport?')
    alert('Wow! my favorite sport is ' + favSport + 'as well! It was very nice to meet you' +  userName + '!!')

    var loveDog = prompt('Hey' + userName + 'do you like dogs?');

    if (loveDogs.toUppserCase() === 'yes') {
        alert('Great!');
    } else {
        alert ('then you\'r a terrible person');
    } */