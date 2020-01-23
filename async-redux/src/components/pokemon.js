import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import PokemonCard from "./pokemon-card";

import { fetchPokemon } from "../actions";

const Pokemon = props => {
  console.log(props, "props on line 8");

  const [searchParams, setSearchParams] = useState("default");

  const handleClick = e => {
    setSearchParams(e.target.value);
  };

  return (
    <div>
      <button onClick={props.fetchPokemon}>Get Pokémon</button>
      <select onClick={handleClick}>
        <option value="default">Default</option>
        <option value="shiny">Shiny</option>
      </select>
      {!props.pokemon && !props.isLoading && <h2>There is nothing to display</h2>}
      {props.isLoading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      {props.pokemon && !props.isLoading && searchParams === "default" && (
        <PokemonCard
          pokemon={props.pokemon}
          sprite={props.pokemon.sprites.front_default}
        />
      )}
      {props.pokemon && !props.isLoading && searchParams === "shiny" && (
        <PokemonCard
          pokemon={props.pokemon}
          sprite={props.pokemon.sprites.front_shiny}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    pokemon: state.pokemon,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchPokemon })(Pokemon);
