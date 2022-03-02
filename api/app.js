// Create server Express
const express  = require('express');

const { sequelize } = require('./util/database');
const { todosRouter } = require('./routes/todos.routes');


// Init express app
const app = express();

// Enable JSON incoming data
app.use(express.json());

// Define endpoint for ToDos
app.use('/api/v1/todos', todosRouter);

sequelize
	.authenticate()
	.then(() => console.log('Database authenticated'))
	.catch(err => console.log(err));

app.listen(4000, () => {
    console.log('Express app running');
})



// Establish a connection with a Database (Postgress)

// Create ToDo model
// Use the model to interact with the controller functions

// Must structure project with routes, controllers and models folders (utils)

// IMPORTANT: Prettier format

// Install cors library (npm i cors)
// app.use(cors())
