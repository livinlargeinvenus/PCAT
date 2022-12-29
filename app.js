const express = require('express');
const path = require('path');

const app = express();

// MIDDLEWARES
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './temp/index.html'));
});

// port
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda baslatildi...`);
});
