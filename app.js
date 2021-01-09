'use strict';

//https://javascript.info/strict-mode  or 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode


//This program is written very naively - on purpose 
//There will be future excercises to improve the program design and structure


const prompt = require('prompt-sync')({sigint: true});

//Apple Banana Cherry Diamond
const reel1=['Apple','Banana','Cherry','Diamond','Cherry','Diamond','Apple','Apple','Cherry','Banana']
const reel2=['Apple','Diamond','Cherry','Banana','Banana','Cherry','Apple','Banana','Apple','Cherry']
const reel3=['Cherry','Banana','Cherry','Apple','Apple','Banana','Diamond','Apple','Cherry','Banana']

let money = 100

while (money) {

    console.log('You have £' + money )
    prompt('Press enter to spin the wheels')    
    
    money = money - 1  //Pay £1 to play

    let p1 = Math.floor(Math.random() * 10)
    let p2 = Math.floor(Math.random() * 10)
    let p3 = Math.floor(Math.random() * 10)
    
    console.log(reel1[p1] + ' ' + reel2[p2] + ' ' + reel3[p3])

    if (reel1[p1]==reel2[p2] && reel2[p2]==reel3[p3]){
        console.log ('You win :o)')
        if (reel1[p1]=='Apple'){
            money = money + 2
            console.log ('£2')
        }
        else if (reel1[p1]=='Banana'){
            money = money + 3
            console.log ('£3')
        }
        else if (reel1[p1]=='Cherry'){
            money = money + 5
            console.log ('£5')
        }       
        else if (reel1[p1]=='Diamond'){
            money = money + 20
            console.log ('£20')
        }  
    }
    else{
        console.log('You lose :o(')
    }
}   
console.log ("You are out of money - gambling is fools game") 