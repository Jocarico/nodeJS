import 'colors'
import 'inquirer' 

const preguntas = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you wish to do?',
        choices: ['opt1', 'opt2', 'opt3']
    }
]

const inquirerMenu = async() => {

    console.clear();
    console.log('======================='.green);
    console.log(' Seleccione una opción'.green);
    console.log('=======================\n'.green);

    const opt = await inquirer.prompt(preguntas);

    return opt;
}



module.exports = {
    inquirerMenu
}