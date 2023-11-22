import db from '../mysql.js';

// Obtener todas las mascotas
export const getMascotas = async (req, res) => {
    try {
        const mascotas = await db.query('SELECT * FROM Mascota');
        res.json(mascotas);
    } catch (error) {
        console.error('Error al obtener mascotas:', error);
        res.status(500).json({ error: 'Error al obtener mascotas' });
    }
};

export const getMascotaById = async (req, res) => {
    const id = req.params.id;
    try {
        const mascota = await db.query('SELECT * FROM mascota WHERE id = ?', [id]);
        if (mascota.length === 0) {
            res.status(404).json({ error: 'Mascota no encontrada' });
        } else {
            res.json(mascota[0]);
        }
    } catch (error) {
        console.error('Error al obtener la mascota:', error);
        res.status(500).json({ error: 'Error al obtener la mascota' });
    }
};


export const createMascota = async (req, res) => {
    const { nombre, edad } = req.body;
    try {
        if (!nombre || !edad) {
            return res.status(400).json({ error: 'Se requieren nombre y edad para crear una mascota.' });
        }

        const respuesta = await db.query('INSERT INTO Mascota (nombre, edad) VALUES (?, ?)', [nombre, edad]);

        // Verificar si se insertó correctamente
        if (respuesta && respuesta.affectedRows > 0) {
            res.json({ mensaje: 'Mascota creada con éxito', id: respuesta.insertId });
        } else {
            res.status(500).json({ error: 'No se pudo crear la mascota' });
        }
    } catch (error) {
        console.error('Error al crear la mascota:', error);
        res.status(500).json({ error: 'Error al crear la mascota' });
    }
};

// Actualizar una mascota por su ID
export const updateMascota = async (req, res) => {
    const id = req.params.id;
    const datosActualizados = req.body;
    try {
        // Validar y realizar la actualización en la base de datos
        // ...

        res.json({ mensaje: 'Mascota actualizada con éxito' });
    } catch (error) {
        console.error('Error al actualizar la mascota:', error);
        res.status(500).json({ error: 'Error al actualizar la mascota' });
    }
};

// Eliminar una mascota por su ID
export const deleteMascota = async (req, res) => {
    const id = req.params.id;
    try {
        // Realizar la eliminación en la base de datos
        // ...

        res.json({ mensaje: 'Mascota eliminada con éxito' });
    } catch (error) {
        console.error('Error al eliminar la mascota:', error);
        res.status(500).json({ error: 'Error al eliminar la mascota' });
    }
};