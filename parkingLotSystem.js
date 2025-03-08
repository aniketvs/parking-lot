const ParkingLot=require('./parkingLot');
class ParkingLotSystem extends ParkingLot {

    checkCommand(input) {
        const command = input.split(" ");
        switch (command[0]) {
            case "create_parking_lot":
                this.createParkingLot(command);
                break;
            case "display":
                this.display(command);
                break;
            case "park_vehicle":
                this.parkVehicle(command);
                break;
            case "unpark_vehicle":
                this.unparkVehicle(command);
                break;
            case "exit":
                this.rl.close();
                break;
            default:
                console.log("command not found");
                this.takeInput();
                break;
        }

    }
    takeInput() {
        this.rl.question('Enter you queries - > ', (input) => {
            this.checkCommand(input);
        });
    }

    start() {
        this.takeInput();
    }

}

module.exports=ParkingLotSystem;