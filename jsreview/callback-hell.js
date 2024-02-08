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

const id = 1;

const getEmpleado = (id, callback) => {
    const empleado= empleados.find( (s) => s.id === id)?.nombre;
    
    if( empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no se encuentra`)
    }
}

const getSalario = (id, callback) => {
    // ? nullcheck
    const salario = salarios.find( s => s.id === id).salario;
    
    if( salario ) {
        callback(null, salario);
    } else {
        callback(`Salario con id ${id} no se encuentra`)
    }
}


getEmpleado(id, ( err, empleado ) => {
    
    if ( err ) {
        console.log('ERROR!!');
        return console.log(err);
    }
    console.log(empleado);

    getSalario(id, (err, salario) => {
        if ( err ) {
            return console.log(err);
        }
        console.log('El empleado: ', empleado, 'tiene un salario de : ', salario);
    });
});

