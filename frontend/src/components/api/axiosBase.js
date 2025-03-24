import axios from 'axios'



const axiosBase_URL = axios.create({
    baseURL: "http://127.0.0.1:5001/clone-ef3f0/us-central1/api"
    


});

export {axiosBase_URL}