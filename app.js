const argv = require("./config/yargs").argv;
const colors = require("colors");
const porHacer = require("./por hacer/por-hacer");

let comando = argv._[0];

switch ( comando) {
    case "crear": 
    let tarea = porHacer.crear(argv.d);
    console.log(tarea); 
    break;
    case "listar": 

    let listado = porHacer.getListado(argv.c);

    if ( listado.length >= 1 ) {
        for (const tarea of listado) {
            console.log("=====Por-Hacer=====".green);
            console.log("Tarea: "+ tarea.descripcion)
            console.log("Estado: "+ tarea.completado)
            console.log("===================".green);
        }
    } else {
       console.log("No hay datos.".red);
    }

    break;
    case "actualizar": console.log("Tarea actualizada")
    
    let actualizado = porHacer.actualizar(argv.descripcion,argv.c); 
    console.log( actualizado );
    break;

    case "borrar": console.log("Tarea Borrada");

    let borrar = porHacer.borrar(argv.descripcion); 
    console.log( borrar );
    break;

    default: console.log("Ningun comando es valido");
    break;
}