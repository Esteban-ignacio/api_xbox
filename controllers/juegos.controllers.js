

const { request, response } =require("express");
const { juegos } = require("../juegos");


const getJuegos = ( req, res )=> {
    return res.json({
        ok:true,
        statusCode:200,
        juegos
    });
}

const getJuegosById = ( req = request, res = response )=> {
    
    let id = (req.params.id);

    let juegoABuscar = "";

    juegoABuscar = juegos.find(( juego )=> {
        return juego.id === id;
    });

    if (juegoABuscar){
        return res.json({
            ok:true,
            statusCode:200,
            juegoABuscar
        });
    }else{
        return res.json({
            ok:true,
            statusCode:404,
            msg:"No hay juegos con ese id"
        });
    }

}

module.exports = {
    getJuegos,
    getJuegosById
}