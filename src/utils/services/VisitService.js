import axios from 'axios';

export const agendarVisita = async (info) => {
    const { name, tipo, data, horario } = info;
    try {
        const rota = {
            host: 'https://5f0f5e2100d4ab0016133d52.mockapi.io/pet-social/',
            routes: 'appointment',
        };

        const { data: dataRet } = await axios.post(`${rota.host}${rota.routes}`, {
            name, tipo, data, horario
        });

        return [dataRet, false];
    } catch (error) {
        return [false, error];
    }
};