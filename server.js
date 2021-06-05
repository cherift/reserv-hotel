const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');

// personal modules
const routes = require('./routes/routes');

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();


// init the database access
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/fonts', express.static(__dirname + 'public/fonts'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));

//EJS
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(routes);
// render 404 page
app.use(function(req, res, next) {
    res.status(404)
        .render('404');
});
app.listen(PORT, () => console.log(`Project is running on http://localhost:${PORT}`));