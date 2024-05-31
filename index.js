

const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2006;




const { getJuegos, getJuegosById } = require("./controllers/juegos.controllers");

app.use(cors());

app.get("/", getJuegos )

app.get("/:id" , getJuegosById)







app.listen(puerto,()=> {  
     
    console.log(`Conectado ok en el puerto: ${puerto}`);
});