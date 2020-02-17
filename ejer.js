/*const array = [1, 2, 3, 4, 5];
const array2 = [6,7,8];
const array3 = [9,10]

function devolver () {


const espacio = ' ';
let armarCadena = array.join(' ') + espacio + array2.join(' ') + espacio + array3.join(' ');
console.log(armarCadena);
return armarCadena;
}*/


const array = [100,99,98];
const array2 = [97,96];
const array3 = [95,94,93];

function mergeArrays(...array) {
    let resultado=[];
    for (let i =0;i<array.length;i++){
        resultado = resultado.concat(array[i]);
    }
    return resultado;
}