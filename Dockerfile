# Utiliser une image Node.js pour construire l'application Angular
FROM node:22.9.0 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application Angular
RUN npm run build

# Utiliser une image Nginx pour servir l'application Angular
FROM nginx:alpine

# Copier les fichiers construits de l'étape précédente
COPY --from=build /app/dist/gonagoo /usr/share/nginx/html

# Copier le fichier de configuration Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]