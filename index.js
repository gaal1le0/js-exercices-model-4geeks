// declaración de datos iniciales
let undefined;
const sequence = [10, 4, 8, 27.4, 500, null, undefined, 100, 25, 40, 31, 20, 17, 1890, 13, 42];
const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


function cleanArray(myArray){
    let arrayFixed = [];
    for(let i in myArray){
        if(typeof myArray[i]=='number') arrayFixed.push(myArray[i]);
    }
    return arrayFixed;
}


function sortArray(myArray,symbol){
    let arr = cleanArray(myArray);
    
    if(symbol=="<" || symbol==">"){
        for(let i in arr){
            auxSort(i,arr,symbol);
        }
    }
    else return ("Símbolo incorrecto. Inténtelo más tarde (:");
    
    return arr;
}

function auxSort(i,arr,symbol){
    for (let j=0; j<i; j++){
        choiceHowToSort(i,j,arr,symbol);
    }
}

function choiceHowToSort(i,j,arr,symbol){
    if(symbol=="<"){
        lowestToHighest(i,j,arr);  
    }

    if(symbol==">") {
        highestToLowest(i,j,arr);   
    }
}

function lowestToHighest(i,j,arr){
    if(arr[i]<arr[j]){
        let aux = arr[i];
        arr[i]=arr[j];
        arr[j]=aux;
    }
}
function highestToLowest(i,j,arr){
    if(arr[i]>arr[j]){
        let aux = arr[i];
        arr[i]=arr[j];
        arr[j]=aux;
    }
}

function aritMedia(myArray){
    let arr = cleanArray(myArray);
    let sum = 0;
    
    for(let i in arr){
        sum += arr[i];
    }
    return sum/(arr.length);
}

//console.log(sortArray(sequence,"<"));
//console.log(aritMedia(sequence));


