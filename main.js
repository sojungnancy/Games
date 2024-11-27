//random number allocation
//user enter number --> click go button
//if user enter correct random number, "correct"
//random number < user number ->  DOWN!
//random number > user number ->  UP!
//If click Reset button then, Reset game
//If 5 chances finished, End game
//if user enter out of range 1 ~ 100, let them know - chances not reduced
//user enter already entered number, let them know - chances not reduced

let computerNum = 0;

function pickRandomNum() {
  computerNum = Math.floor(
    Math.random() * 100
  ); /* 0 ~ 1 random number return */
  /*to get rid of decimal number - Math.floor() */
  console.log('Correct !', computerNum);
}
pickRandomNum();
