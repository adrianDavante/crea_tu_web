## HERRAMIENTAS ÚTILES
1. ICONOS SVG: https://www.svgrepo.com/
2. COMPRIMIR UNA IMAGEN: https://squoosh.app/
3. COMPRIMIR VARIAS IMÁGENES: https://tinypng.com/
4. MEDIR PERFORMANCE, ACCESIBILIDAD, BUENAS PRÁCTICAS Y SEO: https://web.dev/measure/

## COPIAR UN REPOSITORIO DE GITHUB
Es importante tener en cuenta que para seguir esta guía debes tener enlazado Github con Visual Studio Code.

1. Copiar el enlace
Si queremos trabajar con un repositorio que un usuario de Github ha publicado, lo primero que debemos hacer es copiar el enlace HTTPS al mismo: https://github.com/nombreUsuario/nombre_repositorio.git

2. Clonar el repositorio en VS Code
Iremos a la terminal de VS Code y utilizaremos el siguiente comando para clonar el repositorio en nuestro equipo
```bash
git clone https://github.com/nombreUsuario/nombre_repositorio.git
```
3. Eliminar conexión con repositorio original
Una vez clonado en nuestro equipo, abrimos la carpeta con el proyecto y eliminamos la conexión al repositorio original:
```bash
git remote remove origin
```
4. Subimos el repositorio a nuestro Github
Desde "Control de código fuente", haremos un push a nuestro Github publicando el repositorio.


## GUARDAR CAMBIOS EN GITHUB
Comandos a utilizar para guardar cambios:
```bash
git add .
git commit -m "Mensaje descriptivo"
git push origin HEAD

# Si además queremos añadir tags para ir dando saltos en puntos clave de nuestro 
# desarrollo podemos incluirlas facilmente:
git tag nombre-tag
git push origin nombre-tag
```