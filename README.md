# ActaNexus Landing Page

Este proyecto es una página estática (HTML, CSS y JS) sin dependencias de Node.

## Requisitos previos
- Navegador web moderno
- Opcional: Python 3 si quieres servir los archivos en un puerto local

## Cómo ejecutar
1. Clona o descarga este repositorio.
2. Desde la raíz del proyecto tienes dos opciones:
   - Abrir directamente `index.html` en tu navegador (doble clic o arrastrando el archivo).
   - O bien levantar un servidor local para evitar restricciones de CORS:
     ```bash
     python3 -m http.server 8000
     ```
     Luego abre `http://localhost:8000` en el navegador.

No es necesario ejecutar `node script.js`; el archivo `script.js` se carga automáticamente al abrir `index.html` en el navegador.
