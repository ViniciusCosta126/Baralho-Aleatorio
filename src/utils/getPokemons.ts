

export default async function getPokemons(){
    const base_url = "https://pokeapi.co/api/v2/pokemon";
    var teste = []
    for (let index = 0; index < 6; index++) {
      const id = Math.floor(Math.random() * (1152 - 2) + 2);
      const data = await fetch(`${base_url}/${id}`);
      const pokemon = await data.json();
      teste.push(pokemon)
    }
    return teste
}
