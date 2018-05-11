'use strict'

var userPoints = 0;
// follow the rules very strictly
// check if the user's answer is correct
// find out whats the answer is
// toLowerCase or toUpperCase
// use a confirm box?
// hope you know a little bit about me after playing this game


alert('Hello fellow classmates, My name is Hai and welcome to my \n \'About ME!\' guessing game! \n Lets get started!!!');

var userName = prompt('What is your name?');
var firstQuestion = 'Hello, your first question is: \n';
var nextQuestion = 'Your next question is: \n';
var haveTotal = 'You have total of: ';
var correctAnswer = 'User answered the question correct!';
var incorrectAnswer = 'User answered the question incorrect!';

alert('Hi ' + userName+ '! Hope you can learn something about me after playing.');

// Question 1

var answer = prompt(firstQuestion+'Is Seattle my hometown?'+'\nType yes or no').toLowerCase();
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

// explains each questions/answer after in HTML
// Question 2

var answer2 = prompt(nextQuestion+ 'Do I have a Associate Degree?\n' + 'Type yes or no ').toLowerCase();
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

// Question 3

var answer3 = prompt(nextQuestion+ 'Is Veggie Grill my favorite restaurant? \n'+ 'Type yes or no ').toLowerCase();
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

// Question 4

var answer4 =prompt(nextQuestion + 'Do I have a dog? \n'+ 'Type yes or no ').toLowerCase();
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

// Question 5

var answer5 = prompt(nextQuestion + 'Do I love Seattle Traffics?\n'+ 'Type yes or no ').toLowerCase();
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
// alert user wow you have userPoints / 5 
// if >3 you sure do know a little about me
// if <3 you did not know enough about me, maybe after this game you'd know a little more!
alert('Congratulation '+userName+ ' you scored '+ userPoints+ ' out of 5 possible points!' );

