const express = require('express');
const cors=require('cors');
const appp=express();

//settings
appp.set('port',process.env.PORT || 4000); // utiliza  el que se encuentre en la variable de entorno PORT o usa el definido.



//middlewares
appp.use(cors());
appp.use(express.json());

//routes
appp.use('/api/users', require('./routes/users') );
appp.use('/api/notes',require('./routes/notes') );

module.exports=appp;