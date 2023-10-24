# MERN-Tasks Project Readme

## Description
The **MERN-Tasks** project is a web application that implements a CRUD (Create, Read, Update, Delete) system with authentication. It uses the MERN technology stack, which consists of MongoDB, Express, React, and Node.js, to create a task management web application.

## Installation
To run this project in your local environment, follow these steps:

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/Anyel-ec/CRUD-NodeJS-mongoBD
   ```

2. Navigate to the project directory:

   ```bash
   cd CRUD-NodeJS-mongoBD 
   ```

3. Install server dependencies:

   ```bash
   npm install 
   ```

4. Navigate to the client directory:

   ```bash
   cd client
   ```

5. Install client dependencies:

   ```bash
   npm install
   ```

6. Return to the main project directory:

   ```bash
   cd ..
   ```

7. Start the development server:

   ```bash
   npm run dev
   ```

8. Open your web browser and go to `http://localhost:3000` to see the application in action.

## Usage
Once the project is up and running, you can:

- Create, read, update, and delete tasks.
- Authenticate within the application.
- Effectively manage your tasks.

## Project Structure
The project is organized into two main parts:

- **Server**: The server logic is implemented in Node.js using Express. Tasks are managed through API routes and stored in a MongoDB database.

- **Client**: The client is built with React and handles the user interface. Users can interact with tasks and authenticate through the user interface.

## Main Dependencies
This project uses various Node.js dependencies, including:

- `bcryptjs`: For password encryption.
- `cookie-parser`: For server-side cookie handling.
- `cors`: To enable cross-origin requests.
- `express`: As the web server framework.
- `jsonwebtoken`: For generating and verifying authentication tokens.
- `mongoose`: To interact with the MongoDB database.
- `morgan`: For HTTP request logging.
- `zod`: For data validation.

## Scripts
The project includes several scripts to streamline development and deployment:

- `npm run dev`: Starts the development server with automatic reloading using nodemon.
- `npm start`: Launches the server in a production environment.

## License
This project is under the ISC license.

## Author
The author of this project is not specified in the provided JSON file.

Enjoy using MERN-Tasks to efficiently manage your tasks! Feel free to customize and expand the project according to your needs.