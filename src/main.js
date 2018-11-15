const express = require('express');
const app = express();
const { port } = require('./config/keys');
const peopleRouter = require('./routes/people-routes');
const morgan = require('morgan');
require('./config/database')

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/peoples', peopleRouter);

app.listen(port,()=>{
    console.log(`Servidor escuchando en puerto ${port}`)
})