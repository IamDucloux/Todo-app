
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}


const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente'
        }
    })
    .command('borrar', 'Borra la tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}

