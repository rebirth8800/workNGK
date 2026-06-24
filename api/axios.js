import axios from 'axios'


const apiClient = axios.create({
    baseURL: 'https://api.ngk-rabota.ru/v1',
    timeout: 10000, // таймаут 10 секунд
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})


axios.interceptors.response.use(function (config) {
    //TODO Добавить проверку что пришла не ошибка ~500
    return config;
})

export default apiClient