//Se crea un objeto vacío llamado "text". En este objeto, se agregarán las dos funciones
        const text = {};

//Se define una función llamada "mostrarNombreSecuencialInvertido" que toma un parámetro "nombre". Esta función se encarga de mostrar el nombre en orden inverso
        const mostrarNombreSecuencialImvertido = (nombre) => {
        let nombres = nombre.length - 1;
        let nombreCompleto = '';
        let nums = 1
//Utiliza un bucle while para recorrer el nombre de atrás hacia adelante, concatenando las letras del nombre y mostrando el resultado con un número secuencial
        while (nombres >= 0) {
            nombreCompleto = nombreCompleto + nombre[nombres];
            console.log(nums+"  "+nombreCompleto);
            nombres--;
            nums ++;
        }
    };
// Se define otra función llamada "mostrarNombreSecuencial" que, en realidad, parece estar diseñada para mostrar un nombre en orden secuencial. Sin embargo, en su implementación, no utiliza el parámetro "nombre" y en su lugar crea un nombre completo "nombrecompleto" de "guillermo andres". 
        const mostrarNombreSecuencial = (nombre) => {
        let nombres= ("guillermo")
        let  apellidos= ("andres")
        let nombrecompleto = nombres[0].toUpperCase()+nombres.substring(1).toLocaleLowerCase() + " " + apellidos[0].toUpperCase()+apellidos.substring(1).toLocaleLowerCase()
        let textos = nombrecompleto.length  
//utiliza un bucle while para recorrer la longitud del nombre completo, imprimiendo porciones del nombre en cada iteración
            while(textos>0){
            console.log  (textos + "  ".red + nombrecompleto.substring(0,textos));
            textos--;
        }
    }
// se exportan las funciones 
text.mostrarNombreSecuencial = mostrarNombreSecuencial;
text.mostrarNombreSecuencialImvertido = mostrarNombreSecuencialImvertido
module.exports = text;