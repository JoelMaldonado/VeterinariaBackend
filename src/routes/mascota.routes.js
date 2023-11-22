// mascotas.routes.js
import express from 'express';
import * as mascotasController from '../controllers/mascota.controllers.js';

const router = express.Router();

// Rutas
router.get('/mascotas', mascotasController.getMascotas);
router.get('/mascotas/:id', mascotasController.getMascotaById);
router.post('/mascotas', mascotasController.createMascota);
router.put('/mascotas/:id', mascotasController.updateMascota);
router.delete('/mascotas/:id', mascotasController.deleteMascota);

export default router;