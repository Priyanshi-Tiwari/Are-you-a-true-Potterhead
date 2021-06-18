var readlineSync=require('readline-sync');
const boxen = require('boxen');
const chalk = require('chalk');


console.log(boxen(("Are you a true\n Potterhead?"),{backgroundColor:"gray",borderstyle:"round",padding:1,borderColor:"yellow"}));

console.log(chalk.yellowBright("\nLet\'s put your wizarding knowledge\nto the test"));



var userName=readlineSync.question(chalk.yellowBright("\nPlease enter your name:\n"))

console.log(chalk.yellowBright("\n\nHi,"+userName+"!"+" Welcome to LEVEL 1!\n\nAnswer all the questions correctly\nto get to LEVEL 2\n\nand remember \'No magic allowed!\';)\n"));



var highScores={
  first:"Priyanshi:7",
  scoreOne:7,
  second:"Akash:6",
  scoreTwo:6
}
var userQuestions=[
  {
    question:chalk.bgYellowBright.bold("What position did Harry play\non his quidditch team?\n")+"\na)Keeper    b)Seeker\n\nc)Beater    d)Chaser\n\n ",
    answer:"b"
  },

  {
    question:chalk.bgYellowBright.bold("What year did harry defeat\nthe Basilisk?\n")+"\na)First    b)Second\n\nc)Third    d)Fourth\n\n",
    answer:"b"
  },

  {
    question:chalk.bgYellowBright.bold("In the first book, what creature\nwas released in the girl's\nlavatory?\n")+"\na)Dragon    b)Three-headeddog\n\nc)Troll     d)Basilisk\n\n",
    answer:"c"
  },



  {
    question:chalk.bgYellowBright.bold("How does the Basilisk travel around\nthe school?\n")+"\na)It's invicible\n\nb)It goes through the pipes\n\nc)It only travels at night\n\nd)It goes through secret passageways\n\n",
    answer:"b"
  },

  {
    question:chalk.bgYellowBright.bold("What is the first name to come out\nof the Goblet of Fire?\n")+"\na)Cedric diggory    b)Fleur Delacour\n\nc)Harry Potter      d)Victor Krum\n\n",
    answer:"d"
  },

  {
    question:chalk.bgYellowBright.bold("How many points is the golden snitch\nworth in Quidditch?\n")+"\na)100    b)150\n\nc)200    d)250\n\n",
    answer:"b"
  },

  {
    question:chalk.bgYellowBright.bold("Who founded the Order of the Phoenix?\n")+"\na)Godric Gryffindor    b)Sirius Black\n\nc)Albus Dumbledore     d)Remus Lupin\n\n",
    answer:"c"
  
  },

 
]

var score=0;

function play(question,answer){
  var userAns=readlineSync.question(chalk.bold.red(question));
  if(userAns.toLowerCase()===answer){
    console.log(chalk.yellowBright("You are right!\n"));
    score=score+1;
  }
  else{
    console.log(chalk.blueBright("You are wrong!\n"))
  }
}


for(i=0;i<userQuestions.length;i++){
  play(userQuestions[i].question,userQuestions[i].answer);

}


if(score>highScores.scoreTwo){
    console.log(chalk.yellowBright("Your final score is "+score));

    console.log(chalk.red.bgYellowBright.bold("\nCongratulations on completing\nLEVEL 1!\n"));

    console.log(chalk.yellowBright("The high scores are:\n"+highScores.first+"\n"+highScores.second+"\n"));

    console.log(chalk.red.bgYellowBright.bold("Please send a screenshot of your\nhigh score."));
  }

else{
 if(score===highScores.scoreTwo){
  console.log(chalk.yellowBright("6/7! Outstanding!\nHermoine,is that you?"));

  console.log(chalk.yellowBright("\nThe high scores are:\n"+highScores.first+"\n"+highScores.second));

  console.log(chalk.yellowBright.bold("\nPlease send a screenshot of\nyour high score.\n"));
  
 }
 else{
   
   console.log(boxen(("Your score is "+ score+"!"+"\nLet's try again to beat the\nhigh scores."),{backgroundColor:"gray",borderstyle:"round",padding:1,borderColor:"yellow"}));

   console.log(chalk.yellowBright("The high scores are:\n"+highScores.first+"\n"+highScores.second+"\n"));
   
 }

 }

 if(score<7){
   console.log(chalk.yellowBright.bold("Answer all the seven questions\ncorrectly to get to LEVEL 2!"));

   console.log(chalk.yellowBright.bold("Let\'s go!!"))
  
 }

 else{
  
    readlineSync.keyInYN(chalk.bold.red('\nNow are you ready for LEVEL 2?\n\nPress \'y\' for yes and \'n\' for no\n\n'))
    // 'Y' key was pressed.
    console.log(chalk.bold.red("\nLet\'s get in!\n"))
    
    console.log(boxen(('LEVEL 2'),{backgroundColor:"gray",borderstyle:"round",padding:1,borderColor:"yellow"}));
  
  
  
  
  console.log(chalk.yellowBright("\nThis level will be yes or no questions\n"));
  console.log(chalk.yellowBright("So press \'y\' for yes and \'n\' for no\n"));
  var newScore=0;
  
  var newQues=[
  
    {
       question:"--> Aragog is the name of Hagrid\’s\npet,a giant spider.\n",
    
      answer:true
    },
  
    {
      
      question:"--> The name of the phoenix which was\nAlbus Dumbledore\’s animal companion\nand defender was Fawkes\n",
    
      answer:true
    },
  
    {
      question:"--> Sirius Black was usually referred\nto as Wormtail or Scabbers.\n",
      
      answer:false
    },
  
    {
      question:"--> At the age of 11 harry potter\njoined Hogwarts.\n",
      
      answer:true
    },
  
    {
      question:"--> Mad eye was the who put Harry’s\nname in the Goblet of Fire.\n",
      
      answer:false
    }
  
  ]
  
  function level(ques,ans){
    newAns=readlineSync.keyInYN(chalk.bold.red.bgYellowBright(ques));
    
    if (newAns===ans) {
    // 'Y' key was pressed.
    console.log(chalk.red("\nYou are right!\n"));
    newScore++
    // Do something...
  } else {
    // Another key was pressed.
    console.log(chalk.blueBright("\nYou are wrong!\n"));
    // Do something...
  }
  }
  
  for(var i=0;i<5;i++){
  level(newQues[i].question,newQues[i].answer)
  }
  
  console.log(chalk.yellowBright("Your final score is "+ newScore));
  
  if(newScore===5){
    console.log(boxen(("You are a true Potterhead!"),{backgroundColor:"gray",borderstyle:"round",padding:1,borderColor:"yellow"}))
  }
  else{
    console.log(boxen(("You are alomost there!\n\nLet\'s wave that wand\nand try again!!"),{backgroundColor:"gray",borderstyle:"round",padding:1,borderColor:"yellow"}))
  }
  
  
  
  }
  
  