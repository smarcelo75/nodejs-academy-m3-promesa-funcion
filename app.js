const argv = require('yargs')
    .option('nombre', {
        alias: 'n',
        demandOption: true,
        description: 'Ingrese su nombre'
    })
    .help()
    .argv

const mostrarMensaje = (mensaje) => {
    console.log(`Mensaje para ${argv.nombre}: ${mensaje}`);
}

const contratarJugador = new Promise((resolve, reject) => {
    const contratado = true;
    if (contratado) {
        resolve('Jugador contratado');
    } else {
        reject('No se contrato al jugador');
    }
});

contratarJugador
    .then(mensaje => mostrarMensaje(mensaje))
    .catch(error => console.log(error))