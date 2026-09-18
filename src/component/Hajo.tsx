import { type HajoTipus} from '../adat';
import './Hajo.css'
interface HajoProps {
    hajom: HajoTipus
}
/* props- a szülőkomponens a gyerekelemnek propson keresztül adja át a paramétert */
 export default function Hajo({ hajom }: HajoProps) {
    
    return (
        <div className="hajo">
            <h2>{hajom.nev}</h2>
            <p><span>Kapitány neve: </span>{hajom.kapitany}</p>
            <p><span>Hajó színe: </span>{hajom.szin}</p>
            <button>Kiválaszt</button>
        </div>
 
    );
}
