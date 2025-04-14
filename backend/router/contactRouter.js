const express = require('express');
const router = express.Router();

router.post('/contact', async (req, res) => {
    try {
        const { coordinates, availabilities, message } = req.body;
        res.status(200).json({ message: "Contact enregistré avec succès !" });
    } catch (error) {
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
});

module.exports = router;
