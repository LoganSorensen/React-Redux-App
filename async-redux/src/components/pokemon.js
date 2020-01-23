import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { fetchPokemon } from "../actions";

const Pokemon = props => {
  return (
    <div>
      <button onClick={props.fetchPokemon}>Get Pokemon</button>
      {props.isLoading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
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
