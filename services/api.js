import axios from 'axios';
const url = 'http://localhost:4000'

export default axios.create({
    baseURL: url
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});