# -  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-play-fill" viewBox="0 0 16 16">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M6 5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43V5.884z"/>
</svg> RutinaTube | Test para Soluciones JM

Este archivo README.md te guiará a través de los pasos necesarios para configurar y ejecutar tu aplicación Next.js localmente.

## Configuración Inicial

1. Clona el repositorio en tu máquina local usando `git clone`.
2. Navega al directorio del proyecto con `cd [nombre-del-proyecto]`.
3. Instala las dependencias del proyecto con `npm install`.

## Configuración de la Base de Datos

Para configurar la base de datos, debes convertir el archivo `.env.txt` en `.env.local` y sustituir las variables de entorno correspondientes:

1. Renombra el archivo `.env.txt` a `.env.local`.
2. Abre el archivo `.env.local` en tu editor de texto preferido.
3. Busca la variable `POSTGRES_PRISMA_URL` y asígnale el valor `"postgres://default:CzSo0hnOqi3H@ep-green-darkness-46485590-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15"`.
4. Busca la variable `POSTGRES_URL_NON_POOLING` y asígnale el valor `"postgres://default:CzSo0hnOqi3H@ep-green-darkness-46485590.us-east-1.postgres.vercel-storage.com:5432/verceldb"`.

Esto permitirá que tu aplicación se conecte correctamente a la base de datos de PostgreSQL con el ORM Prisma.

## Ejecución del Proyecto

Una vez que hayas completado los pasos anteriores, puedes iniciar tu aplicación localmente con el siguiente comando:

```
npm run dev
```

Esto iniciará tu aplicación en modo de desarrollo. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver tu aplicación en acción.



# - Resumen de Comandos utilizados

## Instalación e iniciación del proyecto
`npm i`
`npm run dev`

## Dependencias y utilidades
`npm i axios`
`npm i react-icons`
`npm i react-hook-form`
`npm i redux`
`npm i react-redux`
`npm i react-content-loader`
`npm i redux-thunk`

## Base de datos
`npm i @vercel/postgres`
`npm install prisma --save-dev`
`npx prisma init`
`npx prisma migrate dev --name init`
`npx prisma studio`

## Repositorio
`git add .`
`git commit -m 'name'`
`git push origin main`
