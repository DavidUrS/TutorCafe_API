const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tutor-cafe',{ useNewUrlParser: true })
.then(()=>{
    console.log("se conecto a la base de datos");
})
.catch((err)=>{
    console.log("Hubo un error", err)
})