const { Console } = require("console");
const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

start();

async function start() {
  const welcomeMessage = `You awake with a sharp pain in the front of your head. Still slightly inebriated from the New Years party last night. \nYou look around to find yourself in a dungeon that is not your own. \nIn the middle of the room you see a piece of paper and pen labeled CONTACT TRACING, please fill out your name to continue: `;
  let answer = await ask(welcomeMessage);
  console.log( `You write ${answer} at the bottom of the page, barely legible. ` + "\nLooks like 2020 isn't over yet, YOU MUST ESCAPE! You look around and see a single door in the room labelled SOUTH, how convenient. \nPlease write out your actions in the [ACTIONS] [DIRECTIONS] format. Type help for a word list. " );

  // console.log("Now write your code to make this work!"");
  // process.exit();
}
let currentRoom = "start";
let commands = [
  "pick up",
  "inventory",
  "use",
  "look",
  "look around",
  "open",
  "attack",
  "examine",
  "inspect",
  "exit",
  "go",
  "talk",
  "run",
  "catch",
];
let directions = {
  north: ["south", "east", "west", "north"],
  east: ["south", "east", "west", "north"],
  south: ["south", "east", "west", "north"],
  west: ["south", "east", "west", "north"],
};
let inventory = ["key", "calendar", "torch", "rope", "tp"];
//Changing Room Function
function changeRoom(nextRoom) {
  if (directions[currentRoom].includes(nextRoom)) {
    currentRoom = nextRoom;
  } else {
    Console.log(
      `BONK!! You ran into a wall`
    );
  } // Trying to allow room transferring
}
//Function to show the commands
function showCommands() {
  if(command === "help" || command === '/help' || command === "h"){
  console.log(`Here are your commands: ${commands}`)
  }
}

function showInv(){
  if(bag === 'i' || bag == 'inventory' || bag === 'inv'){
console.log( `Inventory ${inventory}`)
  }
}

