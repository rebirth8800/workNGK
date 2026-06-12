import axios from 'axios'


const apiClient = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000, // таймаут 10 секунд
    headers: {
        'Content-Type': 'application/json'
    }
})


axios.interceptors.response.use(function (config) {
    //TODO Добавить проверку что пришла не ошибка ~500
    return config;
})

export default apiClient