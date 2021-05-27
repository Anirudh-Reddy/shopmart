import axios from 'axios';

const instance = axios.create({
    //API cloud function url 
    baseURL:"https://us-central1-shopmart-d1a28.cloudfunctions.net/api"
        //For Local debugging : 'http://localhost:5001/shopmart-d1a28/us-central1/api' 
});

export default instance;