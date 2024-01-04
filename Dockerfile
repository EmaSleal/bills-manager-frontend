# Establece la imagen base
FROM node:14 as builder

# Establece el directorio de trabajo en la imagen
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de la aplicación al directorio de trabajo
COPY . .

# Compila la aplicación Angular para producción
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copia los archivos compilados de la etapa de construcción a la imagen nginx
COPY --from=builder /app/dist/* /usr/share/nginx/html/

# Copia el archivo de configuración personalizado de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80 para que la aplicación Angular sea accesible
EXPOSE 80

# Comando para iniciar el servidor nginx
CMD ["nginx", "-g", "daemon off;"]
