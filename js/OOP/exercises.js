function UnCocheConPrototipos(marca, modelo, color, velocidades) {
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
  this.velocidades = velocidades;
}

UnCocheConPrototipos.prototype.muestraDetalles = function() {
  return `El coche es un ${this.marca}, ${this.modelo} color ${this.color} con ${this.velocidades} velocidades`;
};

UnCocheConPrototipos.prototype.muestraColor = function() {
  return this.color;
};

class UnCoche {
  marca;
  modelo;
  color;
  velocidades;

  constructor(marca, modelo, color, velocidades) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.velocidades = velocidades;
  }

  muestraDetalles() {
    return `El coche es un ${this.marca}, ${this.modelo} color ${this.color} con ${this.velocidades} velocidades`;
  }

  muestraColor() {
    return this.color;
  }
}


// "Amigo" => "Amigos"
// "Amigues" => "Amigues"
String.prototype.pluralizar = function() {
  return this.valueOf().endsWith('s') ? this.valueOf() : `${this.valueOf()}s`;
}

Number.prototype.esPar = function() {
  return this.valueOf() % 2 === 0;
}

console.log("Esta es una prueba".pluralizar());

console.log((10).esPar());

// quita(4)
Array.prototype.quita = function(indice) {
  if (indice === null || indice === undefined || isNaN(indice) || indice < 0 || indice >= this.length) {
    throw Error(`El indice ${indice} no existe`);
  }
  return this.splice(indice, 1)[0];
}

const miCoche2 = new UnCocheConPrototipos('Mitsubishi', 'Mirage', 'Azul', 5);
const miCoche = new UnCoche('Mitsubishi', 'Mirage', 'Azul', 5);

// console.log(miCoche);

// Función nombrada
function miFunction() {
  // Crea un nuevo scope
  console.log(this);
}

// Arrow function
const miFunction2 = () => {
  // Mantiene el scope "anterior"
  console.log(this);
};

const coches = [
  new UnCoche('Ferrari', 1, 'Rojo', 7),
  new UnCoche('Lamborguini', 1, 'Azul', 8),
  new UnCoche('Mitsubishi', 1, 'Amarillo', 6),
  new UnCoche('Ferrari', 2, 'Verde', 10),
];

function cochesConAltasVelocidades(coche) {
  return coche.velocidades >= 8;
}

const cochesMamados = coches.filter(cochesConAltasVelocidades).map(coche => coche.muestraColor());

console.log(cochesMamados);

console.log(miCoche.muestraDetalles());
console.log(miCoche.muestraColor());

console.log(Object.keys(miCoche), Object.values(miCoche));
console.log(Object.entries(miCoche));
