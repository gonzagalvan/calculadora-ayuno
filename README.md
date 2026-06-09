# Calculadora de Ayuno Intermitente

## Descripción
Aplicación web estática que permite calcular el horario exacto de finalización de un ayuno intermitente, tomando como base la última comida registrada y el objetivo en horas.

## Tecnologías utilizadas
* Frontend: HTML5, CSS3, Vanilla JavaScript.
* Infraestructura: Docker (Imagen Nginx versión Alpine).

## Requisitos previos
Para ejecutar este proyecto de manera local, es necesario contar con:
* Git
* Docker Engine o Docker Desktop

## Pasos de instalación y ejecución

1. **Clonar el repositorio**

    git clone https://github.com/gonzagalvan/calculadora-ayuno.git

    cd calculadora-ayuno

2. **Construcción de la imagen Docker**

    Ejecutá el siguiente comando en la raíz del proyecto para construir la imagen personalizada utilizando el Dockerfile:

    docker build -t calculadora-ayuno .

3. **Ejecución del contenedor**

    Una vez construida la imagen de forma exitosa, levantá el contenedor mapeando el puerto 8080 de tu máquina local al puerto 80 interno del contenedor:

    docker run -d -p 8080:80 --name app-ayuno calculadora-ayuno

4. **Verificación**

    Abrí un navegador web y accedé a la siguiente dirección para comprobar que la aplicación funciona correctamente:

    http://localhost:8080
