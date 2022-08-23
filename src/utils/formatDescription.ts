import { Pokemon } from "../types/Pokemon";

export default function formatDescription(data: Pokemon) {
  let peso = String((data.weight * 0.453).toFixed(2)).replace(".", ",");
  const description = `O pokemon ${
    data.name
  } tem peso inicial de ${peso} gramas e altura de ${(
    data.height * 2.54
  ).toFixed(2)}cm! Possui ${
    data.abilities.length > 1
      ? data.abilities.length + " habilidades"
      : data.abilities.length + " habildiade"
  } e ${
    data.moves.length
  } movimentos diferentes e tambem pode ser encontrado em ${
    data.types.length > 1 ? data.types.length + " diferentes tipos" : data.types.length + " diferente tipo"
  } `;
  return description;
}
