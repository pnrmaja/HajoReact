import './Hajo.css'
import {  type HajoTipus } from '../adat';
interface HajoProps {
  hajom: HajoTipus,
  index:number,
  kivalasztKezelo:()=>void
}
/* props - a szülőkompőonens a gyerekelemnek props-on keresztül adja át aparamétert */

export default function Hajo({hajom,index,kivalasztKezelo}:HajoProps) {
 

    return (
        <>{/* React fragment */}
            <div className="hajo">
                <h2>{hajom.nev}</h2>
                <p>{index+1}. hajó</p>
                <p><span>Kapitány neve:</span>{hajom.kapitany}</p>
                <p><span>Hajó színe:</span>{hajom.szin}</p>
                <button onClick={()=>{kivalasztKezelo(index)}}>Kiválaszt</button>
            </div>
        </>
    )
}


