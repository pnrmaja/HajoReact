
import './App.css'
import { HAJOLISTA, type HajoTipus } from "./adat";
import Hajok from './component/Hajok'

function App() {
  const [lista:HajoTipus[],listaFuggveny ]=HAJOLISTA
 
  function kivalasztKezelo(index:number){
    console.log(index)
    /* megváltoztatjuk az indexedik. hajó szinét */
    lista[index].szin="Hupilila"
    /* állapotkezelés kell  */

  }

  return (
    <>{/* React fragment */}
      <header>
        <h1>Hurrá React</h1>
      </header>

      <article>
        {/* ide kerül a hajó */}
        <Hajok lista={lista} kivalasztKezelo={kivalasztKezelo} />{/* függvény referencia */}
      </article>
      <footer> <p>Saját név</p></footer>
    </>
  )
}

export default App
