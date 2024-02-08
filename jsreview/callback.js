//Un callback es una function que se va a ejecutar despues en cierto punot del codigo

// setTimeout(() => {
//     console.log('Hola mundo');
// }, 1000);

const getUsuarioByID = ( id, callback ) => {

    const usuario = {
        // id: id
        id,
        nombre: 'John'
    }

    setTimeout( ()=>{
        callback(usuario)
    },1500)
}

getUsuarioByID(10, ( usuario ) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase())
})