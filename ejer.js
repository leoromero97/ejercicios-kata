let array = [1,2,3,4];
let indicador = 2;

function shiftArray(array,indicador) {
    newArray = "";
    recorrer = "";
    for (let i = 0; i<array.length ; i++) {
        recorrer = recorrer + array[i] + ' , '; 
    }
    console.log(recorrer);
    newArray = array.shift(indicador);
    console.log(newArray);
    console.log(array + ',' + newArray);
}