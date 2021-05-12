var elMain = document.querySelector(".main-card");

elMain.classList.add("d-flex", "flex-wrap");

function renderPokemon(img, name, type) {
  var card = document.createElement("div");
  var pokemonImg = document.createElement("img");
  var pokemonName = document.createElement("h4");
  var pokemonTypes = document.createElement("p");
  //classlists
  card.classList.add("card", "m-2", "p-2", "flex-grow-1", "d-flex", "flex-column", "align-items-center");
  pokemonImg.classList.add("w-50", "text-center");
  pokemonName.classList.add("h4", "text-center");
  pokemonTypes.classList.add("text-center");
  //attributes
  pokemonImg.setAttribute("src", img);
  pokemonName.textContent = name;
  pokemonTypes.textContent = "Pokemon type: " + type;
  //appendChild
  card.appendChild(pokemonImg);
  card.appendChild(pokemonName);
  card.appendChild(pokemonTypes);
  elMain.appendChild(card);
};

pokemons.forEach(function (pokemon) {
  var name = pokemon.name;
  var img = pokemon.img;
  var type = pokemon.type;
  renderPokemon(img, name, type);
});
