import * as C from './style'
import {Link} from 'react-router-dom'
import { useState } from 'react'
const Home = () => {
  const [nome,setNome] = useState<string>('')

  return (
    <C.Container>
      <C.ContainerForm>
        <C.InputForm placeholder='Digite seu nome' value={nome} onChange={(e)=>setNome(e.target.value)}/>
        <Link to={`/cards/${nome}`}><C.ButtonSubmit>Ver Cartas</C.ButtonSubmit></Link>
      </C.ContainerForm>
    </C.Container>
  )
}

export default Home