import React from "react";

const PokemonCard = props => {
  return (
    <div className='card'>
      <img src={props.sprite} alt='pokemon sprite'></img>
      <p>{props.pokemon.name.toUpperCase()}</p>
      <p>Weight: {props.pokemon.weight}kg</p>
    </div>
  );
};

export default PokemonCard;
