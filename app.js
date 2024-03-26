const prompt = require("prompt-sync")()
const username = prompt("What is your name? ")
// begin game
console.log(`Welcome, ${username}! You are in the year 3035 and you are in a spaceship on a reconnaissance mission after reveiving a distress signal You have two choices, what will you do?`);
let signal = prompt(`What is yor response? answer or ignore `);
//While loop to ensure user types either "answer" or "ignore", if not one of these are inputs then machine asks user for proper input
while (signal !== "answer" && signal !== "ignore"){
    signal = prompt(`Please type either "answer" or "ignore" `);
}
if (signal === "answer") {
    console.log(`Awesome! Now you’re on your way to the distressed space crew and land on the spaceship. You dock into the ship and open the hatch, only to find you must choose between two passages - up or down`);
    let direction = prompt(`Where will you go? up or down? `);
    while (direction !== "up" && direction !== "down"){
        direction = prompt(`Please type either "up" or "down" `);
    }
    if (direction === `up`) {
        console.log(`Great! You reach the top of the ship and hear a loud “screech!” You turn the lights on and see an alien looking at you funny!`);
        let decision1 = prompt(`Do you want to face this ferocious creature or run for your life? fight or flee? `);
        while (decision1 !== "fight" && decision1 !== "flee"){
            decision1 = prompt(`Please type either "fight" or "flee" `);
        }
        if(decision1 === "flee") {
            console.log(`Oh no! the creature caught up to you and you died. Game Over...`);
        } else {
            console.log(`Good for you for deciding to fight! You used the unbeatable blaster5000 and vanquished the alien life force. The threat was elimniated and you saved the crew. You Win!`);
        }
    } else {
        console.log(`You chose to go down. You follow a corridor until you find the crew. However, you can only take back people under 40.`);
        const crew = [
            {
                name: "John",
                profession: "navigator",
                age: 40
            },
            {
                name: "Jane",
                profession: "cook",
                age: 30
            },
            {
                name: "Mike",
                profession: "navigator",
                age: 20
            },
            {
                name: "Alice",
                profession: "engineer",
                age: 24
            }
        ]
        //for loop with if...else statements to generate different messages for each crew member and their "rescue" status based on the conditions we stated
        for(let i = 0; i < crew.length; i++){
            if (crew[i].age < 40 &&  (crew[i].profession === "navigator" || crew[i].profession === "engineer")) {
                console.log(`You saved ${crew[i].name}`)
            } else if (crew[i].profession === "cook"){
                console.log(`${crew[i].name} is of the wrong profession`)
            } else {
                console.log(`${crew[i].name} is too old and had to stay behind`)
            }
        }
    }
} else {
    console.log(`Space Warrior ${username}, you are not a true galactic hero! Game Over...`);
}
