
const fs = require("fs");
const { boolean } = require("yargs");

let listadoPorHacer = [];

const guardarDB = ()=>{
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`./db/data.json`,data,(err)=>{
        if (err) throw "FALLO AL CREAR ARCHIVO: " + err;
    });
}

const cargarDB = ()=>{

    try {

        listadoPorHacer = require("../db/data.json");
        
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion)=>{

    cargarDB();
   
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const getListado = (completado)=>{
    
    if(completado.toLowerCase() === "true"){

     cargarDB();

     let listadoFiltrado = listadoPorHacer.filter(tarea =>  tarea.completado === true );
     
     return listadoFiltrado

    } else if (completado.toLowerCase() === "false"){

        cargarDB();
   
        let listadoFiltrado = listadoPorHacer.filter(tarea =>  tarea.completado === false );

        return listadoFiltrado
  
     
    } else {
        cargarDB();
        return listadoPorHacer;
    }

}

const actualizar = (descripcion, completado = true)=>{
    
    if(completado.toLowerCase === "true"){
        completado = true;
    } else if(completado.toLowerCase === "false"){
        completado = false;
    }

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB()
        return true;
    } else {
        console.log("NO SE ENCONTRO ESA TAREA");
        return false;
    }
}

const borrar = (descripcion)=>{
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index,1);
        guardarDB()
        return true;
    } else {
        
        console.log("NO SE ENCONTRO ESA TAREA");
        return false;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}