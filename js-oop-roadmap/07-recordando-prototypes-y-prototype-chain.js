/*
📌 CADENA DE PROTOTIPOS EN JAVASCRIPT

En JavaScript, todos los objetos tienen un prototype.
Esto permite que las instancias hereden propiedades y métodos de otra función constructora.

Este ejemplo muestra cómo funciona la herencia clásica con prototypes.
*/

/* =========================
   FUNCION CONSTRUCTORA A (SUPERCLASE)
========================= */
function A() {}

// Agregamos un método al prototype de A
// Todas las instancias de A (o de quien herede A) tendrán acceso a este método
A.prototype.methodA = function () {
  console.log("Método de la clase A");
};

/* =========================
   FUNCION CONSTRUCTORA B (SUBCLASE)
========================= */
function B() {}

// Herencia de prototipo:
// Hacemos que B.prototype herede de A.prototype
// Todas las instancias de B también podrán usar los métodos de A
B.prototype = Object.create(A.prototype);

// Por defecto, B.prototype.constructor se vuelve A después de la línea anterior
// Corregimos el constructor para que apunte a B
B.prototype.constructor = B;

/* =========================
   CREACIÓN DE INSTANCIAS Y TEST
========================= */
const b = new B();

// instanceof verifica la herencia
console.log(b instanceof B); // true → b fue creado con new B()
console.log(b instanceof A); // true → b hereda de A también

// Podemos llamar al método heredado de A
b.methodA(); // Método de la clase A