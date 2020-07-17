import axios from 'axios';

export const cadastrarPet = async (data) => {
    const { name, raca, especie, porte, idade, genero, descricao, } = data;
    try {
        const rota = {
            host: 'https://5f0f5e2100d4ab0016133d52.mockapi.io/pet-social/',
            routes: 'pet',
        };

        const { data: dataRet } = await axios.post(`${rota.host}${rota.routes}`, {
            name, raca, especie, porte, idade, genero, descricao
        });

        return [dataRet, false];
    } catch (error) {
        return [false, error];
    }
};