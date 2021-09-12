type Coche = {
  marca: string;
  modelo: string;
  color: string;
  velocidades?: number;
};

class Animal {
  private _patas: number;

  public constructor(patas: number, private _especie: string) {
    this._patas = patas;
  }

  public dameLaEspecie(): string {
    return this._especie;
  }
}

const alacran = new Animal(8, "Arácnido");
console.log(alacran.dameLaEspecie());

function muestraMiCoche(coche: Coche): string {
  console.log(coche.modelo);
  return coche.marca;
}

const fecha: Date = new Date();

let saludo: string | undefined = "hola";
const coche: Coche = {
  marca: "Mitsubishi",
  modelo: "Mirage",
  color: "rojo"
};
if (!!fecha) {
  saludo = undefined;
}
console.log(`${ saludo?.toUpperCase() ?? '' } Manuel`);
muestraMiCoche(coche);

// const contenedor = document.querySelector<HTMLDivElement>(".content");
// contenedor.style.backgroundPositionX
