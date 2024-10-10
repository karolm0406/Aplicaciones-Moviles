// Función para agregar un valor al display de la calculadora
function appendToDisplay(value){
    // Obtener el elemento con ID 'display' y concatenar el nuevo valor al contenido actual
    document.getElementById('display').value += value;
}

// Función para borrar completamente el contenido del display
function clearDisplay(){
    // Establecer el valor del display como una cadena vacía
    document.getElementById('display').value = '';
}

// Función para eliminar el último carácter del display
function deleteLast(){
    // Obtener el valor actual del display
    let displayValue = document.getElementById('display').value; // 'document' con minúscula
    // Remover el último carácter utilizando slice y actualizar el valor del display
    document.getElementById('display').value = displayValue.slice(0, -1);
}

// Función para calcular el resultado de la expresión en el display
function calculateResult(){
    try {
        // Evaluar la expresión actual en el display utilizando eval()
        let result = eval(document.getElementById('display').value);
        // Mostrar el resultado en el display
        document.getElementById('display').value = result;
    } catch(error) {
        // Si ocurre un error (expresión no válida), mostrar una alerta
        alert('Expresión inválida');
    }
}
