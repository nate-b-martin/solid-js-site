const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

require('dotenv').config();

const port = process.env.PORT || 5000;


//Define middleware

//Serve static files from public folder
app.use(express.static('public'));

//Define Routes
app.get('/api', (req, res) => {
    res.send( 'Hello from server!' );
});

app.get('/content/homepage', (req, res) => {
    //Get homepage content
    const content = require('./public/content/homepage.json');
    res.json(content);
})

app.get('/images/:name', (req, res) => {
    res.sendFile(__dirname + '/public/images/' + req.params.name);
});



//Start server
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})