
# Project Ldotcom

This project is an example application that uses Express.js and Mongoose to create a backend server for a social network.

These dependencies were used:
- "bcryptjs": "^2.4.3"
- "dotenv": "^16.4.5"
- "express": "^4.18.3"
- "express-fileupload": "^1.5.0"
- "fs-extra": "^11.2.0"
- "jsonwebtoken": "^9.0.2"
- "mongodb": "^6.5.0"
- "mongoose": "^8.2.2"
- "nodemon": "^3.1.0"
- "zod": "^3.22.4"

# Deploy

After cloning the repository and installing the dependencies, you can use the command `npm run start` to start the server.

## Changes

### v0.0.1

- Installed necessary dependencies.
- Started the Express server.

### v0.0.2

- Created the first test routes.
- Bug fixes and code improvements.

### v0.0.3

- Implemented routes on the server for testing.
- Bug fixes and code improvements.

### v0.0.4

- Created the Mongoose model for users.
- Implemented Zod schema for user data validation.
- Bug fixes and code improvements.

### v0.0.5

- Created schema to validate post data.
- Bug fixes and code improvements.

### v0.0.6

- Created controllers for user and post routes.
- Created the post model.
- Bug fixes and code improvements.

### v0.0.7

- Connected to the database.
- Bug fixes and code improvements.

### v0.0.8

- Implemented controllers in the user route.
- Bug fixes and code improvements.

### v0.0.9

- Updated controllers to allow CRUD operations for users and posts.
- Bug fixes and code improvements.

### v0.0.10

- Created and implemented validation middleware to include Zod schemas in routes.
- Bug fixes and code improvements.

### v0.0.11

- Introduced validation schema within the "create post" route.
- Bug fixes and code improvements.

### v0.0.12

- Created the role controller.
- Created roles through the `initialSetUp.js` file.
- Bug fixes and code improvements.

### v0.0.13

- Created the login controller.
- Bug fixes and code improvements.

### v0.0.14

- Created middleware to validate roles.
- Bug fixes and code improvements.

### v0.1.0

- Included role and user verification in the `verifySignUp.js` file.

## Contribution

If you'd like to contribute to the project, please open an issue to discuss the proposed changes or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---


# [Español]

# Proyecto Ldotcom
Este proyecto es una aplicación de ejemplo que utiliza Express.js y Mongoose para crear un servidor backend para una red social.

Se usaron estas dependencias:
- "bcryptjs": "^2.4.3"
- "dotenv": "^16.4.5"
- "express": "^4.18.3"
- "express-fileupload": "^1.5.0"
- "fs-extra": "^11.2.0"
- "jsonwebtoken": "^9.0.2"
- "mongodb": "^6.5.0"
- "mongoose": "^8.2.2"
- "nodemon": "^3.1.0"
- "zod": "^3.22.4"

# Deploy

Luego de clonar el repositorio e instalar las dependencias, puedes usar el comando `npm run start` para iniciar el servidor.

## Cambios

### v0.0.1

- Se instalaron las dependencias necesarias.
- Se inició el servidor de Express.

### v0.0.2

- Se crearon las primeras rutas de prueba.
- Arreglo de bugs y código.

### v0.0.3

- Se implementaron las rutas en el servidor para realizar pruebas.
- Arreglo de bugs y código.

### v0.0.4

- Se creó el modelo de Mongoose para los usuarios.
- Se implementó el esquema de Zod para la validación de los datos de usuarios.
- Arreglo de bugs y código.

### v0.0.5

- Se creó el esquema para validar los datos de los posteos.
- Arreglo de bugs y código.

### v0.0.6

- Se crearon los controladores de las rutas de usuarios y posteos.
- Se creó el modelo de posteos.
- Arreglo de bugs y código.

### v0.0.7

- Se realizó la conexión a la base de datos.
- Arreglo de bugs y código.

### v0.0.8

- Se implementaron los controladores en la ruta de usuarios.
- Arreglo de bugs y código.

### v0.0.9

- Se actualizaron los controladores para permitir el CRUD de usuarios y posteos.
- Arreglo de bugs y código.

### v0.0.10

- Se creó e implementó el middleware de validación para incluir los esquemas de Zod dentro de las rutas.
- Arreglo de bugs y código.

### v0.0.11

- Se introdujo el esquema de validación dentro de la ruta "crear post".
- Arreglo de bugs y código.

### v0.0.12

- Se creó el controlador para los roles.
- Se crearon los roles a través del archivo `initialSetUp.js`.
- Arreglo de bugs y código.

### v0.0.13

- Se creó el controlador para loguearse.
- Arreglo de bugs y código.

### v0.0.14

- Se creó el middleware para validar los roles.
- Arreglo de bugs y código.

### v0.1.0

- Se incluyó la verificación de roles y usuarios en el archivo `verifySignUp.js`.


## Contribución

Si deseas contribuir al proyecto, por favor abre un *issue* para discutir los cambios propuestos o envía una solicitud de *pull request*.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
