
import { useState } from 'react';
import './App.css'
import { HAJOLISTA, type HajoTipus } from "./adat";
import Hajok from './component/Hajok'

function App() {
  const [lista,setLista ]=useState<HajoTipus[]>(HAJOLISTA) /* állapotkezelés */
 
  function kivalasztKezelo(index:number){
    console.log(index)
    /* megváltoztatjuk az indexedik. hajó szinét */
    lista[index].szin="Hupilila"
    /* állapotkezelés kell  */
    //1. Új változó abba bemásoljuk a lista tartalmát
    const ujLista:HajoTipus[]=[...lista] // így egy teljesen új lista jön létre, egy új memóriaterületen.
    //2. az új válzózó értéket változtatjuk meg
    ujLista[index].szin="Hupilila"
    //3. A megváltoztatott új változót értékét beállító függvénnyel visszamásoljuk
    setLista(ujLista)
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
