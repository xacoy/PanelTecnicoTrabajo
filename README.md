# Panel Técnico - Gestor Diario

Panel local (HTML + CSS + JS, sin dependencias) con enlaces, gestor de actuaciones por trimestre y notas.

## Uso

Abre `index.html` en el navegador. Todos los datos se guardan en el `localStorage` del navegador; nada se envía a ningún servidor.

## Tus datos

El repositorio solo contiene datos de ejemplo.

- **Copia de seguridad:** `💾 Backup` descarga un `.json` con enlaces, notas y actuaciones. `📂 Cargar` lo restaura. Esos archivos están en `.gitignore`: no los subas.
- **Color de cada enlace:** al editar o crear un enlace puedes elegir su color de resaltado (o dejar el de la categoría).
- **Enlaces por defecto:** si sirves la carpeta por HTTP (por ejemplo `python -m http.server`), el panel lee `data/links.json` (ignorado por git) y, si no existe, `data/links.example.json`. Con `file://` el navegador bloquea esa lectura; usa entonces `Cargar`.
- **Datos del informe impreso:** `⚙️ Herramientas > 👤 Datos del informe` (nombre, unidad y localidad).

## Temas y apartados

Menú **⋯** > Tema de color: 18 temas a elegir. Los botones Enlaces / Gestor / Notas de la barra superior muestran u ocultan cada apartado. La versión aparece junto al título.
