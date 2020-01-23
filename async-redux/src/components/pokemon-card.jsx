import React from "react";

const PokemonCard = props => {
  return (
    <div>
      <img src={props.sprite} alt='pokemon sprite'></img>
      <p>{props.pokemon.name.toUpperCase()}</p>
      <p>Weight {props.pokemon.weight}lbs</p>
    </div>
  );
};

export default PokemonCard;
