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
  let name = await ask(welcomeMessage);
  answer = await ask( `You write ${name} at the bottom of the page, barely legible. ` + "\nLooks like 2020 isn't over yet, YOU MUST ESCAPE! , how convenient. \nPlease write out your actions in the [ACTIONS] [DIRECTIONS] format. Type help for a word list. " );
  if(answer === "help" || answer === '/help' || answer === "h"){
    console.log(`Here are your commands: ${commands}`)
    }
    beginReply = await ask(`${name}, are you ready to begin your escape? `)
    if( beginReply ===  "yes"|| beginReply === "y"){
    console.log( " You look around and see a single door in the room labelled SOUTH")
    } else if(beginReply !== ["no" , "n"]) {
    console.log(" You decide you're better off here and go to sleep!")
    process.exit()
    } else 
  console.log("That's not an answer!")
  
  class Rooms{
    constructor(room, direction, description){
        this.room = room;
        this.direction = direction;
        this.description = description;
    }
  }
  dir = await ask("What direction do you go?")
  if(dir === "south" || dir === "s" || dir === "go south"){
    changeTo(nextRoom)
      if(this.direction.includes(nextRoom)){
          this.room = nextRoom
          console.log(this.description)
      }  else {
          console.log(`BONK!! You hit a wall`);
  }
}

  
  // console.log("Now write your code to make this work!"");
  // process.exit();
}


let currentRoom = "start";
let commands = [
  " pick up",
  " inventory (i)",
  " use",
  " open",
  " attack",
  " inspect",
  " exit",
  " go (g)",
  " talk",
  " run",
  " catch",
  " help (h)",
  "north",
  "east",
  "south",
  "west"
];
  
let rooms = {
  "start": {
      "description": "This is the room you woke up in! it is dark and smells like mildew. To advance you must go south" ,
      "directions" :{
          "south": "south"
          
          
      }
  },
  "Hallway": {
      "description": "You enter a long dark hallway. All though the hallway is dark you are able to make out 3 doors. One to the south, east and west. \n Which door do you decide to travel through?",
      "directions": {
          "north": "start",
          "south": "room name",
          "east": "room name",
          "west" : "west"
      }
  },
  "room title status": {
      "description": "room description",
      "directions": {
          "south": "room name"
      }
  },
  "room title status": {
      "description": "room description",
      "directions": {
          "west": "room name"
      }
  },
  "room title status": {
      "description": "room description",
      "directions": {
          "east": "room name",
          "west": "room name"
      }
  },
  "room title status": {
      "description": "room description",
      "directions": {
          "east": "room name"
      }
  },
  "room title status": {
      "description": "room description",
      "directions": {
          "east": "room name"
      }
  }
}
let directions = {
  north: ["south", "east", "west", "north"],
  east: ["south", "east", "west", "north"],
  south: ["south", "east", "west", "north"],
  west: ["south", "east", "west", "north"],
};
let inventory = ["key", "calendar", "torch", "rope", "tp"];
//Changing Room Function
function changeRoom(nextRoom) {
  if (rooms[currentRoom].includes(nextRoom)) {
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