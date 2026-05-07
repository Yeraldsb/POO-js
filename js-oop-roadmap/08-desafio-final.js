/*************************************************************
 🧠 Desafío Final: Sistema Bancario con JavaScript POO
**************************************************************/

/*
🎯 Objetivo:
Crear un sistema bancario simple utilizando únicamente JavaScript puro
(sin bibliotecas externas), aplicando los pilares de la Programación
Orientada a Objetos (POO):

- Clases / funciones constructoras
- Getters y setters
- Encapsulamiento
- Herencia
- Polimorfismo
- Métodos estáticos
*/

/*************************************************************
🏦 Requisitos del Sistema
**************************************************************/

/*
1. Clase Account (Clase base)
--------------------------------------------------------

🔹 Propiedades:
- owner: titular de la cuenta
- balance: saldo de la cuenta (por defecto 0)
- #password: contraseña de la cuenta (privada, usando encapsulamiento real)

🔹 Métodos:
- deposit(amount): añade dinero al saldo
- withdraw(amount): retira dinero del saldo (con validaciones)
- getter balance: devuelve el saldo actual
- setter password: verifica que la contraseña tenga al menos 6 caracteres
*/

/*
2. SavingsAccount (Cuenta Ahorro)
----------------------------------

🔹 Hereda de: Account

🔹 Propiedad adicional:
- interestRate: tasa de interés

🔹 Método extra:
- applyInterest(): aplica la tasa de interés al saldo
*/

/*
3. CurrentAccount (Cuenta Corriente)
----------------------------------

🔹 Hereda de: Account

🔹 Propiedad adicional:
- overdraftLimit: límite de sobregiro

🔹 Sobrescritura de método:
- withdraw(): permite saldo negativo hasta el límite de sobregiro
*/

/*
4. Clase Bank
--------------

🔹 Propiedad:
- accounts: lista de cuentas registradas en el banco

🔹 Métodos:
- addAccount(account): agrega una cuenta a la lista
- findAccountByOwner(name): busca una cuenta por el nombre del titular
- transfer(from, to, amount): transfiere saldo entre cuentas

🔹 Método estático:
- static bankInfo(): devuelve un nombre ficticio del banco y año de fundación
*/

/*************************************************************
💡 Extras (desafío opcional para aumentar la complejidad)
**************************************************************/

/*
- Crear una clase Transaction para registrar el historial de transacciones
- Método getStatement() que muestra el extracto de movimientos de la cuenta
- Implementar bloqueo de cuenta después de 3 intentos de contraseña incorrecta
- Usar encapsulamiento real con # o Symbol para propiedades privadas
- Utilizar Object.defineProperty para personalizar getters/setters
- Usar Object.freeze() para proteger objetos contra modificaciones
*/

/*************************************************************
✅ Qué se debe evaluar / verificar
**************************************************************/

/*
1. POO básica:
- Creación de clases y objetos
- Uso de constructor y this

2. Getters y setters:
- balance debe leerse con getter
- password debe validarse con setter

3. Encapsulamiento:
- #password u otra forma de proteger datos
- No acceder directamente desde fuera de la clase

4. Herencia y polimorfismo:
- SavingsAccount y CurrentAccount heredan de Account
- CurrentAccount.withdraw() se comporta diferente (sobregiro permitido)

5. Métodos estáticos:
- Bank.bankInfo() funciona sin crear instancias

6. Comportamiento real:
- depositar, retirar, transferir y aplicar intereses funcionan correctamente
- Se manejan errores correctamente (saldo insuficiente, password inválida)
*/