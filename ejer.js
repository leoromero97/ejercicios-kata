const lista = [10, 15, 20, 30];

function minMax (lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma = suma + lista[i];
        let max = Math.max(...lista)
        let min = Math.min(...lista)
        minSuma = suma - max;
        maxSuma = suma - min;
    }
    console.log(minSuma,maxSuma);
}