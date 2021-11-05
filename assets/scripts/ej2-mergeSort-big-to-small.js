// Crea una función que ordene de mayor a menor el array sequence.
const sequence = [10, 4, 8, 27.4, 500, null, undefined, 100, 25, 40, 31, 20, 17, 1890, 13, 42];


//Función que "elimina" los elementos diferentes a tipo number
function clearArray(arr){
    let newArr=[];
    for (let i in arr){
        if(typeof (arr[i]) === 'number'){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


//Función que concatena dos arrays según el orden de sus elementos
function merge(left, right) {

    let arr = []
    
    //Mientras la longitud de ambas arrays sea igual, se realiza el loop
    while (left.length && right.length) {

        //Se comparan los valores y se ordenan según tamaño (mayor a menor)
        if (left[0] > right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Se concatenan los arrays resultantes
    return [ ...arr, ...left, ...right ]
}


//Función que divide el array por la mitad y aplica merge
function mergeSort(arry) {

    const half = arry.length / 2;
    
    // En caso de que la longitud sea menor a 2, se finaliza la función
    if(arry.length < 2){
      return arry 
    }
    
    const left = arry.splice(0, half)
    return merge(mergeSort(left),mergeSort(arry))
    
}


console.log(mergeSort(clearArray(sequence)));

//Opción 2: console.log(mergeSort(clearArray(sequence)).reverse());