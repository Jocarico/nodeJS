const empleados = [
    {
        id: 1,
        nombre: "Pedro"
    },
    {
        id: 2,
        nombre: "chone"
    },
    {
        id: 3,
        nombre: "Perad"
    }
]

const salarios = [
    {
        id: 1,
        salario: 2500
    },
    {
        id: 2,
        salario: 12489
    }
];

const getEmpleado = (id) => {
    
    return new Promise(( resolve, reject )=> {
        
        const empleado = empleados.find( (s) => s.id === id)?.nombre;
        //Condicional ternario
        ( empleado ) 
            ? resolve(empleado)
            :reject(`No existe empleado con id ${id}`)
        
    });
}

const getSalario = (id) => {
    
    return new Promise(( resolve, reject )=> {
        
        const salario = salarios.find( (s) => s.id === id)?.salario;
        //if simplificado
        ( salario ) 
            ? resolve(salario)
            :reject(`No existe salario con ese ${id}`)
        
    });
}

const id = 2 ;

// getEmpleado(id)
//     .then( empleado => console.log( empleado ))
//     .catch(err => console.log(err));

// getSalario(id)
//     .then( salario => console.log( salario ))
//     .catch(err => console.log(err));


// getEmpleado(id)
//     .then( empleado => {

//         getSalario( id )
//             .then( salario => {
//                 console.log('El empleado: ', empleado, 'tiene un salario de: ', salario);
//             })
//             .catch(err => console.log(err))
//     })
//     .catch( err => console.log(err))
getEmpleado(id)
    .then( empleado => {
        nombre = empleado
        return getSalario(id)
    })
    .then( salario => console.log( `El empleado: ${nombre} tiene un salario de : ${salario}`))
    .catch( err => console.log( err ));