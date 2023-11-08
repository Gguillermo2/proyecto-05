// Esta línea importa un módulo llamado "colors". 
        require('colors')
// Aquí en etsa linea se esta  importando un módulo local llamado "text" desde el archivo "./fuctions/text.js".
        const text = require('./fuctions/text');
//Se define una función llamada "main" que utiliza la sintaxis de una función flecha asíncrona
        const main = async() =>{
// limpiea la consola 
        console.clear()
//Se declara una variable llamada "nombres" y se le asigna el valor "guillermo".
        let nombres= ("guillermo")
//De manera similar, se declara una variable llamada "apellidos" y se le asigna el valor "sena".
        let  apellidos= ("sena")
    
// Aquí se crea una variable llamada "nombrecompleto" que contiene el nombre completo de la siguiente manera:
//La primera letra de "nombres" se convierte a mayúscula
//El resto de "nombres" se convierte a minúscula
//Se agrega un espacio
//La primera letra de "apellidos" se convierte a mayúscula
//El resto de "apellidos" se convierte a minúscula
        let nombrecompleto = nombres[0].toUpperCase()+nombres.substring(1).toLocaleLowerCase() + " " + apellidos[0].toUpperCase()+apellidos.substring(1).toLocaleLowerCase()

// Se crea una nueva variable llamada "nombre1" que contiene el valor de "nombrecompleto"
        const nombre1 = nombrecompleto
//Llama a una función "mostrarNombreSecuencial" del módulo importado "text" y pasa "nombre1" como argumento
        text.mostrarNombreSecuencial(nombre1)
// Se crea otra variable llamada "nombre2" que también contiene el valor de "nombrecompleto"
        const nombre2= nombrecompleto
// Llama a otra función "mostrarNombreSecuencialInvertido" del módulo "text" y pasa "nombre2" como argumento
        text.mostrarNombreSecuencialImvertido(nombre2)
//Imprime el nombre y apellido en mayúsculas en la consola
        console.log(nombres.toUpperCase()+" "+apellidos.toUpperCase())
//mprime el nombre y apellido en minúsculas en la consola
        console.log(nombres.toLowerCase()+" "+apellidos.toLowerCase())
//Imprime el nombre completo en la consola.
        console.log(nombrecompleto)
    }   


    main();