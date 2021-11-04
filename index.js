// declaración de datos iniciales
let undefined;
const sequence = [10, 4, 8, 27.4, 500, null, undefined, 100, 25, 40, 31, 20, 17, 1890, 13, 42];

// Funcion que limpia los arrays 
function cleanArray(myArray){
    let arrayFixed = [];
    for(let i in myArray){
        if(typeof myArray[i]=='number') arrayFixed.push(myArray[i]); // Si el elemento del array cumple con la condicion
    }                                                                // es pusheado dentro de la nueva array limpia
    return arrayFixed;
}

// Funcion que ordena de menor a mayor o viceversa (segun se lo indiquen en la variable symbol)
function sortArray(myArray,symbol){
    let arr = cleanArray(myArray);       // Primero limpiar la variable
    
    if(symbol=="<" || symbol==">"){     // Aqui definimos si queremos ordenar de menor a mayor o al reves
        for(let i in arr){
            auxSort(i,arr,symbol);     // Por cada elemento del array, llamaremos a la funcion auxSort 
        }
    }
    else return ("Símbolo incorrecto. Inténtelo más tarde (:");
    
    return arr;
}

function auxSort(i,arr,symbol){
    for (let j=0; j<i; j++){                    // Este for comienza desde el principio del array y acaba en "i" 
        choiceHowToSort(i,j,arr,symbol);        // Por cada iteracion, llamaremos a la funcion choiceHowToSort
    }
}

function choiceHowToSort(i,j,arr,symbol){       // Finalmente aqui usamos la variable symbol que recibimos por parametro
    if(symbol=="<"){                            // para decidir de que manera ordenar el array.  
        lowestToHighest(i,j,arr);               // En cada caso llamaremos a una funcion diferente para hacerlo
    }                                           

    if(symbol==">") {
        highestToLowest(i,j,arr);   
    }
}

function lowestToHighest(i,j,arr){      // Ordena de menor a mayor con el método Bubble Sort
    if(arr[i]<arr[j]){
        let aux = arr[i];
        arr[i]=arr[j];
        arr[j]=aux;
    }
}
function highestToLowest(i,j,arr){      // Ordena de mayor a menor con el método Bubble Sort
    if(arr[i]>arr[j]){
        let aux = arr[i];
        arr[i]=arr[j];
        arr[j]=aux;
    }
}


// Funcion calcuadora de la media aritmetica de un array
function aritMedia(myArray){
    let arr = cleanArray(myArray);
    let sum = 0;        // Aqui almacenaremos la sumatoria del array
    
    for(let i in arr){
        sum += arr[i];  // Recorremos el array y sumamos cada uno de los elementos 
    }
    return sum/(arr.length);    // La funcion devuelve la suma total dividido la longitud del array
}

// ↓ Des-comentar para utilizar la funcion 
//console.log(sortArray(sequence,"<"));
//console.log(aritMedia(sequence));


const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Funcion comprobante de DNI y Letra
function assignLetter(myArray,dni,letter){       // Llamamos a la funcion isNumberOk y le pasamos el numero de DNI. 
    if(isNumberOk(dni)){                        // Si devuelve true, continuamos. Si devuelve false, se muestra un msj de error 
        let rest = dni%23;                      
        if (letter == myArray[rest]){           // Comparo la letra resultante del resto de la division vs la letra pasada por parametros
            return "El número y la letra del DNI indicados son correctos.";
        }
        else return "La letra indicada es incorrecta.";
    }
    else return "El numero proporcionado no es válido.";
}


// La funcion devuelve true si cumple las condiciones, sino, devuelve false
function isNumberOk(num){     
    if (num>0 && num<99999999) return true;
    else return false;
}

//console.log(assignLetter(letrasDNI,55123456,'X'));