const express = require('express');
const bodyParser = require("body-parser");
const expressHbs = require('express-handlebars');

const app = express();

const adminData = require('./routes/admin');
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


app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views','404.html'));
})

app.listen(3000);
