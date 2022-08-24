import { useMemo, useState } from "react";
import { Pokemon } from "../../types/Pokemon";
import formatDescription from "../../utils/formatDescription";
import * as C from "./style";

interface Props {
  pokemon: Pokemon;
  pontuacao: number;
}
const Card = ({ pokemon, pontuacao }: Props) => {
  const [pontuacaomemorizada, setPontuacaomemorizada] = useState(pontuacao);
  const memorizedPontuacao = useMemo(
    () => pontuacaomemorizada,
    [pontuacaomemorizada]
  );
  return (
    <C.Container>
      <img src={pokemon.sprites.front_default} alt="pokemon" />
      <div>
        <h3>{pokemon.name}</h3>
        <p>{formatDescription(pokemon)}</p>
        <C.PontuacaoContainer pontos={memorizedPontuacao}>
          <p>Pontuação:</p>
          <span>{memorizedPontuacao}/10</span>
        </C.PontuacaoContainer>
      </div>
    </C.Container>
  );
};

export default Card;
