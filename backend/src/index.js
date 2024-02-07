const app=require('./app');


async function main() {
    await  app.listen(4000); //Asíncrono 
    console.log('server on port 4000');
} //Función principal

main()