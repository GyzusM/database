const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/users');
require('dotenv').config();

class Server {
    constructor(){
        this.app = express(); //Se instansncia Express 
        this.port = process.env.PORT; //Definimos el puerto

        //Paths http://localhost:3000/api
        this.basePath = '/api/v1';  //Ruta Base

        this.usersPath = `${this.basePath}/users`; //Path para la tabla Users

        this.middlewares(); //Invocación de los middlewares

        this.routes();
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json()); //Para poder interpretar texto en formato JSON
    }

    routes() {
        this.app.use(this.usersPath, usersRouter) //Endpoint de Users
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server listening on port " +this.port)
        })
    }
}

module.exports = Server;