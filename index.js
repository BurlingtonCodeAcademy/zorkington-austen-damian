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
  const welcomeMessage = `You awake with a sharp pain in the front of your head. Still slightly inebriated from the New Years party last night. \nYou look around to find yourself in a dungeon that is not your own. Figure it's about time to head out. \nIn the middle of the room you see a piece of paper and pen labelled CONTRACT TRACING. Please fill out your name to continue: `;
  let name = await ask(welcomeMessage);
  console.log(
    `You write ${name} at the bottom of the page, barely legible. \nLooks like 2020 isn't over yet. `
  );

  //Asks you to begin the quest. Details are below
  beginReply = await ask(`${name}, are you ready to begin your escape? `);
  
  
// Class constructor for the rooms.
  class Rooms {
    constructor(room, description, direction,) {
      this.room = room;
      this.direction = direction;
      this.description = description;
    }
    //Function to move between rooms
    changeTo(direction) {
      if (this.direction.includes(direction)) {
        currentRoom = lookUpTable[direction];
      } else {
        console.log(`BONK!! You hit a wall. Or you didn't go into the case sensitive door.`);
      }
    }
  }
  //Section that describes each room in the class. The "room" is the overall name of the room and the identifier needed to traverse between them. The description tells you what and how to move about each room, and the direction is used to go between them.
  let hallRoom = new Rooms(
    "Hall Room",
    "You enter a large square hall. Although the room is dark you are able to make out three doors. One labelled closet, one labelled safe room, and a room down another long hall. The number '2' is written on a wall pointing towards the closet door. \nWhich door do you decide to travel through? \n[Start] [Broom Closet] [Safe Room] [Long Room]",
    ["Start", "Broom Closet", "Safe Room", "Long Room",]
  );
  //Starting room. Only one exit.
  let startRoom = new Rooms(
    "Start",
    "This is the room you woke up in! it is dark and smells like mildew. The number '1' is labelled on the wall. This may be useful later. You can go to \n[Hall Room]",
    ["Hall Room"],
  );
  //Auxillary room. Has a clue to the puzzle like every other room
  let broomCloset = new Rooms(
      "Broom Closet",
      "You enter a small broom closet. Instead of a broom or anything for that matter, the number '3' in huge font on the floor. Wow, isn't this just an obvious puzzle staring you in the face. The only way out is back the way you came. \n[Hall Room]",
      ["Hall Room"]
  );
  //Room with a safe. oooooooo
  let safeRoom = new Rooms(
      "Safe Room",
      "You enter a dimly lit room. An open safe is visible in the middle of the room labelled with the number '4'. The only way out is back the way you came. \n[Hall Room]",
      ["Hall Room"],
  )
  //Long room needed to get to the end
  let longRoom = new Rooms(
      "Long Room",
      "You venture further down a empty hallway for fifteen miles, give or take a few. Halfway down you see the number '5' painted on the ceiling. \nDespite the distance travelled, you can just type [Hall Room] or [Final Room] to go to the next room instantly. Must be nice.",
      ["Hall Room", "Final Room"],
  )
  //Room that requires solving the puzzle which is just typing 12345 into the terminal
  let finalRoom = new Rooms(
      "Final Room",
      "After the long and arduous journey you near the exit. However you must type in the five digit password at the end of the door. No cheating, unless you watched Spaceballs and know the password already. Otherwise, return to the [Long Room]",
      ["12345", "Long Room"]
  )
  //Room that exists to tell you that you won!
  let endRoom = new Rooms(
      "12345",
      "At last your really short journey has come to an end. You've now entered 2021 much like you left 2020, hopeless and grim. I know it may seem daunting, but good luck! You can't leave. Unless you want to go back to the dungeon, weirdo.",
      ["Final Room"]
  )
  
  
  //Table to show each room
  lookUpTable = {
      Start: startRoom,
      'Hall Room' : hallRoom,
      'Broom Closet': broomCloset,
      'Safe Room': safeRoom,
      'Long Room': longRoom,
      'Final Room': finalRoom,
      '12345': endRoom
  }

  
//Function that starts the game up. I believe it's needed here for scope reasons. But as the saying goes, "If it ain't broke..."
async function play() {
    currentRoom = startRoom;
    if (beginReply === "yes" || beginReply === "y") {
            console.log("Great, let's go! ");
          } else if (beginReply === "no" || beginReply === "n") {
            console.log(
              "You go back to sleep, where at least you're safe inside your mind. "
            );
            process.exit();
          } else {
            console.log(`What's that? "I'm so stoked?" Great, let's go!`);
          }
    let response = await ask("You must type your responses in CASE SENSITIVE manner. Press Enter to continue ");
    while (response !== "no" || response !== "n") {
      console.log(currentRoom.description);
      response = await ask(">");
      currentRoom.changeTo(response);
    }
  }
  play();
}