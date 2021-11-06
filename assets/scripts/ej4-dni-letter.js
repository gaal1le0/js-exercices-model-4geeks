// El cálculo de la letra del Documento Nacional de Identidad (DNI).

//DNI de usuarios de ejemplo
const userDNI1 = 48108444;
const userDNI2 = 47210834;
const userDNI3 = 37850689000;

//Letras DNI usuarios de ejemplo
const userLetter1 = 'B';
const userLetter2 = 'A';
const userLetter3 = 'C';

const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//Función que verifica si la letra del DNI coincide con el valor calculado
function letterDNI(number, letter){

    //Se comprueba que el valor aportado es correcto
    if(number > 0 && number < 99999999){

        //Se comprueba que el módulo del DNI % 23 coincide con la letra del DNI
        if(letrasDNI[number % 23] == letter) {
            return `El número de DNI ${number}-${letter} es válido.`;

        } else {
            return 'La letra proporcionada no es correcta.';
        }
       
    } else {
        return 'El número proporcionado no es válido.';
    }

}

console.log(letterDNI(userDNI1, userLetter1));
