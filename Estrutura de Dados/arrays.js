/*
function adicionarFinal(array, nome) {
    array.push(nome);
    return array;
  }
  
  let nomes = ["Ana", "Carlos", "João"];
  let resultado = adicionarFinal(nomes, "Maria");
  console.log(resultado);
  */
/*
function adicionarInicio(array, numero) {
    array.unshift(numero);
    return array;
  }
  let numeros = [2, 3, 4];
  let resultado2 = adicionarInicio(numeros, 1);
  console.log("2. adicionarInicio:", resultado2);
  */

/*
  function removerUltimo(array) {
    array.pop();
    return array;
  }
  let lista3 = [10, 20, 30];
  let resultado3 = removerUltimo(lista3);
  console.log("3. removerUltimo:", resultado3);
  */

/*
  function removerPrimeiro(array) {
    array.shift();
    return array;
  }
  let lista4 = [100, 200, 300];
  let resultado4 = removerPrimeiro(lista4);
  console.log("4. removerPrimeiro:", resultado4);
  */

  /*
  function modificarArray(array) {
    array.splice(2, 1, 5, 6); 
    return array;
  }
  let lista5 = [1, 2, 3, 4];
  let resultado5 = modificarArray(lista5);
  console.log("5. modificarArray:", resultado5);
*/

/*
function criarMatriz3x3() {
    let matriz = [];
    for (let i = 0; i < 3; i++) {
      matriz[i] = [];
      for (let j = 0; j < 3; j++) {
        matriz[i][j] = i + j;
      }
    }
    return matriz;
  }
  
  function imprimirMatriz(matriz) {
    console.log("6. imprimirMatriz:");
    for (let i = 0; i < matriz.length; i++) {
      console.log(matriz[i]);
    }
  }
  
  let matriz6 = criarMatriz3x3();
  imprimirMatriz(matriz6);
  */
 /*
  let temperaturas = [
    [20, 21, 22, 23, 24, 25], // Dia 0
    [19, 20, 21, 22, 23, 24]  // Dia 1
  ];
  
  function consultarTemperatura(dia, hora) {
    if (dia < 0 || dia >= temperaturas.length) {
      return "Dia inválido";
    }
    if (hora < 0 || hora >= temperaturas[dia].length) {
      return "Hora inválida";
    }
    return temperaturas[dia][hora];
  }
  
  console.log("Temperatura dia 1, hora 3:", consultarTemperatura(1, 3));
  console.log("Temperatura dia 0, hora 5:", consultarTemperatura(0, 5));
  console.log("Temperatura dia 0, hora 9:", consultarTemperatura(0, 9)); 
  */