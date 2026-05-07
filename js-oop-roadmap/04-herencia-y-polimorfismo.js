/*
📌 HERENCIA Y POLIMORFISMO EN JAVASCRIPT

Herencia:
Permite que una clase "hija" reutilice atributos y métodos de una clase "padre",
evitando repetir código y facilitando mantenimiento y extensión del programa.

Polimorfismo:
Permite que un mismo método se comporte diferente según la clase que lo implemente.
*/

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} hace un sonido.`;
    }
}

class Dog extends Animal {
    // Polimorfismo: modificamos el método speak para Dog
    speak() {
        return `${this.name} ladra.`;
    }
}

class Cat extends Animal {
    constructor(name, breed) {
        super(name); // Llama al constructor de la clase padre (Animal)
        this.breed = breed;
    }

    // Polimorfismo: sobrescribimos speak pero podemos usar super para mantener parte del comportamiento original
    speak() {
        return super.speak(); // Usa el método speak de Animal
    }
}

class Rabbit extends Animal {
    // No define constructor, usa el de la clase padre
    // No sobrescribe speak(), así que mantiene el comportamiento de Animal
}

// ==========================
// Creando y probando los objetos

const dog = new Dog('Rex');
console.log(dog.speak()); // Rex ladra.

const cat = new Cat('Firulais', 'SRD');
console.log(cat.speak()); // Firulais hace un sonido.

const rabbit = new Rabbit('Conejito');
console.log(rabbit.speak()); // Conejito hace un sonido.