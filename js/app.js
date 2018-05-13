'use strict'

var userPoints = 0;
// follow the rules very strictly
// check if the user's answer is correct
// find out whats the answer is
// toLowerCase or toUpperCase
// use a confirm box?
// hope you know a little bit about me after playing this game

// about me employment experience education goal


alert('Hello fellow classmates, My name is Hai and welcome to my \n \'About ME!\' guessing game! \n Lets get started!!!');
var userName;
function name(){
    userName = prompt('What is your name?');
    return userName;
};
name();
// end editing userName
var firstQuestion = 'Hello, your first question is: \n';
var nextQuestion = 'Your next question is: \n';
var haveTotal = 'You have total of: ';
var correctAnswer = 'User answered the question correct!';
var incorrectAnswer = 'User answered the question incorrect!';

alert('Hi ' + userName+ '! Hope you can learn something about me after playing.');

// Question 1
var answer;
function question1(){
    answer = prompt(firstQuestion+'Is Seattle my hometown?'+'\nType yes or no').toLowerCase();
    console.log('User name is: '+ userName);
    console.log('Question 1, user answered: '+answer);
    
    if( answer === 'no' || answer === 'n'){
        // if its correct give them a point
        userPoints++;
        alert('Good guess! I am from Austin, Minnesota');
        console.log(correctAnswer);
    
    } else {
        // if its not correct, tell them to keep on trying
        alert('Nope, I am actually from Austin, Minnesota');
        console.log(incorrectAnswer);
    }
    alert (haveTotal + userPoints+ ' points');
    console.log('User have a total of: '+ userPoints+' points');
};
question1();
// end editing question 1
// explains each questions/answer after in HTML
// Question 2
var answer2
function question2(){
    answer2 = prompt(nextQuestion+ 'Do I have a Associate Degree?\n' + 'Type yes or no ').toLowerCase();
    console.log('Question 2, user answered: '+ answer2);
    if (answer2 === 'yes' || answer2 === 'y'){
        alert('You are correct, I do have a Associate of Science Degree! ');
        userPoints++;
        console.log(correctAnswer);
    } else {
        alert ('Good try, but answer is yes!');
        console.log(incorrectAnswer);
    }
    alert (haveTotal + userPoints+ ' points');
    console.log('User have a total of: '+ userPoints+ ' points');
};
question2();
//end editing Question 2

// Question 3
var answer3;
function question3(){
    answer3 = prompt(nextQuestion+ 'Is Veggie Grill my favorite restaurant? \n'+ 'Type yes or no ').toLowerCase();
    console.log('Question 3, user answered: '+ answer3);
    if (answer3 === 'yes' || answer3 === 'y'){
        alert('Goodjob, I love Veggie Grill');
        userPoints++;
        console.log(correctAnswer);
    } else {
        alert('Nope, The answer is yes');
        console.log(incorrectAnswer);
    }
    alert (haveTotal + userPoints+ ' points');
    console.log('User have a total of: '+ userPoints+ ' points');
};
question3();
// end editing Question 3

// Question 4
var answer4;
function question4(){
    answer4 =prompt(nextQuestion + 'Do I have a dog? \n'+ 'Type yes or no ').toLowerCase();
    console.log('Question 4, user answered: '+ answer4);
    if (answer4 === 'no' || answer4 === 'n'){
        alert('Awesome, I do not have a dog, but I would love to have one in the future');
        userPoints++;
        console.log(correctAnswer);
    } else {
        alert('Nope, I don\'t, but I would love to have a toy Poodles one day!');
        console.log(incorrectAnswer);
    }
    alert (haveTotal + userPoints+ ' points');
    console.log('User have a total of: '+ userPoints+ ' points');
};
question4();
//ended editing Question 4

//Question 5
var answer5;
function question5(){
    answer5 = prompt(nextQuestion + 'Do I love Seattle Traffics?\n'+ 'Type yes or no ').toLowerCase();
    console.log('Question 5, user answered: '+ answer5);
    if (answer5 === 'no' || answer5 === 'n'){
        alert('Goodjob, you are right! Seattle traffic is no fun!!');
        userPoints++;
        console.log(correctAnswer);
    } else {
        alert('Oohh noes, Seattle traffic is horribles at times!');
        console.log(incorrectAnswer);
    }
    alert (haveTotal + userPoints+ ' points');
    console.log('User have a total of: '+ userPoints+ ' points');
};
question5();
//ended editing Question5

// alert user wow you have userPoints / 5 
// if >3 you sure do know a little about me
// if <3 you did not know enough about me, maybe after this game you'd know a little more!

// Question 6
var answer6;
function question6(){
    answer6 = prompt('What\'s my favorite number?'+ 'Guess number from  0 to 10 !!!');
    var tries = 0;
    while (answer6 !=7 && tries < 3){
        if (answer6 == 7){
            alert('Amazing, 7 is correct!');
            console.log(correctAnswer);
            userPoints++;
        } else if (answer6 < 7){
            alert('You guessed wrong, '+ answer6 + ' is too low \n Try guessing again!!!');
            var answer6 = prompt('What\'s my favorite number?'+ 'Guess number from  0 to 10 !!!');
            tries++;
        } else if (answer6 > 7){
            alert('You guessed wrong, '+ answer6 + ' is too high! \n Try guessing again!!!');
            var answer6 = prompt('What\'s my favorite number?'+ 'Guess number from  0 to 10 !!!');
            tries++;
        } 
        // } else if (tries === 4){
            //     alert('You have exceeded your tries. Moving to next questions!');
            // }
    }if (answer6 == 7){
                alert('Amazing, 7 is correct!');
                console.log('Question 6, user answered: '+ answer6);
                console.log(correctAnswer);
                userPoints++;
            } else if (tries === 3 ){
            alert('You have exceeded your tries. Moving to next questions!');
        } 
};
question6();
//ended editing question 6

// Question 7

var cityIlived = ['lynnwood', 'burien', 'federal way', 'tacoma']; 
var tries2 = 0;
var rightAnswer;
var answer7;

while (tries2 < 7){ 
    answer7 = prompt('Can you guess what city I\'ve lived, in Washington State?'+ 'Please enter a name of a city within Washington State!').toLowerCase();
    for (var i = 0; i < cityIlived.length; i++){ //goes over our array
        if (answer7 === cityIlived[i]){ // check if the answer is correct or incorrect ONLY
            rightAnswer = true;
        } 
    } if (!rightAnswer){
        alert('Nope, try again!');
        console.log(incorrectAnswer);
        tries2++
    } else if (tries2 === 6){
        alert('You have exceeded your tries, moving to next questions');
        break;
    } else {
        alert ('Yayyyy you got it right, thank you for playing my game.');
        console.log(correctAnswer);
        userPoints++;
        tries2 += 7;
    }
}
alert('Congratulation '+userName+ ' you scored '+ userPoints+ ' out of 7 possible points!' );
console.log(userName+ ' you scored '+ userPoints+ ' out of 7 possible points!');











