import { endpoints } from '~/shared/global';

const token = localStorage.getItem('token');

export default class AxiosConfig {
    static config = {
        baseURL: endpoints.host,
        timeout: 10000,
        headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            Authorization: token ? `Bearer ${token}` : null,
            'Content-Type': 'application/json'
        },
        responseType: 'json',
        crossDomain: true
    };

    static changeConfig = config => {
        return {
            ...AxiosConfig.config,
            ...config
        };
    };
}
