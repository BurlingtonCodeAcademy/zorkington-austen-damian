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
}