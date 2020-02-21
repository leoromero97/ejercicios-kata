/*ejemplo 1*/
function esAnagrama(palabra, posibleAnagrama){
    if(palabra.toLowerCase() === posibleAnagrama.toLowerCase())
    return false;    
    return palabra.toLowerCase().split("").sort().join("") === posibleAnagrama.toLowerCase().split("").sort().join("");
  }

  /*ejemplo 2*/
  
  const palabrasYPosiblesAnagramas = [
    {
      palabra: "RAMO",
      posibleAnagrama: "auto"
    }
];

for(let i = palabrasYPosiblesAnagramas.length - 1; i >= 0; i--){
  let palabra = palabrasYPosiblesAnagramas[i].palabra,
    posibleAnagrama = palabrasYPosiblesAnagramas[i].posibleAnagrama,
    resultado = esAnagrama(palabra, posibleAnagrama);
    
  console.log(resultado);
  }