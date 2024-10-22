//este es un array para poder almacenar las tareas
let listaDeTareas = [];

//aqui se estan capturando los elementos del DOM
const inputTarea = document.getElementById('tareaInput');
const btnAgregarTarea =document.getElementById('agregarTarea');
const divTareas = document.getElementById('tareas');

//esta es una funcion para poder agregar una tarea
const agregarTarea = () => {
    const tarea = inputTarea.value;
    if (tarea){
        //aqui se agrega la tarea al array
        listaDeTareas.push(tarea);

        //aqui se muestran las tareas en la pagina
        mostrarTareas();

        //aqui se limpia el input 
        inputTarea.value= '';

    }else {
        alert('Por favor ingresa una tarea');
    }
};


//esta parte del codigo es una funcion para mostrar las tareas en la pagina y tambien en la consola
const mostrarTareas= () => {
    //aqui se limpia el contenido antes de agregar las tareas
    divTareas.innerHTML = '';

    listaDeTareas.forEach((tarea, index) => {
        //aqui se crea un elemento div para cada tarea
        const tareaDiv=document.createElement('div');
        tareaDiv.textContent = `${index +1}. ${tarea}`;

        //boton para poder  eliminar la tarea
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent= 'Eliminar';
        btnEliminar.onclick =() => eliminarTarea(index);
         
        //aqui se añade el boton y la tarea al div
        tareaDiv.appendChild (btnEliminar);
        divTareas.appendChild (tareaDiv);
    });
    //aqui se muestra la lista de tareas en la consola
    console.log (listaDeTareas);
};

//funcion para poder eliminar una tarea
const eliminarTarea =(index) => {
    //poder eliminar la tarea del array
    listaDeTareas.splice (index,1);
    //actualizar la lista
    mostrarTareas();
};

//aqui se hace la accion al hacer clic en el boton "agregar tarea"
btnAgregarTarea.addEventListener('click', agregarTarea);