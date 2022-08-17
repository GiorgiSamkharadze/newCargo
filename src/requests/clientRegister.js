export function clientRegister(axios, data){
    return axios.post(`/client`, data);
}
