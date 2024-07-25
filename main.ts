#! /usr/bin/env node

import inquirer from "inquirer";
 console.log(`<<<<<<<<<<<<<<<<<<<<<<<<<< WELCOME! TO ADVENTURE GAME ☠`);
 
// make class for player
 class Player{
    name:string;
    live :number=100
    constructor(userInput:string){
this.name=userInput
    }
    liveIncrease(){
        this.live += 25
    }
    liveDecrease(){
        this.live -=25
    }
 };

 //make class for opponent

 class Opponent{
    name:string;
    live:number=100
    constructor(opponetname:string){
this.name=opponetname
    }
    liveDecrease(){
        this.live -=25 
    }
 
 }
//use inquirer for getting user info
 let answerInput= await inquirer.prompt([{
    name:"userInput",
    message:"Enter your name.",
    type:"input"
 },{
    // choices for opponent
    name:"opponetname",
    type:"list",
    message:"Select the Opponent.",
    choices:["Skeleton","Alien","Zombie"]
 }

]);
let {userInput,opponetname}=answerInput;
console.log(`${userInput} VS ${opponetname}`);
//put info in our class
let myPlayer = new Player(userInput);

let opponentPlayer= new Opponent(opponetname);

// start the game!

while(true){
    let startMatch= await inquirer.prompt([{

        // get user info
        name:"options",
message:"Select your Options!",
type:"list",
choices:["Attack","IncreasePoints","Run for life"]
    }]);
    let {options}=startMatch
if (options==="Attack"){
attack();
}
else if (options==="IncreasePoints"){
increaseLive()
}
else if (options==="Run for life"){
RunForLive()
}
else{
    console.log(`Invalid option!`);
    
}


//code for  attack 
function attack(){

// generate random number from 0 to 1;

    let randomNum= Math.floor(Math.random() *2)
//console.log(randomNum);
// when random number is equal  to 0, decrease the fuel of player
if (randomNum===0){
myPlayer.liveDecrease();
console.log(`${myPlayer.name}'s live is  ${myPlayer.live}%`);
console.log(`${opponentPlayer.name} live is ${opponentPlayer.live}%`);

if (myPlayer.live===0){ 
console.log(`${myPlayer.name} You lose! . Better luck for next time.`);
process.exit()
}
};
//if num is greater than 0
if(randomNum===1){
opponentPlayer.liveDecrease()
console.log(`${myPlayer.name}'s live is ${myPlayer.live}%`);
console.log(`${opponentPlayer.name} live is ${opponentPlayer.live}%`);


if(opponentPlayer.live===0){
console.log(`${myPlayer.name} You won the battle!`);
process.exit();

}
}
}

//code for increase live
function increaseLive(){

    myPlayer.liveIncrease;
    console.log(`${myPlayer.name}'s live increases ${myPlayer.live}%`);
    
}

// code for run for live
function RunForLive(){
    console.log(`${myPlayer.name} lost! Better luck for next time.`);
    process.exit()
}

}


