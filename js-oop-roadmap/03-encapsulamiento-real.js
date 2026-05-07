/*
📌 ENCAPSULACIÓN EN JAVASCRIPT

La encapsulación es un principio de la POO que consiste en
proteger los datos internos de un objeto.

👉 La idea es que no se pueda acceder directamente a ciertos datos,
   sino solo a través de métodos controlados.
*/

class User {
    #password; // propiedad privada real (no accesible desde fuera)

    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.#password = password;
    }

    /*
    📖 Método para leer la contraseña de forma controlada
    */
    getPassword() {
        return this.#password;
    }

    /*
    ✏️ Método para cambiar la contraseña con validación básica
    */
    setPassword(newPassword, oldPassword) {
        if (this.#password !== oldPassword) {
            throw new Error('La contraseña antigua no es correcta');
        }

        this.#password = newPassword;
    }
}


/*
📌 Ejemplo de uso
*/
const user = new User('Kauan', 'email@test.com', '123456');

console.log(user.getPassword());

user.setPassword('nuevaClave123', '123456');

console.log(user.getPassword());


/*
========================================================
📌 IMPORTANTE
========================================================

❌ Esto NO funciona:
   user.#password

Porque es una propiedad privada real.

👉 Solo se puede acceder desde dentro de la clase.
*/