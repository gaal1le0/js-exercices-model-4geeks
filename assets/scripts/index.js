// declaración de datos iniciales
let undefined;
const sequence = [10, 4, 8, 27.4, 500, null, undefined, 100, 25, 40, 31, 20, 17, 1890, 13, 42];

// Funcion que limpia los arrays 
function cleanArray(myArray) {
    let arrayFixed = [];
    for (let i in myArray) {
        // Si el elemento del array cumple con la condicion
        // es pusheado dentro de la nueva array limpia
        if (typeof myArray[i] == 'number') arrayFixed.push(myArray[i]);
    }
    return arrayFixed;
}

// Ej 1 y 2: Funcion que ordena de menor a mayor o viceversa (segun se lo indiquen en la variable symbol)
function sortArray(myArray, symbol) {
    // Primero limpiar la variable
    let arr = cleanArray(myArray);
    // Aqui definimos si queremos ordenar de menor a mayor o al reves
    if (symbol == "<" || symbol == ">") {
        for (let i in arr) {
            // Por cada elemento del array, llamaremos a la funcion auxSort 
            auxSort(i, arr, symbol);
        }
    }
    else return ("Símbolo incorrecto. Inténtelo más tarde (:");
    return arr;
}

function auxSort(i, arr, symbol) {
    // Este for comienza desde el principio del array y acaba en "i" 
    for (let j = 0; j < i; j++) {
        // Por cada iteracion, llamaremos a la funcion choiceHowToSort
        choiceHowToSort(i, j, arr, symbol);
    }
}

// Finalmente aqui usamos la variable symbol que recibimos por parametro
// para decidir de que manera ordenar el array. 
function choiceHowToSort(i, j, arr, symbol) {
    // En cada caso llamaremos a una funcion diferente para hacerlo 
    if (symbol == "<") {
        // Si el simbolo es el de menor, llamo a la funcion que ordena de menor a mayor
        lowestToHighest(i, j, arr);
    }
    if (symbol == ">") {
        // Si el simbolo es el de mayor, llamo a la funcion que ordena de mayor a menor
        highestToLowest(i, j, arr);
    }
}

// Funcion que ordena de menor a mayor con el método Bubble Sort
function lowestToHighest(i, j, arr) {
    if (arr[i] < arr[j]) {
        let aux = arr[i];
        arr[i] = arr[j];
        arr[j] = aux;
    }
}

// Funcion que ordena de mayor a menor con el método Bubble Sort
function highestToLowest(i, j, arr) {
    if (arr[i] > arr[j]) {
        let aux = arr[i];
        arr[i] = arr[j];
        arr[j] = aux;
    }
}

// Ej 3: Funcion calcuadora de la media aritmetica de un array
function aritMedia(myArray) {
    let arr = cleanArray(myArray);
    // En la variable "sum" almacenaremos la sumatoria del array
    let sum = 0;
    for (let i in arr) {
        // Recorremos el array y sumamos cada uno de los elementos 
        sum += arr[i];
    }
    // La funcion devuelve la suma total dividido la longitud del array
    return sum / (arr.length);
}

// ↓ Des-comentar para utilizar la funcion 
//console.log(sortArray(sequence,"<"));
//console.log(aritMedia(sequence));

const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//Ej 4: Funcion comprobante de DNI y Letra
function assignLetter(myArray, dni, letter) {
    // Llamamos a la funcion isNumberOk y le pasamos el numero de DNI.        
    // Si devuelve true, continuamos. Si devuelve false, se muestra un msj de error 
    if (isNumberOk(dni)) {
        let rest = dni % 23;
        // Comparo la letra pasada por parametros vs la letra resultante del resto de la division
        // Si son iguales, retorna un mensaje de validacion, sino, uno de error
        if (letter == myArray[rest]) {
            return "El número y la letra del DNI indicados son correctos.";
        }
        else return "La letra indicada es incorrecta.";
    }
    else return "El numero proporcionado no es válido.";
}

// La funcion devuelve true si cumple las condiciones, sino, devuelve false
function isNumberOk(num) {
    if (num > 0 && num < 99999999) return true;
    else return false;
}
//console.log(assignLetter(letrasDNI,55123456,'X'));