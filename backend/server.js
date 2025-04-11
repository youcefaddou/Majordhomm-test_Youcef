const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRouter = require('./router/contactRouter'); // Assurez-vous que ce fichier existe et est correctement configuré
dotenv.config();

const app = express();

// Middleware pour gérer les CORS
app.use(cors({ origin: 'http://localhost:5173' })); // Autorise les requêtes depuis le front-end
app.use(express.json()); // Parse les requêtes JSON

// Vérifiez que le routeur est bien utilisé
app.use(contactRouter);

// Middleware global pour capturer les erreurs
app.use((err, req, res, next) => {
  console.error("Erreur capturée :", err.stack); // Log détaillé de l'erreur
  res.status(500).json({ error: "Une erreur interne est survenue." });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3001; // Port par défaut
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});