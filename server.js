const express = require('express');
const app = express();
const PORT = 8080;


app.use(express.json());


app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});







app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
