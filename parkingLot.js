const readline = require('readline');
class  parkingLot{
       constructor() {
            this.carType = new Set(['CAR', 'BIKE', 'TRUCK']);
            this.parkingLotMap = new Map();
            this.parkingVehicleData = new Map();
            this.rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
        }
    createParkingLot(command) {
        let parkingLot = command[1];
        let floor = command[2];
        let slot = command[3];
        this.parkingLotMap.set('parkingLot', parkingLot);
        this.parkingLotMap.set('floor', floor);
        this.parkingLotMap.set('slot', slot);
        this.rl.question('Enter [vehicle type , number of slot] each floor Space Seprated ', (input) => {
            let vehicleType = input.split(" ");
            for (let i = 0; i < parseInt(floor); i++) {

                for (let k = 0; k < vehicleType.length; k += 2) {
                    let carType = vehicleType[k + 0];
                    let slot = parseInt(vehicleType[k + 1]);
                    for (let j = 0; j < slot; j++) {
                        this.parkingVehicleData.set(`${carType}_${i}${j}`, {});
                    }
                }

            }
            console.log(`Created parking lot with ${floor} floors and ${slot} slots per floor`);
            this.takeInput();
        });
    }

    freeCount(command) {
        let vehicleType = command[2];
        let arr = [];
        for (let [key, value] of this.parkingVehicleData) {
            if (Object.values(value).length == 0 && key.includes(vehicleType)) {
                let sp = parseInt(key.split('_')[1][0]);
                arr[sp] = arr[sp] ? arr[sp] + 1 : 1;
            }
        }
        for (let i = 0; i < arr.length; i++) {
            console.log(`No. of free slots for ${vehicleType} on Floor ${i}:${arr[i]}`);
        }

    }
    freeSlots(command) {
        let vehicleType = command[2];
        let arr = [];
        for (let [key, value] of this.parkingVehicleData) {
            if (Object.values(value).length == 0 && key.includes(vehicleType)) {

                let sp = key.split('_')[1];
                let f = parseInt(sp[0]);
                let s = parseInt(sp[1]);
                arr[f] = arr[f] ? [...arr[f], s] : [s];
            }
        }
        for (let i = 0; i < arr.length; i++) {
            console.log(`Free slots for ${vehicleType} on Floor ${i}:${arr[i]}`);
        }

    }
    occupiedSlots(command) {
        let vehicleType = command[2];
        let arr = [];
        for (let [key, value] of this.parkingVehicleData) {
            if (Object.values(value).length > 0 && key.includes(vehicleType)) {

                let sp = key.split('_')[1];
                let f = parseInt(sp[0]);
                let s = parseInt(sp[1]);
                arr[f] = arr[f] ? [...arr[f], s] : [s];
            }
        }
        for (let i = 0; i < arr.length; i++) {
            console.log(`Occupied slots for ${vehicleType} on Floor ${i}:${arr[i] ? arr[i] : ''}`);
        }

    }
    display(command) {

        switch (command[1]) {
            case "free_count":
                this.freeCount(command);
                break;
            case "free_slots":
                this.freeSlots(command);
                break;
            case "occupied_slots":
                this.occupiedSlots(command);
                break;
            default:
                console.log("command not found");
                break;
        }
        this.takeInput();
    }
    parkVehicle(command) {
        let vehicleType = command[1];
        let regNo = command[2];
        let color = command[3];
        let obj = { vehicleType, regNo, color };
        for (let [key, value] of this.parkingVehicleData) {
            if (key.includes(vehicleType) && Object.values(value).length == 0) {
                let sp = key.split('_')[1];
                let f = sp[0];
                let s = sp[1];
                let parkingLot = this.parkingLotMap.get('parkingLot');
                let ticket = `${parkingLot}_${f}_${s}`;
                obj.ticket = ticket;
                this.parkingVehicleData.set(key, obj);
                break;
            }
        }
        if (obj.ticket) {
            console.log(`Parked vehicle. Ticket ID: ${obj.ticket}`);
        } else {
            console.log("No slot available");
        }
        this.takeInput();
    }
    unparkVehicle(command) {
        let ticket = command[1];
        for (let [key, value] of this.parkingVehicleData) {
            if (Object.values(value).length > 0 && value.ticket == ticket) {
                this.parkingVehicleData.set(key, {});
                console.log(`Unparked vehicle with Registration Number: ${value.regNo} and Color: ${value.color}`);
                this.takeInput();
                return;
            }
        }
        console.log("Invalid ticket");
        this.takeInput();
    }
};
module.exports=parkingLot;