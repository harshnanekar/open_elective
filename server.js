const express= require('express');
const app=express();
const bodyparser = require('body-parser');
const { postgres } = require('./app/config/database.js');
const indexRouter = require('./app/router/index.router.js')
postgres.connect();

app.set('view engine','ejs');
app.set('views','app/views/pages');

app.use(bodyparser.json());
    app.use(indexRouter)
app.use(express.static('public'));

app.listen(8080);