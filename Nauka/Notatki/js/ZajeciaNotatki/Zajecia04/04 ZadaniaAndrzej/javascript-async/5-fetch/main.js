// GET https://pokeapi.co/api/v2/pokemon/{id or name}/

// fetch("https://pokeapi.co/api/v2/pokemon/1/")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

async function fetchData(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json();
  console.log(data);
  createPokemon(data);
}

const createPokemon = (pokemon) => {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("card");
  document.body.appendChild(pokemonCard);

  const pokemonImg = document.createElement("img");
  pokemonImg.src = pokemon.sprites.front_default;
  pokemonCard.appendChild(pokemonImg);
};

const fetchPokemons = (amountOfPokemons) => {
  for (let i = 1; i < amountOfPokemons; i++) {
    fetchData(i);
  }
};

fetchPokemons(40);
