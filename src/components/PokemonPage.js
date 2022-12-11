import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  //set up state functionality for pokemon data, search
  const [pokemon, setPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState("")


  //fetch data when component loads
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(data => setPokemon(data))

  }, [])

  //need function to add pokemon to state (form)
  function handleAddPokemon(newPokemon) {
    setPokemon([newPokemon, ...pokemon])
  }

  //filter the pokemon
const pokemonToDisplay = pokemon.filter((poke) => {
 return poke.name.toLowerCase().includes(searchTerm.toLowerCase())
})

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search onChangeSearch={setSearchTerm} searchTerm={searchTerm}/>
      <br />
      <PokemonCollection pokemon={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
