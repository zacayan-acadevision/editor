# Instrucciones

- Tener instalado `nodejs`

- Abrir la terminal en visual studio code

- Instalar las dependencias

`npm install`

- Ejecutar 

`node .\server.js`

- Luego levantar el archivo `index.html` con live server

## COMANDOS DE GIT PARA TRAER LOS ULTIMOS CAMBIOS DEL REPOSITORIO REMOTO 

git remote -v (para ver a que repositorio remoto apunta)

git fetch --all (para traer los ultimos cambios del repositorio remoto)

git reset --hard origin/main (para ir al ultimo commit)

## COMANDOS DE GIT PARA GUARDAR LOS CAMBIOS (HACER COMMIT - COMITEAR) Y ENVIARLOS A REPOSITORIO REMOTO 

git status (para ver el working directory y el staging area)

git add . (para agregar TODOS los archivos que cambiaron o se crearon o se borraron)

git status (para ver los archivos en el staging area - confirmación de que estan ahi, que se copiaron al S.A.)

git commit -m "el mensaje" (para cerrar el paquete con todos los cambios)

git push (para enviar el paquete al repositorio remoto)


## PARA VER EL HISTORIAL DE CAMBIOS
git log (para ver el hisotorial)