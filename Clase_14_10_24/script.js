//FUNCIONES

/*function hello(){
    console.log('hola JS');
    console.log('hola HTML');
    console.log('hola CSS');

}
hello();*/
//retorno de una Funcion

/*function hello(){
     return "hola Js";

}

const result=hello();
console.log(result);
//hello();

// */

//retorna objeto vacio

/*function hello(){
    return {};
}

//const result=hello();
console.log(hello());*/

//retorna valor del objeto

/*function hello(){
    return {
        nombre: 'Raúl'
    }

}
console.log(hello());*/

//funcion que retorna a otra funcion

/*function hello(){
    return function(){
        return  'Hola Js'
    }

}
console.log(hello()());*/

// =========USO DE PARAMETROS EN FUNCIONES ============

/*function hellpconJs(name){
    return 'Hola' + name

}
console.log('Karol ');
console.log('Marilu');
console.log('Herrera');
console.log('Macedo');*/

//pasar ma de un parametro a la funcion
//control de errores en parametros 

/*function hellpconJs(x,y){
    return x / y;
}

/*function hellpconJs(x,y=0){
    return x * y;
}

console.log(hellpconJs(10,20));*/

//=== OBJETOS ====
const user ={
    nombre : 'Karol',
    apellidoP: 'Herrera',
    apellidoM: 'Macedo',
    edad: 17,
    edoCivil: 'Soltera (por ahora)',
    domicilio: {
        ciudad: 'CDMX',
        calle: 'Agustin Melgar',
        numero: '692',
    },
    amigos: ['Alejandre', 'Emilie', 'Valerie', 'Cesar'],
    activo: false,
    sendMensaje: function(){
        return 'enviando msj'
    }
}

//alert ciudad, calle, numero
//consola los amigos
//alert (Activo o Dado de baja)
//consola nombre, apellidos, estado civil...!!
//alert (estado del mensaje)

alert(user.domicilio.ciudad+ ' ' +user.domicilio.calle+ ' '+user.domicilio.numero);

//amigos
console.log(user.amigos);

//Activo o dado de baja
alert(user.activo? 'Activo': 'Dado de baja');

//Nombre, Apellido, edad
console.log(user.nombre+ ''+user.apellidoP+ ''+ user.apellidoM+ 'esta'+ user.edoCivil);

//estado del mensaje
alert(user.sendMensaje());




















