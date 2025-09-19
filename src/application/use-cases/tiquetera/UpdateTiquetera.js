
export default class UpdateTiquetera {

    constructor(tiqueteraRepository) {
        this.tiqueteraRepository = tiqueteraRepository;
    }

    async execute(id, datosActualizados) {
        const tiquetera = await this.tiqueteraRepository.findById(id);

        if (!tiquetera) {
            console.warn(`No se encontró ninguna tiquetera con el id: ${id}`);
            return null;
        }

        const totalTransaccionesActualizadas = tiquetera.totalTransacciones + 1;

        const datosParaActualizar = {
            ...datosActualizados,
            totalTransacciones: totalTransaccionesActualizadas
        };


        const tiqueteraActualizada = await this.tiqueteraRepository.update(id, datosParaActualizar);

        return tiqueteraActualizada;
    }
}


