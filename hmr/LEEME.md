# Publicar la página (gratis)
## Opción A: sin GitHub (la más fácil)
1. Cuenta gratis en netlify.com > Sites > "Deploy manually" (Netlify Drop) y arrastra la carpeta `hmr` descomprimida.
2. Para actualizar: abre tusitio/admin, edita, pulsa "Descargar JSON", reemplaza `content.json` en la carpeta y vuelve a arrastrar la carpeta a Netlify (Deploys > arrastrar).
## Opción B: panel con token (editores sin cuenta)
1. UNA persona crea cuenta en github.com y un repositorio (privado o público); sube el contenido de la carpeta.
2. En netlify.com: "Import from Git" y elige ese repositorio (sin comando de build). Cada cambio se publica solo.
3. En GitHub: Settings > Developer settings > Fine-grained tokens > Generate. Limita el token a ESE repositorio con permiso "Contents: Read and write". Ponle fecha de caducidad.
4. Entra a tusitio/admin, escribe usuario/repositorio y el token (solo la primera vez en cada dispositivo; queda guardado hasta "Cerrar sesión"). Edita y pulsa "Publicar cambios". Para que los editores solo pongan el token, escribe el repositorio en DEF_REPO dentro de admin/index.html.
## Seguridad
Quien tenga el token puede modificar el contenido de ese repositorio. Compártelo solo con editores de confianza y revócalo en GitHub si se filtra. No lo pegues en grupos.
## Google
Registra el sitio en search.google.com/search-console y solicita indexar la portada.
## Horarios
Panel > sección Tiendas o Grupos > campo "Horario o etiqueta". En "Puntos de bienvenida" las palabras zepeto, canal e instagram muestran los botones; no las borres.
