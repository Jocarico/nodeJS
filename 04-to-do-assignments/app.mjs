import 'inquirerMenu';
// const { pausa } =  require('./helpers/mensajes')

console.clear();


const main = async() => {

    console.log("Hola mundo");
    
    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log( { opt })
        
        if(opt !== '0') await pausa();

    } while (opt !== '0');
}
//Llama a la función
main();
