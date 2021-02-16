import axios from 'axios'
import constants from './constants'

const api = axios.create({
    baseURL: constants.BASE_API,
});

export default api