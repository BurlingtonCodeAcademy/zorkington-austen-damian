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
  let rooms = new
  
  class Rooms{
    constructor(room, direction, description){
        this.room = room;
        this.direction = direction;
        this.description = description;
    }
  }
  dir = await ask("What direction do you go?")
  // if(dir === "south" || dir === "s" || dir === "go south"){
    function changeTo(nextRoom)
      if(directions[rooms].includes(nextRoom)){
          this.room = nextRoom
          console.log(this.description)
      }  else {
          console.log(`BONK!! You hit a wall`);
  }


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
  
destinations = {
  //starting room
  "start": {
      "description": "This is the room you woke up in! it is dark and smells like mildew. To advance you must go south" ,
      "directions" :{
          "south": "south"
          
          
      }
  },
  //south1
  "Hall Room": {
      "description": "You enter a long dark hallway. Although the hallway is dark you are able to make out 3 doors. One to the south, east, west as well as the door behind you. \n Which door do you decide to travel through?",
      "directions": {
          "north": "start",
          "south": "south2",
          "east": "east0",
          "west" : "west0"
      }
  },
  //east0
  "Key Room": {
      "description": "You enter a small broom closet. Instead of a broom, there's a key glistening on the floor. Wow, isn't this just a convenient plot device. The only way out is back the way you came.",
      "directions": {
          "west": "south1"
      }
  },
  //west0
  "Chest Room": {                                        
      "description": "You enter a dimly lit room. A chest is visible in the middle of the room labelled 'Do not open until 2021' on top. The only way out is back the way you came.",
      "directions": {
          "east": "south1"
      }
  },
  //south2
  "Empty Hallway": {
      "description": "You venture further down a empty hallway for 15 miles, give or take a few. Luckily for you you can just type south or north to go to the next room instantly. Must be nice. ",
      "directions": {
          "north": "south1",
          "south": "south3"
      }
  },
  //south 3
  "Final Room": {
      "description": "After the long and arduous journey you near the exit. You know, I just realized we don't need a scruffy Robin Williams Jumanji reference if the puzzle is the key and the chest for the calendar, or maybe another key for a south 2 door. Just type in south and finish the game already good lord.",
      "directions": {
          "north": "south2",
          " south" : "exit",
       

      }
  },
  //exit room
  "exit room": {
      "description": "At last your really short journey has come to an end. You've now entered 2021 much like you left 2020, hopeless and grim. Anyway I have to get going, good luck!",
      "directions": {
          "none": "none"
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