// declaración de datos iniciales
let undefined;
const sequence = [10, 4, 8, 27.4, 500, null, undefined, 100, 25, 40, 31, 20, 17, 1890, 13, 42];
const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Elimina del array los elementos que no sean números
function filter(array){

    let clean = [];

    for (let value of array){
        if (typeof(value) === "number"){
            clean.push(value);
        }
    }

    return clean;
}

// Ordena dos arrays de menor a mayor
function ascendingOrder(left, right){
    let ordered = [];

    // Mientras los dos lados de la comparación tengan valores:
    while (left.length > 0 && right.length > 0){
        //El elemento menor es incluido en primer lugar en el array y eliminado de su lado.
        if (left[0] < right[0]){
            ordered.push(left[0]);
            left.shift();
        } else {
            ordered.push(right[0]);
            right.shift();
        }
    }

    // Incluye el/los elementos que hayan quedado "sueltos" en uno de los lados y devuelve el array ordenado.
    ordered.push(...left, ...right);
    return ordered;
}

// Ordena dos arrays de menor a mayor
function descendingOrder(left, right){
    let ordered = [];

    // Mientras los dos lados de la comparación tengan valores:
    while (left.length > 0 && right.length > 0){
        //El elemento menor es incluido en primer lugar en el array y eliminado de su lado.
        if (left[0] > right[0]){
            ordered.push(left[0]);
            left.shift();
        } else {
            ordered.push(right[0]);
            right.shift();
        }
    }

    // Incluye el/los elementos que hayan quedado "sueltos" en uno de los lados y devuelve el array ordenado.
    ordered.push(...left, ...right);
    return ordered;
}

// Parte el array dado en mitades recursivamente hasta que queda un elemento en cada mitad y llama a otra función que ordena los elementos resultantes.
function orderArray(array, order){
    // Aplica el filtro para retirara los elementos que no son números
    let filtered = filter(array)

    // Selecciona la función de ordenación adecuada según lo elegido al ejecutar la función:
    if (order === "ascending"){
        sorting = ascendingOrder;
    } else if (order === "descending"){
        sorting = descendingOrder;
    }

    // Si el array solo tiene un elemento, devuelve ese elemento. Este es el CASO BASE.
    if (filtered.length < 2){
        return filtered;
    }

    // Halla la mitad del array y lo divide en dos partes
    let half = Math.floor(filtered.length / 2);
    let left = filtered.slice(0, half);
    let right = filtered.slice(half, filtered.length);

    // La función se llama recursivamente a sí misma para reducir cada mitad a su mitad una y otra vez hasta que una de las partes se reduce a un solo elemento.
    // Una vez reducida a un elemento cada parte, la función de ordenación seleccionada
    return sorting(orderArray(left), orderArray(right));
}

// Calcula la media aritmética de los valores numéricos del array dado.
function arithmeticMean(array){
    let filtered = filter(array);
    let average = 0;

    for (let value of filtered){
        average += value;
    }

    return average/filtered.length;
}

// Valida que el número introducido se encuentre entre los parámetros correctos (entre 0 y 99999999)
function validateNumber(number){
    if (number < 0 || number > 99999999){
        return false;
    } else{
        return true;
    }
}

// Valida que la letra dada corresponda a la que la fórmula del DNI determina
function validateLetter(number, letter){
    let modulo = number % 23;

    if (letter === letrasDNI[modulo]){
        return true;
    } else{
        return false;
    }
}

// Valida un DNI teniendo en cuenta su número y su letra de acuerdo con las especificaciones oficiales.
function validateDNI(documento){
    // Separa el número y la letra del DNI introducido
    let number = documento.slice(0, -1);
    let letter = documento.slice(-1);

    // Comprueba que el número sea correcto y la letra coincida con la fórmula establecida
    if (!validateNumber(number)){
        return `${"El número de DNI '" + number + "' ¡NO ES VÁLIDO!"}`
    } else if (!validateLetter(number, letter)){
        return `${"La letra '" + letter + "' ¡NO SE CORRESPONDE con el número de DNI indicado!"}`
    } else{
        return `${"¡El DNI '" + documento + "' es válido!"}`
    }
}
