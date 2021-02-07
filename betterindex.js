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


// list of ideally useable words
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
  
//Beginning
start();

async function start() {
  
  const welcomeMessage = `You awake with a sharp pain in the front of your head. Still slightly inebriated from the New Years party last night. \nYou look around to find yourself in a dungeon that is not your own. \nIn the middle of the room you see a piece of paper and pen labeled CONTACT TRACING, please fill out your name to continue: `;
  let name = await ask(welcomeMessage);
  answer = await ask( `You write ${name} at the bottom of the page, barely legible. ` + "\nLooks like 2020 isn't over yet, YOU MUST ESCAPE! , how convenient. \nPlease write out your actions in the [ACTIONS] [DIRECTIONS] format. Type help for a word list. " );

  //Toggles the list of usable words
  if(answer === "help" || answer === '/help' || answer === "h"){
    console.log(`Here are your commands: ${commands}`)
    }
    beginReply = await ask(`${name}, are you ready to begin your escape? `)

    //asks you to start the quest
    if( beginReply ===  "yes"|| beginReply === "y"){
    console.log( "You look around and see a single door in the room labelled SOUTH ")

    //fun code to call it quits
    }if(beginReply === ["no" , "n"]) {
    console.log("You decide you're better off here and go to sleep! ")
    process.exit()
    } else if (beginReply !== "yes" || beginReply !== "y" || beginReply !== "no" || beginReply !== "n")
  console.log("That's not an answer! Let's go!")

  //an array containing each room. Unknown implementation
  let room = ["south0", "south1", "south2", "south3", "east0", "west0",]

//Catalyst for moving on in the quest. Doesn't currently do anything as we don't know how to implement it, but the idea is there.
  dir = await ask("What direction do you go? ")

  //Class to get each room tied together.
  class rooms{
    constructor(room, direction, description){
        this.room = room;
        this.direction = direction;
        this.description = description;
    }
    changeTo(nextRoom){
      if(this.direction[rooms].includes(nextRoom)){
          this.room = nextRoom
          console.log(this.description)
      }  else {
          console.log(`BONK!! You hit a wall`);
  }
}
//is this destinations bit on line 86 even necessary? I mean something's gotta go here, right?
//Each room, description and direction is tied to the class constructor. In my head, it SHOULD make it so we can link each movement from one room to another.
destinations = {
  //starting room
  room: "south0",
      description: "This is the room you woke up in! it is dark and smells like mildew. To advance you must go south",
      direction :{
          "south": "south"
          
          
      }
  ,
  //south1
  room: "south1",
      description: "You enter a long dark hallway. Although the hallway is dark you are able to make out 3 doors. One to the south, east, west as well as the door behind you. \n Which door do you decide to travel through?",
      direction: {
          "north": "start",
          "south": "south2",
          "east": "east0",
          "west" : "west0"
      }
  ,
  //east0
  room: "east0",
      description: "You enter a small broom closet. Instead of a broom, there's a key glistening on the floor. Wow, isn't this just a convenient plot device. The only way out is back the way you came.",
      direction: {
          "west": "south1"
      }
  ,
  //west0
  room: "west0",                                   
      description: "You enter a dimly lit room. A chest is visible in the middle of the room labelled 'Do not open until 2021' on top. The only way out is back the way you came.",
      direction: {
          "east": "south1"
      }
  ,
  //south2
  room: "south2",
      description: "You venture further down a empty hallway for 15 miles, give or take a few. Luckily for you you can just type south or north to go to the next room instantly. Must be nice. ",
      direction: {
          "north": "south1",
          "south": "south3"
      }
  ,
  //south 3
  room: "south 3",
      description: "After the long and arduous journey you near the exit. You know, I just realized we don't need a scruffy Robin Williams Jumanji reference if the puzzle is the key and the chest for the calendar, or maybe another key for a south 2 door. Just type in south and finish the game already good lord.",
      direction: {
          "north": "south2",
          " south" : "exit",
       

      }
  ,
  //exit room
  room: "exit",
      "description": "At last your really short journey has come to an end. You've now entered 2021 much like you left 2020, hopeless and grim. Anyway I have to get going, good luck!",
      direction: {
          "none": "none"
      }
  }
}

//Is this necessary with the class constructor? 
let direction = {
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
  }
}
//Inventory. May revise the need for one.
function showInv(){
  if(bag === 'i' || bag == 'inventory' || bag === 'inv'){
console.log( `Inventory ${inventory}`)
  }
}
}