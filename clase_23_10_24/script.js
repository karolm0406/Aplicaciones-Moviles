let task = ["comprar", "estudiar", "limpiar la casa"];

console.log("lista de tareas", task);

task.push("ir a la escuela");

task.splice(3,1)

task.push("ir a casa");

//**************USANO FOREACH************* */

let tasks =["comprar", "estudiar", "limpiar casa", "ir a la escuela"];

    tasks.forEach((task,index)=>{
        console.log(`Tarea ${index} ${task}`);
    })
