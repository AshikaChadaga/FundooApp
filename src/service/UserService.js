import AxiosService from "./AxiosService"

const axiosService = new AxiosService();
let baseURL = "http://fundoonotes.incubation.bridgelabz.com/api/";

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
    resetPassword(url, data, config){
        return axiosService.postMethod(`${baseURL}${url}`, data, config);
    }
    addNotes(url, data, config){
        return axiosService.postMethod(`${baseURL}${url}`, data, config);
    }

    displayNotes(url, config){
        return axiosService.getMethod(`${baseURL}${url}`, config);
    }
}

export default UserService