const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

// Configuración de la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/login_example', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

// Definición del esquema de usuario
const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});
const User = mongoose.model('User', UserSchema);

// Configuración de Express
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

// Rutas
app.get('/', (req, res) => res.render('index'));
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
        req.session.userId = user._id;
        res.redirect('/dashboard');
    } else {
        req.flash('error', 'Nombre de usuario o contraseña incorrectos');
        res.redirect('/');
    }
});
app.get('/dashboard', (req, res) => {
    if (req.session.userId) {
        res.render('dashboard');
    } else {
        res.redirect('/');
    }
});
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));
