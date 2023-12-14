const express= require('express');
const app=express();
const bodyparser = require('body-parser');
const router = require('./app/router/route.js');
const {pg} = require('pg');
pg.connect();

app.set('view engine','ejs');
app.set('views','app/views/pages');

app.use(bodyparser.json());
app.use('/api',router);
app.use(express.static('public'));


app.listen(8080);