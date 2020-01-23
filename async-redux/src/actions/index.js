import axios from "axios";

export const FETCHING_POKEMON_START = "FETCHING_POKEMON_START";
export const FETCHING_POKEMON_SUCCESS = "FETCHING_POKEMON_SUCCESS";
export const FETCHING_POKEMON_FAILURE = 'FETCHING_POKEMON_FAILURE';

export const fetchPokemon = () => dispatch => {
  dispatch({ type: "FETCHING_POKEMON_START" });
  axios
    .get(`https://pokeapi.co/api/v2/pokemon`)
    .then(res => {
      // console.log(res)
      dispatch({ type: "FETCHING_POKEMON_SUCCESS", payload: res.data.results });
    })
    .catch(err => {
      dispatch({ type: "FETCHING_POKEMON_FAILURE", payload: err });
    });
};
