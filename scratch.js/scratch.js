    // while (answer6 != 7){
    //    var answer6 = promp('What\'s my favorite number?'+ 'Guess number from  0 to 10 !!!');
    //  if (answer6 < 7){
    //     alert('You guessed wrong, '+ answer6 + ' is too low \n Try guessing again!!!');
    //     console.log(incorrectAnswer);
    //     tries++;
    // } if (answer6 >7){
    //     alert('You guessed wrong, '+ answer6 + ' is too high! \n Try guessing again!!!');
    //     console.log(incorrectAnswer);
    //     tries++
    // } else {
    //     alert('You have exceeded your tries. Moving to next questions!');
    // }
    // }

while (answer6 < 7 || answer >7 || tries < 4){
    var answer6 = promp('What\'s my favorite number?'+ 'Guess number from  0 to 10 !!!');
    tries++;
}
alert('You have exceeded your tries. Moving to next questions!');

while (answer6 !=7 && tries < 4){
    while (answer6 < 7 && tries < 4 ){
        alert('You guessed wrong, '+ answer6 + ' is too low \n Try guessing again!!!');
        tries++;
    } while (answer6 >7 && tries < 4){
        alert('You guessed wrong, '+ answer6 + ' is too high! \n Try guessing again!!!');
        tries++
    }
};





