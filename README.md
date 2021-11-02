<p align="center">
  <img src="https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=4geeks,128">
  <h4 align="center">4Geeks Academy</h4>
</p>

<p>
    <h2 align="center" style="margin: 0">JavaScript 2 (Ejercicios JS)</h2>
    <h3 align="center" style="margin-top: 0"> Ovidio Santoro</h3>
</p>

## Summary

Cuatro (tres, dado que dos están condensadas) funciones de JavaScript propuestas por el mentor.

* La función `orderArray(array, order)` ordena un array compuesto de números siguiendo el orden elegido. Esta función recibe dos argumentos, en primer lugar el **array** a ordenar, y en segundo lugar una string indicando la ordenación deseada: **"ascending"** devuleve el array ordenado de menor a mayor, mientras que **"descending"** lo devuelve ordenado de mayor a menor. 

	La función separa el array en mitades recursivamente hasta que cada mitad está compuesta por un único elemento, y llegados a ese punto comienza a ordenar los valores previamente dados.

* La función `arithmeticMean()` devuelve la media aritmética de un array numérico dado.

* La función `validateDNI()` tomo como argumento un DNI completo (número + letra) y comprueba que éste sea válido según la fórmula oficial. Finalmente devuelve un mensaje indicando si alguna de las partes del DNI introducido son incorrectas o si el DNI es válido.

	Esta función separa en primer lugar el número de la letra del DNI y comprueba ambos; en primer lugar comprueba que el número se encuentre entre los valores permitidos y seguidamente comprueba que la letra corresponda con ese número.

## Technology used

* JavaScript

## How to use it

1. Añade `console.log()` de la función deseada.
2. Ejecuta `node index.js`
3. Profit!

## Comments

Segundo paquete de ejercicios de JavaScript propuestos el 29/10/21. Las instrucciones de los mismos son:

1. Crea una función que ordene de menor a mayor el array sequence.
2. Crea una funcion que ordene de mayor a menor el array sequence.
3. Crea una funcion que calcule la media aritmética de los datos en el array Sequence.
4. El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras. El array de letras es:
Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. Con estos datos, elaborar un pequeño script que:- Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado.
En primer lugar se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente. Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.

## How to contribute

https://github.com/OvidioSantoro/javascript-2