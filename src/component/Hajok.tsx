import Hajo from './Hajo'
import { type HajoTipus } from '../adat'    
interface HajoListaProps {
    lista: HajoTipus[]
}
export default function Hajok({lista}: HajoListaProps ) {
    return (
        <>
        {
            lista.map((e,i) => {
                return <Hajo hajom={e} key={i} />  
            }) 
        } 
          
        </>
    );
}