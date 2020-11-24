  
const obtenerPelicula = require("./library");

function funcionCallback(peliculaExtraida){
    console.log(peliculaExtraida);
}

obtenerPelicula(funcionCallback);