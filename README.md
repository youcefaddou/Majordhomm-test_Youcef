## Auteur

C'était laborieux mais j'ai pu le faire ^^ je suis fier de moi sachant que je ne maitrisais pas encore REACT et que j'ai du m'adapter a vitesse grand V !! j'ai eu un soucis d'envoi de formulaire à la fin mais j'ai pu le régler et tout envoyer a temps! Bon weekend ^^ 

## Structure du projet

### Front-end
- **Framework** : React avec Vite pour le développement rapide.
- **CSS** : Utilisation de TailwindCSS pour le style.
- **Dossier principal** : `src/`
  - **Composants** : `src/components/`
  - **Pages** : `src/pages/`

### Back-end
- **Framework** : Express.js.
- **Base de données** : MySQL.
- **ORM** : Prisma (optionnel, selon la configuration).
- **Dossier principal** : `backend/`

---

## Installation et configuration

### Prérequis
- Node.js (version 16 ou supérieure).
- MySQL installé et configuré.
- npm ou yarn pour la gestion des dépendances.

### Étapes d'installation
1. Clonez le dépôt :
   ```bash
   git clone <url-du-repo>
   cd majordhommtest
   ```

2. Installez les dépendances pour le front-end :
   ```bash
   npm install
   ```

3. Installez les dépendances pour le back-end :
   ```bash
   cd backend
   npm install
   ```

4. Configurez les variables d'environnement :
   - Créez un fichier `.env` dans le dossier `backend` avec les informations suivantes :
     ```properties
     PORT=3001
     DATABASE_URL="mysql://root@localhost:3306/mydb"
     ```

5. Créez la base de données et la table dans MySQL :
   ```sql
   CREATE DATABASE mydb;
   USE mydb;
   CREATE TABLE contacts (
       id INT AUTO_INCREMENT PRIMARY KEY,
       gender VARCHAR(10) NOT NULL,
       lastName VARCHAR(255) NOT NULL,
       firstName VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       phone VARCHAR(15) NOT NULL,
       day VARCHAR(20) NOT NULL,
       hour VARCHAR(5) NOT NULL,
       minutes VARCHAR(5) NOT NULL,
       subject VARCHAR(255) NOT NULL,
       content TEXT NOT NULL
   );
   ```

---

## Lancement du projet

### Démarrer le back-end
1. Accédez au dossier `backend` :
   ```bash
   cd backend
   ```
2. Lancez le serveur :
   ```bash
   node server.js
   ```
3. Le serveur sera accessible sur `http://localhost:3001`.

### Démarrer le front-end
1. Revenez au dossier principal :
   ```bash
   cd ..
   ```
2. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```
3. L'application sera accessible sur `http://localhost:5173`.

---

## Fonctionnalités

1. **Formulaire de contact** :
   - Collecte les coordonnées de l'utilisateur (nom, prénom, email, téléphone).
   - Permet de sélectionner des disponibilités (jour, heure, minutes).
   - Permet de saisir un message avec un sujet.

2. **Envoi des données au serveur** :
   - Les données sont envoyées au back-end via une requête POST.
   - Les données sont enregistrées dans une base de données MySQL.

3. **Validation des champs** :
   - Les champs du formulaire sont validés côté front-end avant l'envoi.

---

## Débogage

### Erreur 500
- Vérifiez les logs du serveur pour identifier le problème.
- Assurez-vous que la base de données est correctement configurée et accessible.

### Problème de connexion à MySQL
- Vérifiez les informations dans le fichier `.env`.
- Testez la connexion MySQL avec un outil comme phpMyAdmin ou MySQL Workbench.

---

## Technologies utilisées

- **Front-end** :
  - React
  - Vite
  - TailwindCSS

- **Back-end** :
  - Express.js
  - MySQL
  - Prisma (optionnel)

---


