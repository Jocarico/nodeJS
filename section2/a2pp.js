console.log("Inicio de programa"); // 1


setTimeout( () => {
    console.log("Primer timeout"); // 5
},3000);

setTimeout( () => {
    console.log("Segundo timeout"); //3
},0);

setTimeout( () => {
    console.log("Tercer timeout"); //4 
},0);


//Because is a pila de procesos
console.log("Find de programa"); //2 