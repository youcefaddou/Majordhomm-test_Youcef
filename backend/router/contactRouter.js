const express = require('express');
const router = express.Router();

router.post('/contact', async (req, res) => {
    try {
        console.log("Données reçues :", req.body); // Log des données reçues

        // Exemple de traitement des données
        const { coordinates, availabilities, message } = req.body;

        // Simulez une insertion dans la base de données ici
        // Par exemple, avec Prisma ou Mongoose :
        // await prisma.contact.create({ data: { ... } });

        res.status(200).json({ message: "Contact enregistré avec succès !" });
    } catch (error) {
        console.error("Erreur lors du traitement de la requête :", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
});

module.exports = router;
