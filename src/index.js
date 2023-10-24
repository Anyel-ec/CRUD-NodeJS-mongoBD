import app from  './app.js'
import { connectDB } from './db.js'


connectDB();
// escuchar por defecto del servidor o 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000')
}
);




