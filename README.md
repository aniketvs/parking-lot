# 🚗 Parking Lot System

A command-line based parking lot management system built in JavaScript.

## 📂 Project Structure

- `app.js` - Initializes and starts the parking lot system.
- `parkingLotSystem.js` - Manages user commands and system interactions.
- `parkingLot.js` - Handles core parking lot operations.

## 🛠 Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd parking-lot-system
   ```

## 🚀 Usage

Run the application using:
```sh
node app.js
```

### 🔹 Commands

- `create_parking_lot <lot_name> <floors> <slots_per_floor>` - Creates a parking lot with given specifications.
- `park_vehicle <vehicle_type> <registration_no> <color>` - Parks a vehicle in an available slot.
- `unpark_vehicle <ticket_id>` - Removes a parked vehicle.
- `display free_count <vehicle_type>` - Shows free slots count for the given vehicle type.
- `display free_slots <vehicle_type>` - Displays free slot numbers.
- `display occupied_slots <vehicle_type>` - Displays occupied slot numbers.
- `exit` - Terminates the system.

## 🏗 Contributing
Feel free to contribute by opening an issue or submitting a pull request.

## 📜 License
This project is open-source and available for modification as per your needs.

## 🌟 Show Your Support
If you like this project, give it a ⭐ on GitHub!


