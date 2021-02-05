class Rooms{
    constructor(room, direction, description){
        this.room = room;
        this.direction = direction;
        this.description = description;
    }
    changeTo(nextRoom){
        if(this.direction.includes(nextRoom)){
            this.room = nextRoom
            console.log(this.description)
        }  else {
            Console.log(`BONK!! You hit a wall`);
    }
}

// let rooms = {
//   "start": {
//       "description": "This is the room you woke up in! it is dark and smells like mildew. To advance you must go south" ,
//       "directions" :{
//           "south": south,
//           "west": west
          
//       }
//   },
//   "Hallway": {
//       "description": "You enter a long dark hallway. All though the hallway is dark you are able to make out 3 doors. One to the south, east and west. \n Which door do you decide to travel through?",
//       "directions": {
//           "north": "start",
//           "south": "room name",
//           "east": "room name",
//           "west" : 
//       }
//   },
//   "room title status": {
//       "description": "room description",
//       "directions": {
//           "south": "room name"
//       }
//   },
//   "room title status": {
//       "description": "room description",
//       "directions": {
//           "west": "room name"
//       }
//   },
//   "room title status": {
//       "description": "room description",
//       "directions": {
//           "east": "room name",
//           "west": "room name"
//       }
//   },
//   "room title status": {
//       "description": "room description",
//       "directions": {
//           "east": "room name"
//       }
//   }
//   "room title status": {
//       "description": "room description",
//       "directions": {
//           "east": "room name"
//       }
//   }
// }