import { createContext, useEffect, useState } from "react";
import { Pokemon, PokemonContextGlobal } from "../types/Pokemon";

export const PokemonContext = createContext<PokemonContextGlobal | null>(null);
const base_url = "https://pokeapi.co/api/v2/pokemon/";
const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const fetchPokemons = async () => {
    var data_new = [];
    for (let index = 0; index < 5; index++) {
      let id = Math.floor(Math.random() * 904 + 1);
      const data = await fetch(`${base_url}${id}`);
      const pokemon = await data.json();
      data_new.push(pokemon);
    }
    setPokemons(data_new);
  };

  const shuffleCards = () => {
    let new_data = [...pokemons];
    new_data.sort(() => Math.random() - 0.5);
    setPokemons(new_data);
  };

  const fetchNewPokemon = async () => {
    let id = Math.floor(Math.random() * 904 + 1);
    const data = await fetch(`${base_url}${id}`);
    const pokemon = await data.json();
    setPokemons([...pokemons, pokemon]);
  };

  return (
    <PokemonContext.Provider
      value={{ pokemons, fetchPokemons, fetchNewPokemon, shuffleCards }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
