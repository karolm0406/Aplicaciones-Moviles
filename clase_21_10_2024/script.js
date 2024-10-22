


//FUNCION FLECHA
//1.********************************/
function mifuncion (a,b){
    return a+b;
}



//2.********************************/
console.log (mifuncion (2,3));



//estructura de funcion flecha 
let salu2 = ()=> {};

//3.***************************** */
let saludo = (nombre) =>{
    return 'Saludos' + nombre;
}
console.log (saludo ('juan'));




//4.***************************** */

let saludar = nombre => 'Saludos' + nombre;
console.log (saludar ('Ramiro'));


//5.************PASAR MULTIPLES PARAMETROS********************/
let suma=(a,b) => a+b;
console.log (suma(5,8));


//6. *******CREAR OBJETO EN FUNCION FLECHA************
let obj = () => ({nombre: 'Roberto', edad: 20})


// *********Llamamos al objeto y accedemos a la propiedad

//let persona = obj().nombre;
console.log (obj().nombre);

//7.******ARREGLOS**************************/
let arrFunc= () => [1,2,3,4,5];

//accediendo a todo el array
console.log (arrFunc());

//accediendo al arreglo
console.log (arrFunc()[4]);

