# Calculadora de Ayuno Intermitente

## Descripción
Aplicación web estática que permite calcular el horario exacto de finalización de un ayuno intermitente, tomando como base la última comida registrada y el objetivo en horas. El proyecto cuenta con una separación limpia de responsabilidades (HTML, CSS y JavaScript) y está completamente dockerizado.

## Tecnologías utilizadas
* **Frontend:** HTML5, CSS3, Vanilla JavaScript.
* **Infraestructura:** Docker (Imagen Nginx versión Alpine).
* **Orquestación:** Docker Compose.

## Requisitos previos
Para ejecutar este proyecto de manera local, es necesario contar con:
* Git
* Docker Desktop o Docker Engine

## Pasos de instalación y ejecución

1. **Clonar el repositorio**

    ```git clone https://github.com/gonzagalvan/calculadora-ayuno.git```

    ```cd calculadora-ayuno```

2. **Ejecución con Docker Compose**

    Para construir la imagen automáticamente, inyectar las variables de entorno y levantar el contenedor en segundo plano, ejecutá:

   ```docker compose up -d```

3. **Ejecución manual con Docker CLI (Alternativa)**
    
    Si preferís compilar y correr el contenedor de forma tradicional sin usar Compose, ejecutá estos dos comandos:

   ```docker build -t calculadora-ayuno .```

   ```docker run -d -p 8080:80 --name app-ayuno calculadora-ayuno```

3. **Verificación**

    Abrí un navegador web y accedé a la siguiente dirección para comprobar que la aplicación funciona correctamente:

    ```http://localhost:8080```
