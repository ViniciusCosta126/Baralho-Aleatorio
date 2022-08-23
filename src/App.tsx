import Rotas from './routes/index'
import PokemonProvider,{PokemonContext} from './providers/auth'

function App() {
  return (
    <PokemonProvider>
      <Rotas/>
    </PokemonProvider>
  )
}

export default App
