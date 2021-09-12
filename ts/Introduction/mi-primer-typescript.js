"use strict";
class Animal {
    constructor(patas, _especie) {
        this._especie = _especie;
        this._patas = patas;
    }
    dameLaEspecie() {
        return this._especie;
    }
}
const alacran = new Animal(8, "Arácnido");
console.log(alacran.dameLaEspecie());
function muestraMiCoche(coche) {
    console.log(coche.modelo);
    return coche.marca;
}
const fecha = new Date();
let saludo = "hola";
const coche = {
    marca: "Mitsubishi",
    modelo: "Mirage",
    color: "rojo"
};
if (!!fecha) {
    saludo = undefined;
}
console.log(`${saludo?.toUpperCase() ?? ''} Manuel`);
muestraMiCoche(coche);
// const contenedor = document.querySelector<HTMLDivElement>(".content");
// contenedor.style.backgroundPositionX
