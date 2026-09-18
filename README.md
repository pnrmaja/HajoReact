# Hajók projekt
React alapok
Mi az a Vite?
A Vite egy modern fejlesztői és buildeszköz webes projektekhez. Segítségével gyorsan létrehozhatunk például React-projektet. Fejlesztés közben helyi szervert indít, és a kód módosításait gyorsan megjeleníti a böngészőben. A kész alkalmazásból optimalizált, publikálható fájlokat is elő tud állítani.

A Vite nem a React része: egy külön eszköz, amely előkészíti és futtatja a projektet.

További fogalmak
Vite: fejlesztői és buildeszköz. Fejlesztői szervert indít, kezeli a gyors frissítést, és elkészíti a publikálható alkalmazást. npm: csomagkezelő. Csomagokat telepít és kezeli a projekt függőségeit. npx: csomagfuttató. Egy npm-csomag parancsát futtatja anélkül, hogy globálisan telepítenénk.

React telepítés TypeScripttel
npm create vite@latest elso-projekt

az npm create elindítja a create-vite projektgeneráló csomagot;
a create-vite létrehozza a projektet;
a létrehozott projekt a Vite fejlesztői és - buildeszközt használja.
TypeScript típusok: interface vs type
Miért TypeScript?
A TypeScript a JavaScriptre épül, csak típusellenőrzéssel egészíti ki azt. Segítségével sok hibát már kódírás közben észrevehetünk, nem csak az alkalmazás futtatásakor.

Előnyei:

jelzi, ha rossz típusú értéket használunk;
ellenőrzi az objektumok tulajdonságait;
segíti az automatikus kódkiegészítést;
biztonságosabbá teszi a kód módosítását;
nagyobb projektekben átláthatóbbá teszi az adatok szerkezetét;
megkönnyíti a közös munkát azzal, hoyg rögzítjk előre a típusokat és az objektum szerkezeteket.
A TypeScriptben az interface és a type is lehetővé teszi típusok leírását, de más célra jók.

interface használata
Az interface főként objektumok alakjának leírására való.

interface Hajo {
  nev: string;
  kapitany: string;
  szin: string;
}
Használható például React props objektumokhoz:

interface HajoKartyaProps {
  hajo: Hajo;
}
Az interface előnye, hogy jól olvasható, és objektumoknál nagyon kényelmes a bővítés.

type használata
A type különösen jó union és literal típusokhoz, valamint összetett típusok kombinálásához.

type HajoSzin = 'fekete' | 'kék' | 'piros' | 'fehér' | 'zöld';
Vagy:

type Hajo = {
  nev: string;
  szin: HajoSzin;
};
Mikor melyiket használjam?
interface: objektumokhoz, props-okhoz, API adatokhoz
type: unionokhoz, literal típusokhoz, összetett kombinációkhoz
Praktikus ajánlás ebben a projekben
A hajó adatmodellnél interface a jó választás, a színnél pedig type union is nagyon megfelelő:

export type HajoSzin = 'fekete' | 'kék' | 'piros' | 'fehér' | 'zöld';

export interface Hajo {
  readonly id: number;
  nev: string;
  kapitany: string;
  valodi: boolean;
  szin: HajoSzin;
  leiras: string;
}
A REACT ELSŐ HÁROM ÉPÍTŐKÖVE: ELEMEK, KOMPONENSEK ÉS JSX
React három alapvető építőeleme:

a React-elemek (elements); leírja, hogy mi fog megjelenni a képernyőn
az elemeket leíró JSX nyelv;
az elemekből felépülő React-komponens (component). React elemekből, és JS kódból épül fel, képes kommunikálni a többi komponenssel, paramétereket kaphat.
JSX: JAVASCRIPT + XML
A JSX egy „syntax extension”, amellyel HTML-szerűen írhatunk a JavaScriptünkbe. Rendereléskor a React JS kóddá alakítja. NEM HTML! Az alábbi React kód létrehoz ez h1 tag-et egy class névvel, és beleírja a Hello, react szöveget.
const heading = React.createElement('h1', {className: 'site-heading'}, 'Hello, React!') A fenti React kód JSX-szel úgy írható, mintha html kódot írnánk:

const heading = <h1 className="site-heading">Hello, React</h1>
className – a JS foglalt kulcsszava, ezzel adhatunk class nevet egy html elemnek.
A JS-ben megszokottan használjunk camelCase szintaxist.
A zárótag nélküli elemeket zárjuk egy / jellel! 
{ } – jelek közé írhatunk js kódokat, illetve változókat is.
JavaScript kódokat a jsx-be a { kód } jelek közé írhatunk.

REACT KOMPONENSEK
A React legfontosabb építőegysége a komponens. A Reacttal épített appokban gyakorlatilag minden komponensekből áll. A komponens a UI egy önálló, újrafelhasználható darabja, amely egy jól körülírt feladatot lát el. A komponensek egymástól független, önmagukban megálló kóddarabok. A változókat szintén { valtozoNev } jelek közé írjuk.

Minden komponenshez csatolhatunk saját css fájlt, ha akarunk. Figyeljünk arra, hogy a css-ben csak azokat a formázásokat végezzük el, amelyekért az adott komponens felel.

PROPS
A props az a React-komponensnek átadott adatok csomagja: például egy objektum, amelyet a szülő komponens küld a gyermeknek, és a gyermek ezt a propokból olvassa ki. A prop-okat nem változtathatja meg a komponens. A props az adat, amit a szülőkomponens paraméterként átad a gyerek komponensnek.

Testvérelemek renderelése
Több azonos elem, komponens rendelerésekor figyelnünk kell arra, hogy minden elem saját egyedi azonosítót kapjon a key props-on keresztül.

State - állapotkezelés
Minden komponensnek lehet egy saját állapota, melyet a state reprezentál. A state állapotértékeinek megváltoztatásával automatikusan újragenerálódik a komponens. Függvénykomponensek esetén ehhez az úgynevezett useState hook-ot használjuk.

A useState() egy függvény, aminek a visszatérési értéke egy kételemű lista. A lista első tagja a változó neve, a második a változót beállító függvény. A useState paramétere lesz a változó kezdőértéke.

const [stateValtozo, setStateValtozotkezeloFuggveny] = useState("kezdoertek");
A stateValtozo tetszőleges változónév lehet. Ha erre a változóra hivatkozunk valahol a programban, akkor az az érték automatikusan frissül az oldalon, ha a program futása során változik az értéke.

A setStateValtozotkezeloFuggveny az a függvény, aminek a feladata, hogy megváltoztassa a hozzárendelt state változó értékét. **Csak ekkor fog frissülni az oldalon az adat, ha a változó értékét ezen keresztül változtatjuk. **

useState("kezdoertek") – ezzel párosítottuk össze a változót a függvénnyel és megadtuk neki a kezdőértéket.
