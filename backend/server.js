const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRouter = require('./router/contactRouter');
dotenv.config();

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(contactRouter);

app.use((err, req, res, next) => {
    res.status(500).json({ error: "Une erreur interne est survenue." });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});