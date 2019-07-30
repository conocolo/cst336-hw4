const express = require('express');
const fake = require('faker');
const app = express();
const port = 3000; 
const controller = require('./controllers/controller');

// Set view engine
app.set("view engine", "ejs")

/* Enable file access */
app.use(express.static('public'));

// Set up routes
app.get('/', controller.idxResponder);

app.get('/db/:db', controller.dbResponder);

// Start server
app.listen(port, () => {
    console.log('Running express server...' + process.env.IP + ' ' + process.env.PORT);
    console.log(fake.name.findName());
});
