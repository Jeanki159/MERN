require('dotenv').config();
const app=require('./app');
require ('./database.js');//Inicia la base de datos

async function main() {
    await  app.listen(app.get('port')); //Asíncrono 
    console.log('server on port 4000');
} //Función principal

main() //Llama la funcion principal