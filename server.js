const express = require('express');
const enforce = require('express-sslify');

const app = express();

app.use(enforce.HTTPS({trustProtoHeader : true}));

app.get('/registerServiceWorker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'registerServiceWorker.js'));
});
