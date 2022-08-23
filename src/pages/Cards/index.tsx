import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import * as C from "./styles";
import { PokemonContextGlobal } from "../../types/Pokemon";
import { PokemonContext } from "../../providers/auth";
import { useContext} from "react";

const Cards = () => {
  const { nome } = useParams();
  const { pokemons,fetchNewPokemon, shuffleCards } = useContext(
    PokemonContext
  ) as PokemonContextGlobal; 

  return (
    <C.Container>
      <C.Title>{nome}</C.Title>
      <C.CardsContainer>
        <C.ButtonsContainer  teste={pokemons.length == 8 ? true : false}>
          <button disabled={pokemons.length == 8 ? true : false}  className="pull-card" onClick={() => fetchNewPokemon()}>
            Puxar Carta
          </button>
          <button className="shuffle-cards" onClick={() => shuffleCards()}>
            Embaralhar Cartas
          </button>
        </C.ButtonsContainer>
        <C.ContentContainer>
          {pokemons.length > 0 ? pokemons.map((pokemon) => (
            <Card pontuacao={Math.floor(Math.random() * 10 + 1)} key={pokemon.id} pokemon={pokemon} />
          )):<h1>Carregando ...</h1>}
        </C.ContentContainer>
      </C.CardsContainer>
    </C.Container>
  );
};

export default Cards;
