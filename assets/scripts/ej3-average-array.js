// Crea una funcion que calcule la media aritmética de los datos en el array Sequence.
const sequence = [10, 4, 8, 27.4, 500, null, undefined, 100, 25, 40, 31, 20, 17, 1890, 13, 42];


//Función que "elimina" los elementos diferentes a tipo number
function clearArray (arr){
    let newArr=[];
    for (let i in arr){
        if(typeof (arr[i])==='number'){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//Función que calcula la media aritmética de un array
function average(arr){

    let result = 0; 
    //Limpiamos el array
    let arry = clearArray(arr); 

    //Con un loop, sumanos todos los valores del array en una variable
    for(let i in arry){
        result = arry[i] + result; 
    }
    
    //Devolvemos la suma de los elementos entre la longitud
    return result/arr.length;
}

console.log(average(clearArray(sequence))); 