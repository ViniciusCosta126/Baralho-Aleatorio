import * as C from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { PokemonContextGlobal } from "../../types/Pokemon";
import { PokemonContext } from "../../providers/auth";

const Home = () => {
  const { fetchPokemons } = useContext(
    PokemonContext
  ) as PokemonContextGlobal;
  const [nome, setNome] = useState<string>("");
  const navigate = useNavigate()

  useEffect(() => {
    fetchPokemons()
  }, []);

  function handleClick(){
    if(nome !== ""){
      navigate(`/cards/${nome}`)
    }else{
      alert("Nome nao pode ser vazio")
    }
  }
  return (
    <C.Container>
      <C.ContainerForm>
        <C.InputForm
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
          <C.ButtonSubmit onClick={()=>handleClick()}>Ver Cartas</C.ButtonSubmit>
      </C.ContainerForm>
    </C.Container>
  );
};

export default Home;
