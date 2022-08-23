export interface Pokemon {
  id: number;
  weight: number;
  name: string;
  sprites: {
    front_default:string
  };
  height:number,
  abilities:[],
  moves:[],
  types:[]

}

export type PokemonContextGlobal = {
    pokemons:Pokemon[],
    fetchPokemons: ()=>void
    fetchNewPokemon:()=>void
    shuffleCards: ()=>void
}