import * as C from "./style";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { PokemonContextGlobal } from "../../types/Pokemon";
import { PokemonContext } from "../../providers/auth";

const Home = () => {
  const { pokemons, fetchPokemons,fetchNewPokemon, shuffleCards } = useContext(
    PokemonContext
  ) as PokemonContextGlobal;
  const [nome, setNome] = useState<string>("");
  useEffect(() => {
    fetchPokemons()
  }, []);
  return (
    <C.Container>
      <C.ContainerForm>
        <C.InputForm
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Link to={`/cards/${nome}`}>
          <C.ButtonSubmit>Ver Cartas</C.ButtonSubmit>
        </Link>
      </C.ContainerForm>
    </C.Container>
  );
};

export default Home;
