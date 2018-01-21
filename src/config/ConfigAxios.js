import axios from 'axios';

const ConfigAxios = ()=>{
    axios.defaults.baseURL = 'http://localhost:3000/api/v1/'
}

export default ConfigAxios;