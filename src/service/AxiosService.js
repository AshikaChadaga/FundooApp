import axios from 'axios'

class AxiosService{
    postMethod(url, data, config){
        return axios.post(url, data, config);
    }
    // getMethod(){
    // }
    // deleteMethod(){
    // }
}

export default AxiosService