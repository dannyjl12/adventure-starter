class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        // Picks up an item from a room into the player's inventory
        // Fill this in
        const item = this.currentRoom.getItemByName(itemName);
        this.items.push(item);
        }

    dropItem(itemName) {
        const item = this.getItemByName(itemName);
        this.currentRoom.items.push(item);
        this.items = this.items.filter((item) => (item = item.name !== itemName))
        // Fill this in
    }

    eatItem(itemName) {
        // Fill this in

    }

    getItemByName(name) {
        const playerItem = this.items.filter(item => name === item.name)[0];
        return playerItem;
    }
}

module.exports = {
  Player,
};
