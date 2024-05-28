# Guía de Uso de Docker Compose en Integración Continua

Este repositorio contiene una aplicación de integración continua utilizando Docker Compose. Aquí se proporciona una guía básica para ejecutar la aplicación y revisar el estado de los contenedores y redes Docker.

## Ejecución de la Aplicación

Para construir y ejecutar los contenedores de la aplicación, utiliza el siguiente comando:

```bash
docker-compose up --build
```

Este comando compila las imágenes de Docker necesarias y luego inicia los contenedores. La opción `--build` asegura que se construyan las imágenes incluso si ya existen.

## Verificación de los Contenedores en Ejecución

Para verificar qué contenedores están actualmente en ejecución, utiliza el siguiente comando:

```bash
docker-compose ps
```

Este comando muestra una lista de los servicios definidos en el archivo `docker-compose.yml` junto con su estado y los puertos mapeados.

## Revisión de las Redes Docker

Puedes verificar qué redes Docker están disponibles en tu sistema utilizando el siguiente comando:

```bash
docker network ls
```

Esto proporciona una lista de todas las redes Docker existentes en tu sistema, incluidas aquellas utilizadas por los contenedores en ejecución.

## Inspección de Contenedores en una Red Específica

Para ver qué contenedores están conectados a una red Docker específica, puedes utilizar el siguiente comando:

```bash
docker network inspect [NOMBRE DE LA RED]
```

Sustituye `[NOMBRE DE LA RED]` por el nombre de la red Docker que deseas inspeccionar. Este comando mostrará detalles sobre la red, incluidos los contenedores conectados a ella y su configuración.

¡Ahora estás listo para ejecutar la aplicación de integración continua y revisar el estado de los contenedores y redes Docker asociadas!
```

Este archivo proporciona una guía básica para utilizar Docker Compose en el contexto de una aplicación de integración continua, explicando cada comando de manera clara y concisa. Si necesitas más detalles o tienes alguna pregunta, no dudes en preguntar.