import React from "react";
import { Card } from "semantic-ui-react";
import { useState } from "react";

function PokemonCard({ pokemon }) {
//destructure the data object prop
const { name, hp, sprites } = pokemon
//state for flipping the image to show front or back
const [showFront, setShowFront] = useState(true)

//toggle the front or back image
function handleClick() {
  setShowFront((showFront) => !showFront)
}

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img alt="oh no!" src={ showFront ? sprites.front : sprites.back }/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
