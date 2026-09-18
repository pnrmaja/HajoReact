
import { HAJOLISTA } from './adat'
import './App.css' 
import Hajok from './component/Hajok'

function App() {

  return (
    <>
      <header>
        <h1>Hurrá react</h1>
      </header>
      <article>
        <p>{/* ide kerül a hajó*/}</p>
        <Hajok lista={HAJOLISTA} />
      </article>
      <footer>
        <p>Ponauer Maja</p>
      </footer>
    </>
  )
}

export default App
