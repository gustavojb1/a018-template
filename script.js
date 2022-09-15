const arrayNumeros = [1, 2, 3, 4, 54, 6, 7, 8, 9, 10];

function multiplicaNumeros(array) {
  const novoArray = [];
  for (i of array) {
    novoArray.push(i * 3);
  }
  return novoArray;
}

const numerosPares = (array) => {
  const arrayPar = [];
  for (i of array) {
    if (i % 2 === 0) {
      arrayPar.push(i);
    }
  }
  return arrayPar;
};

console.log(multiplicaNumeros(arrayNumeros));
console.log(numerosPares(arrayNumeros));
console.log("********************************************");

const funcaoNova = (array, funcao) => {
  const resultado = funcao(array);
  console.log("Resultado função nova", resultado);
};

funcaoNova(arrayNumeros, multiplicaNumeros);
funcaoNova(arrayNumeros, numerosPares);

// MAP

const arrayMultiplicado = arrayNumeros.map((numero) => {
  return numero * 3;
});

console.log("map", arrayMultiplicado);

// FILTER

const filtraArray = arrayNumeros.filter((numero) => {
  if (numero % 2 == 0) {
    return numero;
  }
});
console.log("filter", filtraArray);

const pokemons = [
  { nome: "Bulbasaur", tipo: "grama", vida: 40 },
  { nome: "Bellsprout", tipo: "grama", vida: 20 },
  { nome: "Charmander", tipo: "fogo", vida: 35 },
  { nome: "Vulpix", tipo: "fogo", vida: 25 },
  { nome: "Squirtle", tipo: "água", vida: 45 },
  { nome: "Psyduck", tipo: "água", vida: 25 },
];

function trataPokemon(pokemon) {
  pokemon.vida = 100;
}
//Spread operator foi usado para criar uma cópia do objeto principal não alterando assim o objeto original
const pokemonsVidaCheia = pokemons.map((pokemon) => {
  const novoPoke = {
    ...pokemon
  }
  trataPokemon(novoPoke);
  return novoPoke;
});
console.log("*****************");
console.log(pokemonsVidaCheia);
console.log("*****************");
console.log(pokemons);

const pokemonDeFogo = pokemons.filter((pokemon) => pokemon.tipo === "fogo");
console.log(pokemonDeFogo)



