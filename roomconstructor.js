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

Rooms = {
    "start": {
        "description": "This is the room you woke up in! it is dark and smells like mildew. To advance you must go south" ,
        "directions" :{
            "south": "south"
            
            
        }
    },
    "south1": {
        "description": "You enter a long dark hallway. Although the hallway is dark you are able to make out 3 doors. One to the south, east, west as well as the door behind you. \n Which door do you decide to travel through?",
        "directions": {
            "north": "start",
            "south": "south2",
            "east": "east0",
            "west" : "west0"
        }
    },
    "east0": {
        "description": "Key/ code room",
        "directions": {
            "west": "south1"
        }
    },
    "west0": {                                        
        "description": "chest room",
        "directions": {
            "east": "south1"
        }
    },
    "south2": {
        "description": "hallway",
        "directions": {
            "north": "south1",
            "south": "south3"
        }
    },
    "south3": {
        "description": "room description",
        "directions": {
            "north": "south2",
            " south" : "exit",
         

        }
    },
    "exit room": {
        "description": "CREDITS",
        "directions": {
            "none": "none"
        }
    }
}
}