const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;

const app = express();

app.get('*', (req,res) => {
   res.send('hello'); 
});

app.listen(port, () => {
   console.log('app started');   
});