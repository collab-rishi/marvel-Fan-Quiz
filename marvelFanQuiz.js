var readlineSync = require("readline-sync");
var userName = readlineSync.question("What do your friends call you by ? ")
console.log("----------")
console.log("Welcome to the Party! " + userName + "... Let's Begin!")
var score = 0;
console.log("----------")
function fun(question,answer){
  var userAns = readlineSync.question(question);
  if (userAns==answer){
    console.log("----------")
    console.log("Dayumm! That's Correct!");
    score+=10;
  }else{
    console.log("----------")
    console.log("Oops! Looks like that's not correct!");
  }
  console.log("Your Score: "+score);
  
}
if (readlineSync.keyInYN("Shall we Begin ?")) {
  console.log("----------")
  
  
}

var questions = [{
  question:"1. Which of these characters is NOT an original Avenger? (a. Captain America , b. Thor , c. Scarlett Witch , d. Black Widow ) > ",
  answer:"c",
},{
  question:"2. What's Captain America’s shield made of? (a. Admantium , b.Vibranium , c. Promethium , d. Carbonadium ) > ",
  answer:"b",
  },{
  question:"3. What's Black Widow's actual name? (a. Natasha Romanoff , b. Natalie Rushman , c. Wanda Maximoff , d. Yelena Belova ) > ",
  answer:"a"
},{
  question:"4. How many Infinity Stones are there? (a. five, b. six , c. seven, d. eight ) > ",
  answer:"b",
},{
  question:"5. What was Ant's Man actual name? (a. Steve Rogers , b. Bruce Banners , c. Bucky Barnes , d. Scott Lang ) > ",
  answer:"d",
},{
  question:"6. Complete the lyric: It's been ______ all along! (a. Wanda, b.Monica , c. Natasha , d. Agatha ) > ",
  answer:"d",
},{
  question:"7. Who does Captain America give his shield to in Avengers: Endgame? (a. Sam Wilson , b. Bucky Barnes , Tony Stark , d. Bruce Banner) > ",
  answer:"a",
},{
  question:"8. And finally, what's the name of Thor’s hammer?(a. Vanir , b. Mjolnir , c. Aesir , d. Norn ) > ",
  answer:"b",
},]

for(var i=0;i < questions.length;i++){
  var qs = questions[i];
  fun(qs.question,qs.answer);
  console.log("----------")
  if (score==40) {
  console.log("Great Going!, You move to LEVEL-2");
    console.log("----------")
}
if (score==80) {
  console.log("You ROCK!, You move to LEVEL-3");
  console.log("----------")
}

}



