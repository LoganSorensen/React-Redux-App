import React from "react";

const PokemonCard = props => {
  return (
    <div className="card">
      <img src={props.sprite} alt="pokemon sprite"></img>
      <p>{props.pokemon.name.toUpperCase()}</p>
      <p>Height: {props.pokemon.height / 10}m</p>
      <p>Weight: {props.pokemon.weight / 10}kg</p>
      <p>
        {props.pokemon.types.map(type => {
          if (type.type.name === "normal") {
            return (
              <span className="normal">{type.type.name.toUpperCase()}</span>
            );
          } else if (type.type.name === "fighting") {
            return (
              <span className="fighting">{type.type.name.toUpperCase()}</span>
            );
          } else if (type.type.name === "flying") {
            return (
              <span className="flying">{type.type.name.toUpperCase()}</span>
            );
          } else if (type.type.name === "poison") {
            return (
              <span className="poison">{type.type.name.toUpperCase()}</span>
            );
          } else if (type.type.name === "ground") {
            return (
              <span className="ground">{type.type.name.toUpperCase()}</span>
            );
          } else if (type.type.name === "rock") {
            return <span className="rock">{type.type.name.toUpperCase()}</span>;
          } else if (type.type.name === "bug") {
            return <span className="bug">{type.type.name.toUpperCase()}</span>;
          } else if (type.type.name === "ghost") {
            return (
              <span className="ghost">{type.type.name.toUpperCase()}</span>
            );
          } else if (type.type.name === "steel") {
            return (
              <span className="steel">{type.type.name.toUpperCase()}</span>
            );
          } else if (type.type.name === "fire") {
            return <span className="fire">{type.type.name.toUpperCase()}</span>;
          } else if (type.type.name === "water") {
            return (
              <span className="water">{type.type.name.toUpperCase()}</span>
            );
          } else if (type.type.name === "grass") {
            return (
              <span className="grass">{type.type.name.toUpperCase()}</span>
            );
          } else if (type.type.name === "electric") {
            return (
              <span className="electric">{type.type.name.toUpperCase()}</span>
            );
          } else if (type.type.name === "psychic") {
            return (
              <span className="psychic">{type.type.name.toUpperCase()}</span>
            );
          } else if (type.type.name === "ice") {
            return <span className="ice">{type.type.name.toUpperCase()}</span>;
          } else if (type.type.name === "dragon") {
            return (
              <span className="dragon">{type.type.name.toUpperCase()}</span>
            );
          } else if (type.type.name === "dark") {
            return <span className="dark">{type.type.name.toUpperCase()}</span>;
          } else if (type.type.name === "fairy") {
            return (
              <span className="fairy">{type.type.name.toUpperCase()}</span>
            );
          }
        })}
      </p>
    </div>
  );
};

export default PokemonCard;
