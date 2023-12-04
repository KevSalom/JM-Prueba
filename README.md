# RutinaTube | Test para Soluciones JM

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

¡Feliz desarrollo!
