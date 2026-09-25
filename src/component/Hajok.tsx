
import Hajo from "./Hajo";
import {  type HajoTipus } from '../adat';
interface HajoListaProps {
  lista: HajoTipus[],
  kivalasztKezelo:()=>void

}
export default function Hajok({lista,kivalasztKezelo}:HajoListaProps){

    return (
        <>
        {
            lista.map((e,i)=>{
                return  <Hajo hajom={e} key={i}  index={i} kivalasztKezelo={kivalasztKezelo}/>
            })

        }
          
      
        </>
    )
}