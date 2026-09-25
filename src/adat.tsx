export type HajoSzin = 'fekete' | 'fehér' | 'piros' | 'kék' | 'zöld' | 'Hupilila' 

export interface HajoTipus {
    readonly id: number
    nev: string
    kapitany: string
    valodi: boolean
    szin: HajoSzin
    leiras: string
}

export const HAJOLISTA: HajoTipus[] = [
    {   
        id:11,
        nev:"Fekete Gyöngy",
        szin: "fekete",
        kapitany: "Jack Sparrow",
        valodi:false,
        leiras:"ez egy szuper gyors hajó a Karib-tengerről"
    },
    {
        id:15,
        nev:"Bolygó Hollandi",
        szin: "zöld",
        kapitany: "Davy Jones",
        valodi:false,
        leiras:"hwdo nbo iao nabkj ajk"
    },
    {
        id:19,
        nev:"Titanic",
        szin: "fehér",
        kapitany: "Leonardo Di Caprio",
        valodi:true,
        leiras:"Egy elsüllyeszthetetlen hajó, ami még is elsüllyedt a tengeren"
    }
]