
export default class UpdateTiquetera {

    constructor(tiqueteraRepository) {
        this.tiqueteraRepository = tiqueteraRepository;
    }
    async execute(id, datosActualizados) {
        const tiqueteraActualizada = await this.tiqueteraRepository.update(id, datosActualizados);

        if (!tiqueteraActualizada) {
            console.warn(`No se encontró ninguna tiquetera con el id: ${id}`);
            return null;
        }

        const totalTransaccionesActualizadas = tiqueteraActualizada.totalTransacciones + 1;
        tiqueteraActualizada.totalTransacciones = totalTransaccionesActualizadas


        await this.tiqueteraRepository.update(id, { totalTransacciones: totalTransaccionesActualizadas });


        return tiqueteraActualizada;
    }

}


