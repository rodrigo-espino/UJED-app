const express = require('express');
const app = express();

// Middleware para parsear el body de las peticiones
app.use(express.urlencoded({ extended: true }));

// Rutas
app.get('/', (req, res) => {
    res.send('Página de inicio');
});

app.get('/login', (req, res) => {
    res.send(`
        <h2>Iniciar Sesión</h2>
        <form method="POST" action="/login">
            <input type="text" name="username" placeholder="Nombre de usuario" required><br>
            <input type="password" name="password" placeholder="Contraseña" required><br>
            <button type="submit">Iniciar Sesión</button>
        </form>
    `);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'ujeduser1' && password === 'ujedapp1') {
        res.send('Inicio de sesión exitoso');
    } else {
        res.send('Credenciales incorrectas');
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
