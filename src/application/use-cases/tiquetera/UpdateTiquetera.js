
export default class UpdateTiquetera {

    constructor(tiqueteraRepository) {
        this.tiqueteraRepository = tiqueteraRepository;
    }

    async execute(id, datosActualizados) {
        const tiquetera = await this.tiqueteraRepository.getById(id);

        if (!tiquetera) {
            console.warn(`No se encontró ninguna tiquetera con el id: ${id}`);
            return null;
        }

        const totalTransaccionesActualizadas = tiquetera.totalTransacciones + 1;
<<<<<<< HEAD

        const datosParaActualizar = {
            ...datosActualizados,
            totalTransacciones: totalTransaccionesActualizadas
        };
=======
>>>>>>> 6a249dc3d2f5189f5ab624270d943c9ef210a0d3

        const datosParaActualizar = {
            ...datosActualizados,
            totalTransacciones: totalTransaccionesActualizadas
        };

<<<<<<< HEAD
=======
      
>>>>>>> 6a249dc3d2f5189f5ab624270d943c9ef210a0d3
        const tiqueteraActualizada = await this.tiqueteraRepository.update(id, datosParaActualizar);

        return tiqueteraActualizada;
    }
}


