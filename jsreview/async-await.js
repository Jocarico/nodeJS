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
        //if simplificado
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
        : reject(`No existe salario con ese ${id}`)
        
    });
}

const id = 3;

const getInfoUsuario = async( id ) => {
    
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        
        return `EL salario del empleado: ${empleado} es de: ${ salario }`;
    
    } catch (error) {
        throw error;
    }
}


getInfoUsuario( id )
    .then(msg => {
        console.log("Todo bien!!")
        console.log(msg)
    })
    .catch(err => {
        console.log("Todo mal!!")
        console.log( err )
    });

