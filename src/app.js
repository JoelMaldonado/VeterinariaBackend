import express from 'express';
import env from 'dotenv';
import cors from 'cors';
import mascotasRoutes from './routes/mascota.routes.js';
import db from './mysql.js';

env.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;
const ip = process.env.IP;


app.use('/api', mascotasRoutes);


async function startServer() {
    try {
        await db.connect();
        console.log('Conexión a la base de datos exitosa');
        app.listen(port, ip, () => {
            console.log(`Servidor Express http://${ip}:${port}`);
        });
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

startServer();