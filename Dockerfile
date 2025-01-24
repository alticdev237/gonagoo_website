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

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80"]