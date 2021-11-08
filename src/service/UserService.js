import AxiosService from "./AxiosService"

const axiosService = new AxiosService();
let baseURL = "http://fundoonotes.incubation.bridgelabz.com/api/"

class UserService{
    registration(url, data){
        return axiosService.postMethod(`${baseURL}${url}`, data);
    }
    login(url, data){
        return axiosService.postMethod(`${baseURL}${url}`, data);
    }
    reset(url, data){
        return axiosService.postMethod(`${baseURL}${url}`, data);
    }
    resetPassword(url, data){
        return axiosService.deleteMethod(`${baseURL}${url}`, data);
    }
}

export default UserService