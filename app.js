const express = require('express');
const bodyParser = require("body-parser");
const expressHbs = require('express-handlebars');

const app = express();
const errorController = require('./controllers/error');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const path = require('path');

// app.engine('handlebars',expressHbs.engine({
//     layoutsDir:'views/layouts/',
//     defaultLayout: 'main-layout',
// }));
// app.set('view engine','pug');


app.set('view engine','ejs');

app.set('views','views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
