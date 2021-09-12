const contenedorDePokemones = document.querySelector('.pokemones');
const cantidadInicialDePokemones = 20;

function traePokemon(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resp => resp.json());
}

function traePokemonesAlAzar(numPokemones) {
  const idPokemones = [];
  for(let i = 0; i < numPokemones; i++) {
    idPokemones.push(Math.floor(Math.random() * 150) + 1);
  }
  // idPokemones.push(17);
  return Promise.all(idPokemones.map(id => traePokemon(id)));
}

function crearOActualizarContenedorDePokemon(pokemon, contenedor) {
  const contenedorPokemon = contenedor ?? document.createElement('div');
  while (contenedorPokemon.lastElementChild) {
    contenedorPokemon.removeChild(contenedorPokemon.lastElementChild);
  }
  const imagen = document.createElement('img');
  const nombre = document.createElement('h4');
  const tipos = document.createElement('p');
  imagen.src = pokemon.sprites.front_default;
  nombre.innerText = pokemon.name;
  tipos.innerHTML = pokemon.types.map(type => type.type.name).join('-');
  contenedorPokemon.appendChild(nombre);
  contenedorPokemon.appendChild(imagen);
  contenedorPokemon.appendChild(tipos);
  cambiaSiEvoluciona(imagen, pokemon.id, pokemon.name);
  agregaEventoHoverAContenedor(imagen, pokemon.sprites.front_shiny, pokemon.sprites.front_default);
  if (!contenedor) {
    contenedorDePokemones.appendChild(contenedorPokemon);
  }
}

function agregaEventoHoverAContenedor(contenedor, urlShiny, urlNormal) {
  contenedor.addEventListener('mouseenter', function() {
    this.src = urlShiny;
  });
  contenedor.addEventListener('mouseleave', function() {
    this.src = urlNormal;
  });
}

function cambiaSiEvoluciona(contenedor, id, nombre) {
  contenedor.addEventListener('click', function() {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${ id }`).then(resp => resp.json()).then((speciesData) => {
      return fetch(speciesData.evolution_chain.url).then(resp => resp.json());
    }).then((evolutionChainData) => {
      const nextEvolutionId = checkNextEvolution(evolutionChainData.chain, nombre);
      if (nextEvolutionId) {
        traePokemon(nextEvolutionId).then((pokemonData) => {
          crearOActualizarContenedorDePokemon(pokemonData, contenedor.parentNode);
        });
      }
    });
  });
}

function checkNextEvolution(evolutionChainData, nombre) {
  const evolvesTo = evolutionChainData.evolves_to;
  const name = evolutionChainData.species?.name;
  if (name === nombre) {
    if (Array.isArray(evolvesTo) && evolvesTo.length > 0) {
      const nextEvolution = evolutionChainData.evolves_to[0]?.species?.name;
      if (nextEvolution) {
        return nextEvolution;
      }
    }
  }
  if (Array.isArray(evolvesTo) && evolvesTo.length > 0) {
    return checkNextEvolution(evolvesTo[0], nombre);
  }
  return null;
}

traePokemonesAlAzar(cantidadInicialDePokemones).then((data) => {
  data.forEach((pokemon) => {
    crearOActualizarContenedorDePokemon(pokemon);
  });
  console.log(data);
});
