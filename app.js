const express = require('express');
const app = express();
const usersRoutes = require('./routes/usersRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', usersRoutes);


app.listen(3000, () => {
    console.log('Express está escuchando en el puerto 3000');
  });
  