import AxiosService from "./AxiosService"

const axiosService = new AxiosService();
let baseURL = "http://fundoonotes.incubation.bridgelabz.com/api/"
let tokenHeader = {
    headers: {
        'Authorization': 'jW7wmbiJJrxGxVjDzAnddSlYk3KLEzNXHbIHxHW2U5HjXGGPzV8e8OT4LYVsokPN'
    }
};

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
        return axiosService.postMethod(`${baseURL}${url}`, data, tokenHeader);
    }
}

export default UserService