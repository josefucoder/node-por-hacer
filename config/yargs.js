
const descripcion = {
    demand:true,
    alias: "d",
    desc: "Descripcion de la tarea"
};

const completado = {
    demand: true,
    alias: "c",
    default: true,
    desc: "Marca como completado o pendiente la tarea"
};

const completado2 = {
    demand: false,
    alias: "c",
    default: "",
    desc: "Marca como completado o pendiente la tarea"
};

const argv = require("yargs")
     .command("crear","Crea una nueva Tarea",{ descripcion })
     .command("listar","Lista las Tareas por Hacer",{ completado2 })
     .command("actualizar","Actualiza una Tarea especifica",{ descripcion, completado })
     .command("borrar","Borra una Tarea especifica",{ descripcion })
     .help()
     .argv;

     module.exports = {
        argv
     }