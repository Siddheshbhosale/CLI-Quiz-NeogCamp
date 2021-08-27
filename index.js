var readLineSync = require("readline-sync");
var chalk = require("chalk");
var score=0;

console.log(chalk.green.bold.underline("welcome to the Quiz! \n"));

var Username = readLineSync.question("\nWhat is your name ?\n> ")
console.log(chalk.cyanBright("\nwelcome",Username,"!\nlet's start the Quiz\n"));

console.log("There are 10 Questions in total. +2 for every right answer and -1 for every incorrect answer.\n");
function check(quizList){
 for(var i=0;i<quizList.length;i++){
   console.log(chalk.blue("\nQuestion"),i+1);
   var userAns = readLineSync.question(quizList[i].ques);
 
   if(userAns.toLowerCase()==quizList[i].ans.toLowerCase()){
     score+=2;
     console.log(chalk.yellowBright('You are correct..'))
   }
   else{
     console.log(chalk.red("your answer :",userAns));
     console.log(chalk.yellowBright("right answer :",quizList[i].ans));
   } 
   console.log(chalk.cyan("Your score is : " + score));
   console.log("------------------\n");
 }
}

var q1={
  ques:"Well do you know my name (Enter= Name-surname)?\n>",
  ans:"Siddhesh Bhosale"
}
var q2={
  ques:"Which course am I currently pursuing?\n> ",
  ans:"Engineering"
}
var q3={
  ques:"What is my nationality?\n>  ",
  ans:"Indian"
}
var q4={
  ques:"Where do I live?\n> ",
  ans:"Kolhapur"
}
var q5={
  ques: "What's my age?\n> ",
  ans: "20"
}
var q6={
  ques:"Which is my favorite sport?\n> ",
  ans:"Football"
}
var q7={
  ques:"which is my favourite move?\n> ",
  ans:"Three Idiots"
}
var q8={
  ques:"Whom do I admire the most?\n> ",
  ans:"Sandeep Maheshwari"
}
var q9={
  ques:"What's my favourite book?\n> ",
  ans:"Rich Dad poor Dad"
}
var q10={
  ques:"What is my goal in life?\n>  ",
  ans:"Absolute Freedom"
}

var quizList=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
check(quizList);

console.log("----End of the QUIZ!----");
console.log(chalk.cyan("Your final score is " + score));
if(score>=15)console.log(chalk.yellowBright("You are my closest friend!"));
else if(score>=5 && score<15)console.log(chalk.green("We are good friends."));
else console.log("We need to talk more often :)");