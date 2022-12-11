import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
 
  //map over pokemon to create card for each
  const cards = pokemon.map(poke => {
    return <PokemonCard key={poke.id} pokemon={poke}/>
  })

  console.log(cards)

  return (
    <Card.Group itemsPerRow={6}>
      {cards}
    </Card.Group>
  );
}

export default PokemonCollection;
