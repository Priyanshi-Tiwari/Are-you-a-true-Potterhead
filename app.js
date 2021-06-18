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