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
  const welcomeMessage = ` You awake with a sharp pain in the back of your head. Still slightly inebriated from the New Years party last night. You look around to find yourself in a dungeon that is not your own. Looks like 2020 isn't over yet, YOU MUST ESCAPE! You see a single door labeled SOUTH out of the corner of your eye, how convenient.   `;
  let answer = await ask(welcomeMessage);
  console.log(`Hello, ${answer} `);
  // console.log("Now write your code to make this work!");
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
let directions = ["north", "east", "south", "west"];
let inventory = ["key", "calendar", "torch", "rope", "tp"];
function startingRoom() {}
`182 Main St.
You are standing on Main Street between Church and South Winooski.
There is a door here. A keypad sits on the handle.
On the door is a handwritten sign, it reads: Whats your name?  `;
